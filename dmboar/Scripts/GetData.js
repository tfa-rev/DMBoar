$(document).ready(function () {
    var apiBaseUrl = "http://localhost:55326/";
    $('#btn-devices-view').click(function () {
        $("#user-console").show();
        $("#user-editor").html('');

          $.get(apiBaseUrl +  "Home/Filter/", {}, function (response) {
            $("#user-editor").html(response);
           

        });


        $.ajax({
            url: apiBaseUrl + 'api/Devices',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                
                var $table = $('<table/>').addClass('dataTable table table-bordered table-striped');
                var $header = $('<thead/>').html('<tr><th>device_id</th><th>name</th><th>manufacturer</th><th>model</th><th>OS</th><th>OS_version</th><th>CPU</th><th>RAM</th><th>User</th></tr>');
                $table.append($header);
                $.each(data, function (i, val) {
                    var $row = $('<tr class="device-row" >');
                    $row.append($('<td/>').html(val.device_id));
                    $row.append($('<td/>').html(val.name));
                    $row.append($('<td/>').html(val.manufacturer));
                    $row.append($('<td/>').html(val.model));
                    $row.append($('<td/>').html(val.OS));
                    $row.append($('<td/>').html(val.OS_version));
                    $row.append($('<td/>').html(val.CPU));
                    $row.append($('<td/>').html(val.RAM));
                    $row.append($('<td/>').html('Unassigned'));       
                    $row.append($('<button/>').addClass('button-del assign-device').attr('id', 'assignB' + $('#user-name').text()).html('assign'));
                    $row.append($('<button/>').addClass('button-del  history-device').attr('id', 'historyB' + val.username).html('history'));

                    $table.append($row);
                });
                $('#user-console').html($table);
            },
            error: function () {
                alert('Error!');
            }
        });
    });
});  

$(document).ready(function () {
    var apiBaseUrl = "http://localhost:55326/";
    $('#btn-users-view').click(function () {

        $("#user-console").show();
        $.ajax({
            url: apiBaseUrl + 'api/Users',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                var $table = $('<table/>').addClass('dataTable table table-bordered table-striped');
                var $header = $('<thead/>').html('<tr><th>First Name</th><th>Last Name</th><th>Role</th><th>Location</th><th>Username</th><th>Assigned Devices</th><th>Passwrod</th><th>Date</th><th>Mail</th></tr>');
                $table.append($header);
                $.each(data, function (i, val) {
                    var $row = $('<tr id="row_' + val.username + '"/>').addClass('user-row');
                    $row.append($('<td/>').html(val.first_name));
                    $row.append($('<td/>').html(val.last_name));
                    $row.append($('<td/>').html(val.role));
                    $row.append($('<td/>').html(val.location));
                    $row.append($('<td/>').html(val.username));
                    $row.append($('<td/>').html('Unassigned'));
                    $row.append($('<td/>').html(val.password));
                    $row.append($('<td/>').html('Unassigned'));
                    $row.append($('<td/>').html(val.mail));
                    $row.append($('<button/>').addClass('button-del edit-user').attr('id', 'editB' + val.username).html('Edit'));
                    $row.append($('<button/>').addClass('button-del  delete-user').attr('id', 'deleteB' + val.username).html('Delete'));
                    $table.append($row);

                    
                });

               

                $('#user-console').html($table);
                
            },
            error: function () {
                alert('Error!');
            }
        });
    });
});  

 
 


$(document).ready(function () {



    $('#btn-register').click(function () {       
       
        var apiBaseUrl = "http://localhost:55326/";
        $("#toast-index").text($("#r-id").val().trim());
        var data = {
            user_id: $("#r-id").val().trim(),
            first_name: $("#r-fname").val().trim(),
            last_name: $("#r-lname").val().trim(),
            role: $("#r-role").val().trim(),
            location: $("#r-location").val().trim(),
            username: $("#r-uname").val().trim(),
            mail: $("#r-mail").val().trim(),
            password: $("#r-password").val().trim(),              
            
        }         
        
        $.ajax({
            url: apiBaseUrl + 'api/Users/PostUser',
            type: 'POST',
            dataType: 'json',
            data: data,
            success: function (d) {
                alert("Saved Successfully");
                 
            }, 
          
        });      
    });
});  



$(document).ready(function () {



    $('#btn-update').click(function () {

        var apiBaseUrl = "http://localhost:55326/";
        
        var data = {
            user_id: $("#r-id").val().trim(),
            first_name: $("#r-fname").val().trim(),
            last_name: $("#r-lname").val().trim(),
            role: $("#r-role").val().trim(),
            location: $("#r-location").val().trim(),
            username: $("#r-uname").val().trim(),
            mail: $("#r-mail").val().trim(),
            password: $("#r-password").val().trim(),

        }

        $.ajax({
            url: apiBaseUrl + 'api/Users/Put',
            type: 'PUT',
            dataType: 'json',
            data: data,
            success: function (d) {
                alert("Saved Successfully");
                $("#btn-users-view").click();
            },

        });
    });
});



