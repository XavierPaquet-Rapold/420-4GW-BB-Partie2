# Application_Web
<h1> Boutique d’appareils électronique </h1>

<h2>Description:</h2>
<ul>
    <li><b>Barre de navigation:</b> logo, menu déroulant avec les différentes catégories, nom du site, et des actions selon si l’utilisateur est connecté ou non: </li>
    <ul>
        <li>Déconnecté: lien vers les pages de connexion et de création de compte. </li>
        <li>Connecté:  menu déroulant de profil avec un lien vers le panier et pour se déconnecter </li>
    </ul>
    <li><b>Page principale:</b> lien vers les différentes catégories de produits (console, téléphone, ordinateur portable, souris, écouteurs, frigos connectés) avec leur photo et leur nom </li>
    <li><b>Page de catégorie sélectionnée:</b> liste des différents produits avec image, prix, nom </li>
    <li><b>Page de produit sélectionné:</b> nom, marque, prix, description, quantité à mettre dans le panier et bouton pour mettre dans le panier(si connecté), tableau de disponibilité dans magasin </li>
    <li><b>Page de connexion:</b> nom d’utilisateur, mot de passe, lien vers la création de compte </li>
    <li><b>Page de création de comptes:</b> prénom, nom, courriel, mot de passe, téléphone, adresse, ville, code postal </li>
    <li><b>Page de panier:</b> si l’utilisateur est connecté et qu’il y a quelque chose dans son panier, affichage dans une table l’image, le nom, la marque, le nombre, le prix unitaire, le prix total et de options pour chacun des produits. </li>
    <ul>
        <li>Actions: modifier le nombre du produit et enlever le produit du panier.</li>
        <li>Fin du tableau: Affichage du prix total du panier sans les taxes </li>
    </ul>
</ul>
<h2>Résumé: </h2>
<ul>
    <li><b>Page principale:</b> Cette page permet à l’utilisateur d’accéder aux 6 différentes catégories sois console, téléphone, ordinateur portable, souris, écouteurs ou frigidaires. Quand l’utilisateur sélectionnera une des catégories, il sera redirigé vers la page de la catégorie sélectionnée. </li>
    <li><b>Page de catégorie sélectionnée:</b> Cette page affichera tous les différents produits correspondant à leur catégorie respective. Une image de chaque produit sera présente sur la page, ainsi que le nom et le prix des produits. En cliquant sur un produit, l’utilisateur sera redirigé vers la page du produit. </li>
    <li><b>Page de produit sélectionnée:</b> Cette page contient une image du produit sélectionné, le nom du produit, son prix et dans quel magasin il est disponible. Si l’utilisateur est connecté, il y a un menu déroulant pour le nombre de produit à mettre dans le panier et un bouton qui permet de mettre le produit dans le panier de l’utilisateur, en cliquant sur le bouton l’utilisateur ne sera pas redirigé à la page de panier, mais le produit sera rajouté au panier.  </li>
    <li><b>Page de connexion:</b> Cette page affichera le menu de connexion pour le client. L’utilisateur pourra entrer son adresse courriel ainsi que son mot de passe pour avoir accès à son panier de produits. Si l’utilisateur n’a pas de compte de connexion, il pourra cliquer sur un bouton de création de comptes et être redirigé vers la page respective. </li>
    <li><b>Page de création de comptes :</b> Cette page affichera le menu pour que l’utilisateur puisse se créer un compte. Les clients pourront y accéder à l’aide d’un bouton, qui se trouve dans la page connexion. Il aura le choix de se faire un compte pour accélérer le processus de l’achat et ainsi avoir l’accès au panier. </li>
    <li><b>Page de panier:</b> Cette page aura le panier du client, celui-ci contiendra tous les achats qui vont se faire dans le magasin pour que le client puisse continuer à magasiner sans perdre les articles désirés. Les produits présents dans le panier seront sauvegardés dans la base de données, donc quand l’utilisateur fermera sa session, il ne perdra pas les produits dans le panier. </li>
    <li><b>barre de navigation:</b>la même pour tout le site, elle change selon si l’utilisateur est connecté ou non.</li>
    <ul>
        <li>Si l’utilisateur n’est pas connecté: lien vers les pages de connexion et de création de compte. </li>
        <li>Si l’utilisateur est connecté:  menu déroulant de profil avec un lien vers le panier et pour se déconnecter </li>
    </ul>
</ul>
<h2>Futur projets pour le site web:</h2>
<ul>
    <li>Ajout de AJAX pour vérifier les informations envoyés par le client au niveau client et pouvoir envoyer des alertes s’il y a une erreur au niveau serveur pour mettre le client au courrant des problèmes. </li>
    <li>Insertion des modules de paiement dans la page panier pour que le client puisse acheter </li>
    <li>Insertion d’un module Google Maps pour les adresses des magasins </li>
    <li>Vérification du courriel de l’utilisateur </li>
    <li>Mettre un vérificateur d’adresse et d’un input pour faciliter l’entrée d’une adresse </li>
    <li>Mettre en place des mesures pour sécuriser les mots de passe (salting et haching) </li>
    <li>Essayer de mettre en place une façon de garder l’utilisateur en ligne lorsqu’il quitte le site. </li>
</ul>
