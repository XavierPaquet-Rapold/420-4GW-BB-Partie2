var express = require('express');
var app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const siteTitle = "To Spite The Amish";
const baseURL = "http://localhost:4000";
const bcrypt = require('bcrypt');

const { Client, Environment, ApiError } = require('square');
// Set the Access Token which is used to authorize to a merchant
const accessToken = 'EAAAEGxTcqF1rGtpNNjjhGgWSWUPZF88ISaZwJ5v8yQ_Yt85K2Z3wG-RN8GdbfKQ';

// Initialized the Square api client:
//   Set sandbox environment for testing purpose
//   Set access token
const client = new Client({
    environment: Environment.Sandbox,
    accessToken: accessToken,
});

//Connection a mongoDB et ecoute sur le port
const url = "mongodb+srv://Xavier:1234@cluster0.loi5s.mongodb.net/db_site?retryWrites=true&w=majority";
mongoose.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true 
})
    .then((result) => app.listen(4000, function(){
        console.log("serveur fonctionne sur 4000");
    }))
    .catch((err) => console.log(err));

/**
 * setup de session
 */
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

const Inventaire = require('./models/inventaire');
const Magasin = require('./models/magasin');
const Panier = require('./models/panier');
const Produit_Categorie = require('./models/produit_categorie');
const Produit = require('./models/produit');
const Utilisateur = require('./models/utilisateur');
const { validate } = require('./models/inventaire');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use( express.static( "views" ) );
module.exports = app;
app.set('view engine', 'ejs');

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/script'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/style'));

app.use(function (req, res, next) {

    if(req.originalUrl !== '/logout'){
        // check if client sent cookie
        var cookie = req.cookies.user;
        if (cookie !== undefined) {
            // yes, cookie was already present 
            var userID = cookie;
            const query={_id : userID};
            Promise.all([
                Utilisateur.findOne(query)
            ]).then(([result]) => {
                if (result) {
                    req.session.loggedin = true;
                    req.session.username = result.username;
                    req.session.id_utilisateur = userID;
                } else {
                    res.status(204).send();
                }
            });
        }
    } 
    
    next(); // <-- important!
    });

app.post('/process-payment', async (req, res) => {
    
    const requestParams = req.body;
    // Charge the customer's card
    const paymentsApi = client.paymentsApi;
    const requestBody = {
        sourceId: requestParams.nonce,
        amountMoney: requestParams.money,
        locationId: requestParams.location_id,
        idempotencyKey: requestParams.idempotency_key,
    };
    
    try {
        await paymentsApi.createPayment(requestBody);
        Panier.deleteMany({ utilisateur: req.session.id_utilisateur }, function (err) {
            if(err) console.log(err);
        });
        res.status(200).json({
            'title': 'Payment Successful'
        });
    } catch(error) {
        
        let errorResult = null;
        if (error instanceof ApiError) {
        errorResult = error.errors;
        } else {
        errorResult = error;
        }
        console.log(errorResult);
        res.status(500).json({
        'title': 'Payment Failure',
        'result': errorResult
        });
    
    }
    });

/*
pour générer la page principale
*/
app.get('/', function (req, res) {
    Promise.all([
        Produit_Categorie.find()
    ]).then(([categories]) => {
        res.render('pages/index.ejs', {
            siteTitle: siteTitle,
            pageTitle: "Page Principale",
            items: categories,
            connexion: req.session.loggedin
        });
    });
});

/*
pour generer la page de categorie
*/
app.get('/categorie/:id', function (req, res) {
    const query = { nom: req.params.id };
    Produit_Categorie.findOne(query)
    .then((result) => {
        const query2 = { id_catégorie : result.id };
        Promise.all([
            Produit.find(query2),
            Produit_Categorie.find()
        ]).then(([result, result2]) => {
            res.render('pages/categorie.ejs', {
                siteTitle: siteTitle,
                pageTitle: "Categorie",
                outils: result,
                items: result2,
                connexion: req.session.loggedin
            });
        });
    })
});

/*
pour generer la page de produit
*/
app.get('/produit/:id', function (req, res) {
    Produit.find({ nom: req.params.id })
    .then((produit) => {
        Promise.all([
            Inventaire.find({ id_produit: produit[0].id }),
            Produit_Categorie.find(),
            Magasin.find(),
        ])
        .then(([inventaire, categorie, magasin]) =>{
            res.render('pages/produit.ejs', {
                siteTitle: siteTitle,
                pageTitle: "Produit",
                item: produit,
                outils: inventaire,
                items: categorie,
                magasins: magasin,
                connexion: req.session.loggedin
            });
        });
    })
});

