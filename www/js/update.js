var db = "";
$(document).ready(function () {
    tutorupdate();
})
db = window.openDatabase("Tutor", "1.0", "Tutor Database", 1024 * 1024);

function tutorupdate(){
    
    var email1 = localStorage.getItem("email1");
    db.transaction(function (tx) {
        var query = "select * from Tutor";
        tx.executeSql(query, [], function (tx, result) {
            console.log(result);
            if (result !== undefined && result !== null && result !== "" && result.rows.length > 0) 
            {
                var html = "";
                for (var i = 0; i < result.rows.length; i++) 
                {
                    if(result.rows[i].email === email1)
                    {

                        $("#fname").val(result.rows[i].fname);
                        $("#mname").val(result.rows[i].mname);
                        $("#lname").val(result.rows[i].lname);
                        $("#email").val(result.rows[i].email);
                        $("#pno").val(result.rows[i].pno);
                        $("#addr").val(result.rows[i].addr);
                        $("#area").val(result.rows[i].area);
                        $("#city").val(result.rows[i].city);
                        $("#state").val(result.rows[i].state);
//                        $("").val();
                        $("#email").val(result.rows[i].email);
                        $("#skills select").val(result.rows[i].skill);


                    }
                }
            }
                
     })
    })

}
function updatedata(){
    console.log("please enter your phone");
                 var fname = $("#fname").val();
                        var mname = $("#mname").val();
                        var lname = $("#lname").val();
                        var email = $("#email").val();
                        var pno   = $("#pno").val();
                        var addr  = $("#addr").val();
                        var area = $("#area").val();
                        var city = $("#city").val();
                        var state = $("#state").val();
                        var skill = $("#skills").val();
                        var email = $("#email").val();
                        if (pno === undefined || pno === null || pno === "" ) {
                            alert("Please Enter Your Phone");
                            return;
                        }
                        if(pno.length != 10){
                            alert("Please Enter 10 Digit Phone");
                            return;
                        }
                        if (addr === undefined || addr === null || addr === "" ) {
                            alert("Please Enter Your Address");
                            return;
                        } 
                        if (area === undefined || area === null || area === "" ) {
                            alert("Please Enter Your Area");
                            return;
                        }
                        
                    if (city === undefined || city === null || city === "") {
                            alert("Please Enter Your City");
                            return;
                        }

                        if (state === undefined || state === null || state === "") {
                            alert("Please Enter Your State");
                            return;
                        }
                        if (skill === undefined ||skill === null ||skill === "") {
                            alert("Please Enter Your Skills");
                            return;
                        }
                         window.location.href = "tutorhome.html"; 
                        
                    console.log(skill);
                console.log(city);
 console.log("Please enter your ohone inside");
   
                    db.transaction(function (tx) {
                         var query = "update Tutor set pno=?,addr=?,area=?,city=?,state=?,skills=? where email=?";
//                            var query = "Update Tutor set pno = "+pno+" ,addr="+addr+",area="+area+",city="+city+",state="+state+" where ID = "+i;
                            tx.executeSql(query,[pno,addr,area,city,state,skill,email]);
                        console.log("query finded");
                        }, function (error) {
                            console.log(error);
                        }, function () {
                            console.log("record inserted");

                        })
            }
    
    /**Inner html of the form**/
// html +=
//                         "<div class=\"row\">"+
//       
//        "<div class=\"col-sm-12\">"+
//            "<div class=\"loginpage\">"+
//                "<div class=\"login-page\">"+
//                  "<div class=\"form\">"+
//                   
//                    "<div class=\"login-form\">"+
//                      "<input id=\"fname\" type=\"text\" value =\" "+ result.rows[i].fname+"\" placeholder=\"First Name\" readonly/>"+
//                      "<input id=\"mname\" type=\"text\"  value =\" "+ result.rows[i].mname+"\"placeholder=\"Middle Name\" readonly/>"+
//                         "<input id=\"lname\"  type=\"text\"  value =\" "+ result.rows[i].lname+"\"placeholder=\"Last Name\" readonly/>"+
//                      "<input id=\"email\" type=\"email\" value =\" "+ result.rows[i].email+"\" placeholder=\"Email\" readonly/>"+
//                         "<input id=\"pno\" type=\"text\" pattern= \"[0-9]\"  value =\" "+ result.rows[i].pno+"\" placeholder=\"Phone No.\"/>"+
//                     "<input id=\"addr\" type=\"text\" value =\" "+ result.rows[i].addr+"\" placeholder=\"Address\"/> "+
//                        "<input id=\"area\" type=\"text\" value =\" "+ result.rows[i].area+"\" placeholder=\"Area\"/>"+
//                         "<input id=\"city\" type=\"text\" value =\" "+ result.rows[i].city+"\" placeholder=\"City\"/>"+
//                         "<input id=\"state\" type=\"text\" value =\" "+ result.rows[i].state+"\" placeholder=\"State\"/>"+
//                         "<select id=\"skills\" value =\" "+ result.rows[i].skills+"\"name=\"skill\">"+
//                          "<option class=\"op\" value=\"C\">C</option>"+
//                          "<option class=\"op\" value=\"C++\">C++</option>"+
//                          "<option class=\"op\" value=\"Java\">Java</option>"+
//                          "<option class=\"op\" value=\"Web Development\">Web Development</option>"+
//                          "<option class=\"op\" value=\"Graphic Designing\">Graphic Designing</option>"+
//                          "<option class=\"op\" value=\"Python\">Python</option>"+
//                         "<option class=\"op\" value=\"Ruby\">Ruby</option>"+
//                        "</select>"+ 
//                
//                      "<div>"+
//                      "<button onclick=\"tutorupdate();\">UPDATE</button>"+
//                     
//                    "</div>"+
//                  "</div>"+
//                "</div>"+
//            "</div>"+
//        "</div>"+
//    "</div>"+
//    
//"</div>"+
//    "</div>";
                
                

                
   