$(document).ready(function () {

    $('#btn-login').click(function () {

        

        var apiBaseUrl = "http://localhost:55326/";
        
        var data = {
            mail: $("#l-mail").val().trim(),
            password: $("#l-password").val().trim(),
        }      

        $.ajax({
            url: apiBaseUrl + 'api/Users/Login/',
            type: 'GET',
            dataType: 'json',
            data: data,
            success: function (data) {

                $.post(apiBaseUrl + "Home/PageMover/", { user_id: data.user_id }, function (data) {
                    location = data.url;
                });
                //window.location.href = apiBaseUrl + 'Home/UserPage/';
                $("#toast-index").text('Logging in as' +$("#l-mail").val().trim());
                
            },
            error: function (req, status, errorObj) {

            }

        }); 


    });
});  

$(document).ready(function () {

    var apiBaseUrl = "http://localhost:55326/";
  

    $('#btn-users-mod').click(function () {

       
        
        $.get(apiBaseUrl +  "Home/Register/", {}, function (response) {
            $("#user-editor").html(response);
           

        });
        
    });

 


});  

 

$(document).ready(function () {

    setTimeout(function () {
        var id = parseInt($('#id').val(), '10')
        var param = {
            user_id: id,
        }

        $('#user-page').text(param.user_id);
        var apiBaseUrl = "http://localhost:55326/";

        $.ajax({
            url: apiBaseUrl + 'api/Users/GetById/',
            type: 'GET',
            dataType: 'json',
            data: param,
            success: function (data) {
                $(document).prop('title', data.username);
                $('#user-name').html(data.username);
            },
            error: function (req, status, errorObj) {

            }

        });
    }, 0);
});


 
$(document).on({
    mouseenter: function () {
        $(this).find('button').show();
    },
    mouseleave: function () {
        $(this).find('button').hide();
    }
}, ".user-row"); 

$(document).on({
    mouseenter: function () {
        $(this).find('button').show();
    },
    mouseleave: function () {
        $(this).find('button').hide();
    }
}, ".device-row"); 
 
 


 
$(document).on("click", ".delete-user", function () {
    var tmp = $(this).attr('id');
    var username = tmp.replace('deleteB', '');

    var apiBaseUrl = "http://localhost:55326/";
    

    $.ajax({
        url: apiBaseUrl + 'api/Users/Delete?'+ $.param({ "username": username }),
        type: 'DELETE',    
        success: function (data) {
            
            $("#btn-users-view").click();
            
          
        },
        error: function (req, status, errorObj) {

        }

    });
});

 

 
$(document).on({
    click: function () {


       

        var apiBaseUrl = "http://localhost:55326/";


        $.ajax({
            url: apiBaseUrl + 'Home/Register',
            type: 'GET',
            success: function (data) {

                $("#user-console").html('');
                $("#user-editor").html(data);
              
                 if ( $( "#btn-register" ).length == 0)
                    $("#action-ru").append('<button id="btn-register" class="classy"> Register </div>');
 

            },
            error: function (req, status, errorObj) {

            }

        });


    },

}, "#btn-users-mod"); 

$(document).on({
    click: function () {


        var tmp = $(this).attr('id');
        var username = tmp.replace('editB', '');
        var tr_id = 'row_' + username;

        var $row = $(this).closest("tr");
        var $tds = $row.find("td"); 

        var apiBaseUrl = "http://localhost:55326/";


        $.ajax({
            url: apiBaseUrl + 'Home/Register',
            type: 'GET',
            success: function (data) {

               
                $("#user-editor").html(data);
                if ($("#btn-update").length == 0)
                    $("#action-ru").append('<button id="btn-update" class="classy"> Update </div>');

               
               

                $("#r-id").val(1);
                $("#r-fname").val($tds.eq(0).text());
                $("#r-lname").val($tds.eq(1).text());
                $("#r-role").val($tds.eq(2).text());
                $("#r-location").val($tds.eq(3).text());
                $("#r-uname").val($tds.eq(4).text());
                $("#r-mail").val($tds.eq(8).text());
                $("#r-password").val($tds.eq(6).text());



            },
            error: function (req, status, errorObj) {

            }

        });
  
     
    },
   
}, ".edit-user"); 

$(document).ready(function () {

    $('th').click(function () {
        var table = $(this).parents('table').eq(0)
        var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc) { rows = rows.reverse() }
        for (var i = 0; i < rows.length; i++) { table.append(rows[i]) }
    })
    function comparer(index) {
        return function (a, b) {
            var valA = getCellValue(a, index), valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
        }
    }
    function getCellValue(row, index) { return $(row).children('td').eq(index).text() }


});



$(document).on({
    click: function () {


        var tmp = $(this).attr('id');
        var username = tmp.replace('assignB', '');
     

       
        var device_txt = $(this).closest('tr').children('td:first').text();
        var device_id = parseInt(device_txt, 10);

        var apiBaseUrl = "http://localhost:55326/";
        var data = { "device_id": device_id, "username": username };
        $('#user-editor').html('selected ' + username + ' with the id ' + device_id);

        //disable button to prevent multiple calls
        $(this).attr('disabled', true);

        $.when(
            $.ajax({

                type: "POST",
                data: JSON.stringify(data),
                url: apiBaseUrl + 'api/Register/PostAssign',
                contentType: "application/json",

                success: function (d) {
                    alert("Saved Successfully");

                    $("#btn-devices-view").click();

                },

            })
        ).then(function (a) {
            // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
            // Each argument is an array with the following structure: [ data, statusText, jqXHR ]

            alert("We got what we came for!");

        });
       


    },

}, ".assign-device"); 
