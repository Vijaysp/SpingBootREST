<!DOCTYPE html>

<html lang="en" ng-app="crudApp">
    <head>
        <title>${title}</title>
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/app.css" rel="stylesheet"/>
         <img  ng-src="images/header_logo.png"/>
    </head>
    <body>

        <div ui-view>
        
        </div>
        <script src="js/lib/angular.min.js" ></script>
        <script src="js/lib/angular-ui-router.min.js" ></script>
        <script src="js/lib/localforage.min.js" ></script>
        <script src="js/lib/ngStorage.min.js"></script>
        <script src="js/app/app.js"></script>
        <script src="js/app/UserService.js"></script>
        <script src="js/app/UserController.js"></script>
           <script src="js/app/LoginService.js"></script>
        <script src="js/app/loginController.js"></script>
        
 
<!--script src="js/lib/angular-animate.min.js"></script>
<script src="js/lib/angular-aria.min.js"></script>

<script src="js/lib/angular-material.min.js"></script>

<script src="js/lib/angular-material-datetimepicker.min.js"></script>

<link href="/css/material-datetimepicker.min.css" rel="stylesheet" type="text/css"-->

    </body>
    
 <div class="panel-footer">
  <p>Posted by: Croixon Consultancy Services - Contact information: <a href="mailto:contactteam@croixon.com">
  contactteam@croixon.com</a>.</p>
</div>
   
</html>