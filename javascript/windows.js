
let read = document.querySelector("#read");
let send = document.querySelector("#send");
let contacts = document.querySelector("#contacts");
let titre = document.querySelector(".Pdep .titre1 .T_ecrire");
let contenu1 = document.querySelector(".Pdep .contenu1");
let contenu2 = document.querySelector(".Pdep .contenu2");
let contenu3 = document.querySelector(".Pdep  .contenu3");

function Insert_Data(tab_id,arr_data) 
{
  let old_tbody = document.getElementById(tab_id);
  var new_tbody = document.createElement('tbody');
  for(let i=0;i<arr_data.length;i++)
  {
  var row = new_tbody.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = arr_data[i].from;
  cell2.innerHTML = arr_data[i].subject;
  cell3.innerHTML = arr_data[i].time;
  }
  old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
}
var a = [{from:"s",subject:"2",message:"",time:"4"},{from:"s",subject:"2",message:"",time:"4"},{from:"s",subject:"2",message:"",time:"4"}]



read.onclick = function(){
    titre.innerHTML="liste des message";
    contenu1.style.display = "block";
    contenu2.style.display = "none";
    contenu3.style.display = "none";
    Insert_Data("M_body",a);

    
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

