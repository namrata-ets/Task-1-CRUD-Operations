function enterData(e){

    //e.preventDefault();
    var dataInput=retrieveData();
    var readData=readDataFromLS(dataInput);
    addDetails(readData);
}


function retrieveData(){

    // Fetching values entered in the form

    var tid=document.getElementById("id").value;
    var name=document.getElementById("name").value;
    var status=document.getElementById("status").value;
    var stime=document.getElementById("start time").value;
    var etime=document.getElementById("end time").value;

    // alert(tid+name+status+stime+etime);

    var arr=[tid,name,status,stime,etime];
    return arr;

}

function readDataFromLS(dataInput){

    // Storing data in the local storage

    var taskid=localStorage.setItem("tid",dataInput[0]);
    var taskname=localStorage.setItem("name",dataInput[1]);
    var tstatus=localStorage.setItem("status",dataInput[2]);
    var starttime=localStorage.setItem("stime",dataInput[3]);
    var endtime=localStorage.setItem("etime",dataInput[4]);

    // Getting data from local storage to display it in a table

    var tid=localStorage.getItem("tid",taskid);
    var tn=localStorage.getItem("name",taskname);
    var status=localStorage.getItem("status",tstatus);
    var st=localStorage.getItem("stime",starttime);
    var et=localStorage.getItem("etime",endtime);

   // alert(tid+tn+status+st+et);

    var arr=[tid,tn,status,st,et];

    return arr;

}

function addDetails(readData){

    var table=document.getElementById("taskdetails");
    alert(table);
    var row=table.insertRow();
   alert(row.insertCell(0).innerHTML=readData[0]);   
     row.insertCell(1).innerHTML=readData[1];
     row.insertCell(2).innerHTML=readData[2];
     row.insertCell(3).innerHTML=readData[3];
     row.insertCell(4).innerHTML=readData[4];
     row.insertCell(5).innerHTML=`<button onClick="edit(this)">Edit</button>
     <button onClick="remove()">Delete</button>`

}
function edit(a){

var row=a.parentElement().parentElement();

document.getElementById("id").value=row.cells[0].innerHTML;
document.getElementById("name").value=row.cells[1].innerHTML;
document.getElementById("status").value=row.cells[2].innerHTML;
document.getElementById("start time").value=row.cells[3].innerHTML;
document.getElementById("end time").value=row.cells[4].innerHTML;


}

function remove(){

}