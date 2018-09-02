var db = "";
$(document).ready(function () {
    getUsers();
})

function getUsers() {
    db = window.openDatabase("Tutor", "1.0", "Tutor Database", 1024 * 1024);
    var email1 = localStorage.getItem("email1");
    db.transaction(function (tx) {
        var query = "select * from Tutor";
        tx.executeSql(query, [], function (tx, result) {
            console.log(result);
            if (result !== undefined && result !== null && result !== "" && result.rows.length > 0) {
                var html = "";
                for (var i = 0; i < result.rows.length; i++) {
                    if(result.rows[i].email === email1){
                        
                        html +=
                         "<div class=\"row\">"+
                    "<div class=\"col-sm-12\">"+
            "<div class=\"user\">"+
                "<div class=\"user_content\" >"+
                    "<div class=\"row\">"+
                        "<div class=\"col-12\">"+
                             "<img src=\"img/Contact%20Icon.png\" style=\" border: 5px solid white;border-radius: 100%;\">"+
                        "</div>"+
                    "</div>"+
                   "<div class=\"row\" >"+
                        "<div class=\"col-12\" style=\"margin-top:15px\">"+
                        "<div class=\"card-items\" style=\"text-align: left;margin-left:10%;\">" +
                            "<label class=\"card-title\">Name</label>" +
                            "<label class=\"card-value\">: "  + result.rows[i].fname+" " + result.rows[i].mname+" "+ result.rows[i].lname+"</label>" +
                        "</div>" +
                        "<div class=\"card-items\" style=\"text-align: left;margin-left:10%;\">" +
                            "<label class=\"card-title\">Contact</label>" +
                            "<label class=\"card-value\">: "  + result.rows[i].pno +"</label>" +
                        "</div>"+
                        "<div class=\"card-items\" style=\"text-align: left;margin-left:10%;\">" +
                            "<label class=\"card-title\">Address</label>"+ 
                            "<label class=\"card-value\">: "  + result.rows[i].addr+"  "+ result.rows[i].area+"<br> : " + result.rows[i].city+"</label>"+ 
                        "</div>"+ 
                        "<div class=\"card-items\" style=\"text-align: left;margin-left:10%;\">"+ 
                            "<label class=\"card-title\">Skill</label>" +
                            "<label class=\"card-value\">: "  + result.rows[i].skills +"</label>" +
                        "</div>" +
                        "<div class=\"card-items\" style=\"text-align: left;margin-left:10%;\">"+ 
                            "<label class=\"card-title\">Email</label>" +
                            "<label class=\"card-value\">: "  + result.rows[i].email+ "</label>" +
                        "</div>" +
                        "<div class=\"card-items\" style=\"text-align: left;margin-left:10%;\">"+ 
                            "<label class=\"card-title\">Status</label>" +
                            "<label class=\"card-value\">: "  + result.rows[i].status+ "</label>" +
                        "</div>" +
                    "</div>"+
                   
                "</div>"+
            "</div>"+
        "</div>"   +   
    "</div>"+
     "</div>"   ;
                        if(result.rows[i].status === "Deactivate"){
                            $(".statustut").html("Click to Activate");  
                        } else if(result.rows[i].status === "Activate"){
                            $(".statustut").html("Click to Deactivate");  
                        }
     
                    }
    


                        
                        
//                        
//                        "<div class=\"card\">" +
//                         "<div class=\"card1\">" +
//                        "<h3 class=\"card-header\">" + result.rows[i].fname + "</h3>" +
//                        "<div class=\"card-items\">" +
//                        "<label class=\"card-title\">Age </label>" +
//                        "<label class=\"card-value\">" + result.rows[i].mname + "</label>" +
//                        "</div>" +
//                        "<div class=\"card-items\">" +
//                        "<label class=\"card-title\">Email </label>" +
//                        "<label class=\"card-value\">" + result.rows[i].lname + "</label>" +
//                        "</div>" +
//                        "<div class=\"card-items\">" +
//                        "<label class=\"card-title\">Address </label>" +
//                        "<label class=\"card-value\">" + result.rows[i].email + "</label>" +
//                        "</div>" +
//                        "<div class=\"card-items\" > "+
//                    "<label class=\"card-title\">Gender </label>" +
//                    "<label class=\"card-value\">" + result.rows[i].pno + "</label>" +
//                        "</div>" +
//                         "</div>" +
//                      "<div class=\"card-items\" > "+
//                    "<label class=\"card-title1\"><button class=\"btn\" onclick=\"btnupdateClick()\">Update</button></label>" +
//                    "<label class=\"card-value\"><button class=\"btn1\" onclick=\"btndeleteClick()\">Delete</button></label>" +
//                        "</div>" +
//                       
//                        "</div>";
                   
                }
                $(".list-container").html("");
                $(".list-container").html(html);
               
            }
        })
    })
}
function alterStatus(){
	 db.transaction(function (tx) {
         var email1 = localStorage.getItem("email1");
			
         console.log(email1);
        var query = "select * from Tutor";
		tx.executeSql(query, [], function (tx, result) {
            console.log(result);
			var html = "";
			if (result !== undefined && result !== null && result !== "" && result.rows.length > 0 ) {
				
				for (var i = 0; i < result.rows.length; i++) {
				
				if(result.rows[i].email === email1){
					
					console.log("hello");
						if(result.rows[i].status === "Activate"){
							var query = "UPDATE Tutor SET status = 'Deactivate' where Email = '"+email1+"'";
							tx.executeSql(query, [], function (tx, result) {
								console.log(result);
								alert("Account Deactivated");
								window.location.href = "tutorhome.html"
                                 
							})
						}

						if(result.rows[i].status === "Deactivate"){
							var query = "UPDATE Tutor SET status = 'Activate' where Email = '"+email1+"'";
							tx.executeSql(query, [], function (tx, result) {
								console.log(result);
								alert("Account activated");
								window.location.href = "tutorhome.html"
                                 
							})
						}
				}
                    
				}
               
			}
		})
	 })
}