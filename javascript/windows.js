/*-var-*/
const a = [];
const b = [];
//------------------------------insert data to table-------------------------------

function Insert_Data(tab_id,arr_data) 
{
  let old_tbody = document.getElementById(tab_id);
  var new_tbody = document.createElement('tbody');
  new_tbody.setAttribute("id",tab_id);
  for(let i=0;i<arr_data.length;i++)
  {
  var row = new_tbody.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = arr_data[i].from;
  cell2.innerHTML = arr_data[i].message;
  cell3.innerHTML = arr_data[i].time;
  }
  old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
}
///--------------------------Remplisseur de tableau -------------------------------------


///-------- recu ou envoyé//--
Create_Data_M = function (tableD){
    let Mail = document.getElementById("address_mail");
    let Content = document.getElementById("content_mail");
    //----
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    //------
    tableD.push({from:Mail.value,message:Content.value,time:dateTime});
    }
    ///------
    let submit = document.querySelector(".Pdep .contenu2 .send_mail");
    submit.onclick=function(){
        Create_Data_M(a)
    }

///------------

///------------
//-----------------------------------------------------------------






















//----------------------------------------------------------------------
let read = document.querySelector("#read");
let send = document.querySelector("#send");
let contacts = document.querySelector("#contacts");
let titre = document.querySelector(".Pdep .titre1 .T_ecrire");
let contenu1 = document.querySelector(".Pdep .contenu1");
let send_receive=document.querySelector(".Pdep .content_tabel_mail");
let receive_I=document.querySelector("#received_M");
let send_I=document.querySelector("#send_M");
let contenu2 = document.querySelector(".Pdep .contenu2");
let contenu3 = document.querySelector(".Pdep  .contenu3");
let iconecontact = document.querySelector(".Pdep  .add_rem_contact");
read.onclick = function(){
    titre.innerHTML="liste des messages";
    contenu1.style.display = "block";
    send_receive.style.display = "block";
    contenu2.style.display = "none";
    contenu3.style.display = "none";
    iconecontact.style.display = "none";
}
send.onclick = function(){
    titre.innerHTML="Ecrire un message";
    contenu1.style.display = "none";
    send_receive.style.display = "none";
    contenu2.style.display = "block";
    contenu3.style.display = "none";
    iconecontact.style.display = "none";
}
contacts.onclick = function(){
    titre.innerHTML="Liste des contactes";
    contenu1.style.display = "none";
    send_receive.style.display = "none";
    contenu2.style.display = "none";
    contenu3.style.display = "block";
    iconecontact.style.display = "block";
}
var tab_selector=a;
let prec_Autor= document.querySelector("#prec_to");
receive_I.onclick=function(){
    prec_Autor.innerHTML="De";
    tab_selector=a;
    Insert_Data("M_body",tab_selector)
}
send_I.onclick=function(){
    prec_Autor.innerHTML="À       ";
    tab_selector=b;
    Insert_Data("M_body",tab_selector);
}

setInterval(() => { 
    Insert_Data("C_body",a);
    Insert_Data("M_body",tab_selector);
}, 2000);

