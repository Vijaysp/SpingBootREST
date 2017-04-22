<div class="generic-container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">User </span></div>
		<div class="panel-body">
	        <div class="formcontainer">
	            <div class="alert alert-success" role="alert" ng-if="loginsuccessMessage">{{ctrl.successMessage}}</div>
	            <div class="alert alert-danger" role="alert" ng-if="login.errorMessage">{{ctrl.errorMessage}}</div>
	            <form ng-submit="login.getUser()" name="myForm" class="form-horizontal">
	                <input type="hidden" ng-model="login.user.id" />
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="uname">User Name</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="login.user.name" id="uname" class="username form-control input-sm" placeholder="User name" required ng-minlength="3"/>
	                        </div>
	                    </div>
	                </div>	               

	                <div class="row">
	                    <div class="form-actions floatRight">
	                        <input type="submit"  value="Login" class="btn btn-primary btn-sm" ng-disabled="myForm.$invalid || myForm.$pristine">
	                        <button type="button" ng-click="login.reset()" class="btn btn-warning btn-sm" ng-disabled="myForm.$pristine">Reset Form</button>
	                    </div>
	                </div>
	            </form>
    	    </div>
		</div>	
    </div>   
</div>