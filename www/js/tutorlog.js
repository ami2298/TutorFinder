var emaillog;
function tutorlogin(){
     var email = $("#email").val();
     var pass  = $("#pwd").val();
     if (email === undefined || email === null || email === "") 
     {
        alert("Please Enter Your Email");
        return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      alert("You have entered an invalid email address!");
    }
    if (pass === undefined || pass === null || pass === "" ) 
    {
        alert("Please Enter Your Password");
        return;
    }
    
   db = window.openDatabase("Tutor", "1.0", "Tutor Database", 1024 * 1024);
    db.transaction(function (tx) {
        var query = "select * from Tutor";
        tx.executeSql(query, [], function (tx, result) {
            console.log(result);
           
                for (var i = 0; i < result.rows.length; i++) 
                {
//                    if(email !== result.rows[i].email)
//                    {
//                        alert("Please Register Your Email");
//                        console.log("email is not reigster")
//                    }
//                    else if(pass !== result.rows[i].pwd)
//                    {
//                        alert("Please Register First");
//                            console.log("paww is register");
//                    }
                    if ( email == result.rows[i].email && pass == result.rows[i].pwd )
                    {
                        window.location.href = "tutorhome.html"; 
                        localStorage.setItem("email1", email);
                        alert("Login Successfull");
                        
                    }
                    
              
               }
            
        })
        
    })
     window.location.href = "pleasereg.html"; 
}