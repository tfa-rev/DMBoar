﻿$(document).ready(function () {
    var apiBaseUrl = "http://localhost:55326/";
    $('#btn-devices-view').click(function () {

        $.ajax({
            url: apiBaseUrl + 'api/Devices',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                var $table = $('<table/>').addClass('dataTable table table-bordered table-striped');
                var $header = $('<thead/>').html('<tr><th>device_id</th><th>name</th><th>manufacturer</th><th>model</th><th>OS</th><th>OS_version</th><th>CPU</th><th>RAM</th><th>User</th></tr>');
                $table.append($header);
                $.each(data, function (i, val) {
                    var $row = $('<tr/>');
                    $row.append($('<td/>').html(val.device_id));
                    $row.append($('<td/>').html(val.name));
                    $row.append($('<td/>').html(val.manufacturer));
                    $row.append($('<td/>').html(val.model));
                    $row.append($('<td/>').html(val.OS));
                    $row.append($('<td/>').html(val.OS_version));
                    $row.append($('<td/>').html(val.CPU));
                    $row.append($('<td/>').html(val.RAM));
                    $row.append($('<td/>').html('Unassigned'));
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

        $.ajax({
            url: apiBaseUrl + 'api/Users',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                var $table = $('<table/>').addClass('dataTable table table-bordered table-striped');
                var $header = $('<thead/>').html('<tr><th>First Name</th><th>Last Name</th><th>Role</th><th>Location</th><th>Username</th><th>Assigned Devices</th><th>Passwrod</th><th>Date</th></tr>');
                $table.append($header);
                $.each(data, function (i, val) {
                    var $row = $('<tr/>');
                    $row.append($('<td/>').html(val.first_name));
                    $row.append($('<td/>').html(val.last_name));
                    $row.append($('<td/>').html(val.role));
                    $row.append($('<td/>').html(val.location));
                    $row.append($('<td/>').html(val.username));
                    $row.append($('<td/>').html('Unassigned'));
                    $row.append($('<td/>').html(val.password));
                    $row.append($('<td/>').html('Unassigned'));
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
   
    $('#btnGoToLogin').click(function () {     
        
           
        $("#screen").load('Home/Login');       

       
    });
});  

$(document).ready(function () {

    $('#btn-users-mod').click(function () {     

        $("#user-editor").load('Home/Register');    

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
            role: $("#r-role").val().trim().trim(),
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

    $('#btn-login').click(function () {

        

        var apiBaseUrl = "http://localhost:55326/";
        $("#toast-index").text($("#l-mail").val().trim());
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
               
                
            },
            error: function (req, status, errorObj) {

            }

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
                $(' h2').text(data.username);
            },
            error: function (req, status, errorObj) {

            }

        });
    }, 0);
});