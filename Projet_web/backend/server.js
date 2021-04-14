var express = require('express');
var http = require('http');
var app = express();
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
var dateFormat = require('dateformat');
const mongoose = require('mongoose');
const { Console } = require('console');
var now = new Date();
const siteTitle = "To Spite The Amish";
const baseURL = "http://localhost:4000";
//Connection a mongoDB et ecoute sur le port
const url = "mongodb+srv://Xavier:1234@cluster0.loi5s.mongodb.net/db_site?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
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

/*
pour générer la page principale
*/
app.get('/', function (req, res) {
    /**con.query("SELECT * FROM produit_catégorie ORDER BY id_catégorie ASC", function (
        err, result) {
        res.render('pages/index', {
            siteTitle: siteTitle,
            pageTitle: "Page Principale",
            items: result,
            connexion: req.session.loggedin
        });
    });**/
    Promise.all([
        Produit_Categorie.find()
    ]).then(([categories]) => {
        res.render('pages/index', {
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
    /**con.query("SELECT * FROM produit WHERE produit_catégorie_id_catégorie = (SELECT id_catégorie FROM produit_catégorie WHERE nom = ?); "+
    "SELECT * FROM produit_catégorie ORDER BY id_catégorie ASC", [req.params.id],
        function (err, result) {
            res.render('pages/categorie.ejs', {
                siteTitle: siteTitle,
                pageTitle: "Categorie",
                outils: result[0],
                items: result[1],
                connexion: req.session.loggedin
            });*/
            Promise.all([
                Produit_Categorie.find()
            ]).then(([result]) => {
                res.render('pages/categorie.ejs', {
                    siteTitle: siteTitle,
                    pageTitle: "Categorie",
                    outils: result[0],
                    items: result[1],
                    connexion: req.session.loggedin
                });

    });
});

/*
pour generer la page de produit
*/
app.get('/produit/:id', function (req, res) {
   /**  con.query("SELECT id_produit, image, marque, nom, prix, description FROM produit WHERE nom = ?;" +
    " SELECT b.nombre, c.nom, c.adresse, c.ville, c.code_postale, c.tel FROM produit a, inventaire b, magasin c WHERE a.id_produit = b.produit_id_produit AND a.nom = ? AND b.magasin_id_magasin = c.id_magasin;"+
    " SELECT * FROM produit_catégorie ORDER BY id_catégorie ASC;", [req.params.id, req.params.id],
        function (err, result) {
            res.render('pages/produit.ejs', {
                siteTitle: siteTitle,
                pageTitle: "Produit",
                item: result[0],
                outils: result[1],
                items: result[2],
                connexion: req.session.loggedin
            });
        });**/
Promise.all([
    Produit.find()]).then(([result]) =>{
        res.render('pages/produit.ejs', {
            siteTitle: siteTitle,
            pageTitle: "Produit",
            item: result[0],
            outils: result[1],
            items: result[2],
            connexion: req.session.loggedin
        });
    });
});

/*
pour generer la page de panier
*/
app.get('/panier', function (req, res) {
    /**con.query("SELECT * FROM produit_catégorie ORDER BY id_catégorie ASC;" + 
    " SELECT produit.id_produit, panier.nombre, produit.image, produit.nom, produit.marque, produit.prix FROM panier, produit WHERE utilisateur_id_utilisateur = ? "+
    "AND panier.produit_id_produit = produit.id_produit;", 
    [req.session.id_utilisateur],

    function (err, result) {
        res.render('pages/panier.ejs', {
            siteTitle: siteTitle,
            pageTitle: "Panier",
            items: result[0],
            outils: result[1],
            connexion: req.session.loggedin
        });
    });**/
Promise.all([Panier.find()]).then(([result])=>{
    res.render('pages/panier.ejs', {
        siteTitle: siteTitle,
        pageTitle: "Panier",
        items: result[0],
        outils: result[1],
        connexion: req.session.loggedin
    });
});
});

/*
pour generer la page de connexion
*/
app.get('/connexion', function (req, res) {
    /**con.query("SELECT * FROM produit_catégorie ORDER BY id_catégorie ASC", function (
        err, result) {
        res.render('pages/connexion.ejs', {
            siteTitle: siteTitle,
            pageTitle: "Connexion",
            items: result,
            connexion: req.session.loggedin
        });*/
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
    /**con.query("SELECT * FROM produit_catégorie ORDER BY id_catégorie ASC",
        function (err, result) {
            res.render('pages/creation.ejs', {
                siteTitle: siteTitle,
                pageTitle: "Creation de compte",
                items: result,
                connexion: req.session.loggedin
            });
        });*/
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
            res.redirect(req.get('referer'));
        });
    } else {
        res.redirect(req.get('referer'));   
    }
});

/*
pour ajouter un produit au panier
*/
/**app.post('/produit/:id', function (req, res) {
    // get the record base on ID
    var quantite = req.body.quantity;
    var id_produit = req.body.id_produit;
    if(req.session.loggedin){
        con.query("INSERT INTO panier (produit_id_produit, utilisateur_id_utilisateur, nombre) VALUES (?, ?, ?);", [id_produit, req.session.id_utilisateur, quantite], 
        function (err, result) {
            if (err) {
                res.redirect(req.get('referer')); 
            }
            else{
                res.status(204).send();
            }
        });
    }else{
        res.status(204).send();
    }
});**/

/*
Enlever un produit du panier
*/
/**app.post('/panier/enlever/:id', function (req, res) {
    var id_produit = req.body.id_produit;
    if(req.session.loggedin){
        con.query("DELETE FROM panier WHERE produit_id_produit = ? AND utilisateur_id_utilisateur = ?", [id_produit, req.session.id_utilisateur],
        function (err, result) {
            if (err) throw err;
            res.redirect('/panier');
        });
    }else{
        res.status(204).send();
    }
});**/

/*
Modifier la quantite d'un produit dans son panier
*/
/**app.post('/panier/modifier/:id', function (req, res) {
    var id_produit = req.body.id_produit;
    var nombre = req.body.quantity;
    if(req.session.loggedin){
        con.query("UPDATE panier SET nombre = ? WHERE produit_id_produit = ? AND utilisateur_id_utilisateur = ?", [nombre, id_produit, req.session.id_utilisateur],
        function (err, result) {
            if (err) {
                res.redirect(req.get('referer')); 
            }
            else{
                res.status(204).send();
            }
        });
    }else{
        res.status(204).send();
    }
});**/

/**
 * Reception de connexion et mise en memoire
 */
/**app.post('/connexion', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        con.query('SELECT * FROM utilisateur WHERE email = ? AND mot_de_passe = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                req.session.id_utilisateur = results[0].id_utilisateur;
                res.redirect('/panier');
            } else {
                res.status(204).send();
            }
        });
    } else {
        res.status(204).send();
    }
});**/

/**
 * post methode to date : pour ajouter un utilisateur a la BD
 */
app.post('/creation', function (req,res){
    var postale = req.body.Postale.split(" ").join("");
    var tel = req.body.tel.split("-").join("");
    /**var query = "INSERT INTO utilisateur(email, tel, nom, prenom, addresse, ville, code_postale, mot_de_passe) VALUES(";
        query += " '"+req.body.email+"',"; 
        query += " '"+tel+"',"; 
        query += " '"+req.body.Nom+"',"; 
        query += " '"+req.body.Prenom+"',";
        query += " '"+req.body.Adresse+"',"; 
        query += " '"+req.body.ville+"',";
        query += " '"+postale+"',";
        query += " '"+req.body.password+"')";
       
    console.log(query);
    con.query(query, function(err,result){
        if(err) throw err;
        res.redirect(baseURL);
    });*/
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
    res.json({
        message: 'Utilisateur ajouté!'
    })
})
res.redirect(baseURL);

});