/*
pour generer la page de panier
*/
app.get('/panier', function (req, res) {
    Promise.all([
        Produit_Categorie.find(),
        Panier.aggregate([
            {
                '$match': { utilisateur : req.session.id_utilisateur }
            },
            { '$lookup':
                {
                    'from': Produit.collection.name,
                    'localField': "produit",
                    'foreignField': "_id",
                    'as': "info_produit"
                }
            }
        ])
    ]).then(([result, result1])=>{
        res.render('pages/panier.ejs', {
            siteTitle: siteTitle,
            pageTitle: "Panier",
            items: result,
            outils: result1,
            connexion: req.session.loggedin
        });
    });
});

/*
pour generer la page de connexion
*/
app.get('/connexion', function (req, res) {
        Promise.all([
            Produit_Categorie.find()
        ]).then(([result]) => {
            res.render('pages/connexion.ejs', {
                siteTitle: siteTitle,
                pageTitle: "Connexion",
                items: result,
                connexion: req.session.loggedin
            });
    });
});

/*
pour generer la page de creation de compte
*/
app.get('/creation', function (req, res) {
        Promise.all([
            Produit_Categorie.find()
        ]).then(([result]) => {
            res.render('pages/creation.ejs', {
                siteTitle: siteTitle,
                pageTitle: "Creation de compte",
                items: result,
                connexion: req.session.loggedin
            });
        });
});

/**
 * get methode : pour fermer la session de l'utilisateur
 */
app.get('/logout',  function (req, res, next)  {
    if (req.session.loggedin) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                next(err);
            }
            if(req.cookies.user !== undefined){
                res.clearCookie('user');
            }
            
            res.redirect(req.get('referer'));
        });
    } else {
        res.redirect(req.get('referer'));   
    }
});

/*
pour ajouter un produit au panier
*/
app.post('/produit/:id', function (req, res) {
    if(req.session.loggedin){
        Panier.findOneAndUpdate(
            { produit: req.body.id_produit, utilisateur: req.session.id_utilisateur }, 
            { $inc: { nombre: req.body.quantity } }, { upsert: true },
            function(err, result) { 
                res.redirect(req.get('referer'));
            }
        )
    }else{
        res.status(204).send();
    }
});

/*
Enlever un produit du panier
*/
app.post('/panier/enlever/:id', function (req, res) {
    var id = req.params.id;
    if(req.session.loggedin){
        Panier.findOneAndDelete(id, function (err) {
            if(err) console.log(err);
        });
        res.redirect(req.get('referer'));
    }else{
        res.status(204).send();
    }
});




/*
Modifier la quantite d'un produit dans son panier
*/
app.post('/panier/modifier/:id', function (req, res) {
    if(req.session.loggedin){
        Panier.findByIdAndUpdate(
            { _id: req.params.id },
            { nombre: req.body.quantity },
            function(err, result) {
                if (err) {
                    res.redirect(req.get('referer')); 
                } else {
                    res.redirect(req.get('referer')); 
                }
            }
        );
    }else{
        res.status(204).send();
    }
});

/**
 * Reception de connexion et mise en memoire
 */
app.post('/connexion', function(req, res){
    var username = req.body.username;
    var staySignedIn = req.body.signedIn;
    const query={email:username};
    Promise.all([
        Utilisateur.findOne(query)
    ]).then(([result]) => {
        if (result) {
            if(staySignedIn === 'checked'){
                //Le cookie expire apres un an
                res.cookie('user',  result.id, {maxAge: 1000*60*60*24*365});
            }
            req.session.loggedin = true;
            req.session.id_utilisateur = result.id;
            res.redirect('/panier');
        } else{
            bcrypt.compare(req.body.password, user[0].password)
            .then(function(){
                console.log(user[0])
            })
            res.status(204).send();
        }
    })
});

/**
 * post methode to date : pour ajouter un utilisateur a la BD
 */
app.post('/creation', function (req,res){
    Promise.all([
        Utilisateur.findOne({ email: req.body.email })
    ]).then(([result]) => {
        if(!result){
            var postale = req.body.Postale.split(" ").join("");
            var tel = req.body.tel.split("-").join("");
        
            var userData ={
                prenom : req.body.Prenom,
                nom: req.body.Nom,
                email: req.body.email,
                password: req.body.password,
                telephone: tel,
                adresse: req.body.Adresse,
                ville: req.body.ville ,
                postale: postale
            }
            new Utilisateur(userData)
            .save()
            .then(userData=>{
                res.redirect('/connexion')
            })
        } else {
            res.redirect('/creation')
        }
    })
    
});