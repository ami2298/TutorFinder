var db = "";
$(document).ready(function () {
    getUsers();
})

function getUsers() {
    db = window.openDatabase("Tutor", "1.0", "Tutor Database", 1024 * 1024);
    db.transaction(function (tx) {
        var query = "select * from Tutor";
        tx.executeSql(query, [], function (tx, result) {
            console.log(result);
            var html ="<input type=\"text\" id=\"locationInput\" onkeyup=\"myFunction()\" placeholder=\"Search for location..\" title=\"Type in a location\" style=\"margin-top:20px;\">"+
	"<input type=\"text\" id=\"skillInput\" onkeyup=\"skillFunction()\" placeholder=\"Search for skill..\" title=\"Type in a skill\">";
            if (result !== undefined && result !== null && result !== "" && result.rows.length > 0) {
                
                for (var i = 0; i < result.rows.length; i++) {
                    if(result.rows[i].status === "Activate"){
                    html +=
                         "<ul class=\"row\ style=\"text-align:centre;\>"+
                    "<div class=\"col-sm-12\">"+
            "<div class=\"user\" style=\"margin-left:-6%; width:100%;\">"+
                "<div class=\"user_content\">"+
                    "<div class=\"row\">"+
                        "<div class=\"col-12\" >"+
                             "<img src=\"img/Contact%20Icon.png\">"+
                        "</div>"+
                    "</div>"+
                   "<div class=\"row\">"+
                        "<div class=\"col-12\">"+
                        "<div class=\"card-items\">" +
                            "<label class=\"card-title\">Name</label>" +
                            "<label class=\"card-value\">:"  + result.rows[i].fname+" " + result.rows[i].mname+" "+ result.rows[i].lname+"</label>" +
                        "</div>" +
                        "<div class=\"card-items\">" +
                            "<label class=\"card-title\">Contact</label>" +
                            "<label class=\"card-value\">:"  + result.rows[i].pno +"</label>" +
                        "</div>"+
                        "<div class=\"card-items\">" +
                            "<label class=\"card-title\">Address</label>"+ 
                            "<p class=\"card-value\">:"  + result.rows[i].addr+" "  + result.rows[i].area+"<br> :"  + result.rows[i].city+" "  + result.rows[i].state+" </p>"+ 
                        "</div>"+ 
                        
                        "<div class=\"card-items\">"+ 
                            "<label class=\"card-title\">Skill</label>" +
                            "<i class=\"card-value\">:"  + result.rows[i].skills +"</i>" +
                        "</div>" +
                        "<div class=\"card-items\">" +
                            "<label class=\"card-title\">Email</label>" +
                            "<label class=\"card-value\">:"  + result.rows[i].email+ "</label>" +
                        "</div>" +
                    "</div>"+
                   
                "</div>"+
            "</div>"+
        "</div>"   +   
    "</div>"+
     "</ul>"   ;
   
    


                        
                        
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
            }
                $(".list-container").html("");
                $(".list-container").html(html);
            }
        })
    })
}

