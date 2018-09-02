var db = "";
$(document).ready(function () {
    getUsers();
})

function getUsers() {
    db = window.openDatabase("UserDB", "1.0", "User Database", 1024 * 1024);
    db.transaction(function (tx) {
        var query = "select * from Users";
        tx.executeSql(query, [], function (tx, result) {
            console.log(result);
            if (result !== undefined && result !== null && result !== "" && result.rows.length > 0) {
                var html = "";
                for (var i = 0; i < result.rows.length; i++) {
                    html +=
                        "<div class=\"card\">" +
                         "<div class=\"card1\">" +
                        "<h3 class=\"card-header\">" + result.rows[i].Name + "</h3>" +
                        "<div class=\"card-items\">" +
                        "<label class=\"card-title\">Age </label>" +
                        "<label class=\"card-value\">" + result.rows[i].Age + "</label>" +
                        "</div>" +
                        "<div class=\"card-items\">" +
                        "<label class=\"card-title\">Email </label>" +
                        "<label class=\"card-value\">" + result.rows[i].Email + "</label>" +
                        "</div>" +
                        "<div class=\"card-items\">" +
                        "<label class=\"card-title\">Address </label>" +
                        "<label class=\"card-value\">" + result.rows[i].Address + "</label>" +
                        "</div>" +
                        "<div class=\"card-items\" > "+
                    "<label class=\"card-title\">Gender </label>" +
                    "<label class=\"card-value\">" + result.rows[i].Gender + "</label>" +
                        "</div>" +
                         "</div>" +
                      "<div class=\"card-items\" > "+
                    "<label class=\"card-title1\"><button class=\"btn\" onclick=\"btnupdateClick()\">Update</button></label>" +
                    "<label class=\"card-value\"><button class=\"btn1\" onclick=\"btndeleteClick()\">Delete</button></label>" +
                        "</div>" +
                       
                        "</div>";
                }
                $(".list-container").html("");
                $(".list-container").html(html);
            }
        })
    })
}

function btnAddUserClick() {
    window.location.href = "add-user.html"
}
function btnupdateClick() {
    window.location.href = "add-user.html"
}
function btndeleteClick() {
    window.location.href = "add-user.html"
}

