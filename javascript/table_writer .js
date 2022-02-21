function Insert_Data(tab_id,arr_data) 
{
  let table = document.getElementById(tab_id);
  for(let i=0;i<arr_data.length;i++)
  {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = arr_data[i].from;
  cell2.innerHTML = arr_data[i].subject;
  cell3.innerHTML = arr_data[i].time;
  }
}
var a = [{form:"s",subject:"2",Time:"4"},{form:"s",subject:"2",Time:"4"},{form:"s",subject:"2",Time:"4"}]