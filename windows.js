
let read = document.querySelector("#read");
let send = document.querySelector("#send");
let contacts = document.querySelector("#contacts");
let titre = document.querySelector(".Pdep .titre1 .T_ecrire");
let contenu1 = document.querySelector(".Pdep .contenu1");
let contenu2 = document.querySelector(".Pdep .contenu2");
let contenu3 = document.querySelector(".Pdep  .contenu3");

read.onclick = function(){
    titre.innerHTML="liste des message";
    contenu1.style.display = "block";
    contenu2.style.display = "none";
    contenu3.style.display = "none";
    
}
send.onclick = function(){
    titre.innerHTML="Ecrire un message";
    contenu1.style.display = "none";
    contenu2.style.display = "block";
    contenu3.style.display = "none";
    
}
contacts.onclick = function(){
    titre.innerHTML="Liste des contacte";
    contenu1.style.display = "none";
    contenu2.style.display = "none";
    contenu3.style.display = "block";
    
}