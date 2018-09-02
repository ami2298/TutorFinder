
var db = "";
$(document).ready(function () {
    db = window.openDatabase("Tutor", "1.0", "Tutor Database", 1024 * 1024);
    db.transaction(function (tx) {
        tx.executeSql("Create Table If Not Exists Tutor(fname Text,mname Text,lname Text,  email Text PRIMARY KEY ,  pno Text, pwd Text, addr text default null ,area text default null, city text default null, state text default null,  skills text default null, status text default Activate)");
    }, function (error) {
        console.log(error);
    }, function () {
        console.log("DB created successfully");
    })
})

function tutorregister(){

    var fname = $("#fname").val();
    var mname = $("#mname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var pno   = $("#pno").val();
    var pass  = $("#pwd").val();
    var rpass = $("#rpwd").val();
    
    if (fname === undefined || fname === null || fname === "") {
        alert("Please Enter Your FirstName");
        return;
    }
   
    if (mname === undefined || mname === null || mname === "") {
        alert("Please Enter Your MiddleName");
        return;
    }
    if (lname === undefined ||lname === null ||lname === "") {
        alert("Please Enter Your LastName");
        return;
    }
    
    if (email === undefined || email === null || email === "") {
        alert("Please Enter Your Email");
        return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      alert("You have entered an invalid email address!");
    }
    if (pno === undefined || pno === null || pno === "" ) {
        alert("Please Enter Your Phone");
        return;
    } 
    if(pno.length != 10){
        alert("Please Enter 10 Digit Phone");
        return;
    }
    if (pass === undefined || pass === null || pass === "" ) {
        alert("Please Enter Your Password");
        return;
    } 
    if (rpass === undefined || rpass === null || rpass === "" ) {
        alert("Please Re-Enter Your Password");
        return;
    }
    if (pass != rpass ) {
        alert("Please Enter the matching password");
        return;
    } 
    window.location.href = "tutorlog.html"; 
  db.transaction(function (tx) {
        var query = "Insert into Tutor(fname,mname,lname,email,pno,pwd) Values('" + fname + "','" + mname + "','" + lname + "','" + email + "','" + pno + "','" + pass + "')";
        tx.executeSql(query);
    }, function (error) {
        console.log(error);
    }, function () {
        console.log("record inserted");
        
    })


}
