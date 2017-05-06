<div class="generic-container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Enter Audit Details</span></div>
		<div class="panel-body">
	        <div class="formcontainer">
	            <div class="alert alert-success" role="alert" ng-if="audit.successMessage">{{audit.successMessage}}</div>
	            <div class="alert alert-danger" role="alert" ng-if="audit.errorMessage">{{audit.errorMessage}}</div>
	            <form ng-submit="audit.submit()" name="myForm" class="form-horizontal">
	                <input type="hidden" ng-model="audit.user.id" />
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="uname">Audit Name</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="audit.user.auditname" id="auditname" class="auditname form-control input-sm" placeholder="Enter Audit Name" required ng-minlength="3"/>
	                        </div>
	                    </div>
	                </div>

	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="age">count</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="audit.user.count" id="count" class="form-control input-sm" placeholder="Enter your count." required ng-pattern="audit.onlyIntegers"/>
	                        </div>
	                    </div>
	                </div>
	
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="salary">Amount</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="audit.user.amount" id="amount" class="form-control input-sm" placeholder="Enter your Amount." required ng-pattern="audit.onlyNumbers"/>
	                        </div>
	                    </div>
	                </div>

	                <div class="row">
	                    <div class="form-actions floatRight">
	                        <button type="button" ng-click="audit.saveAudit(audit.user)"  class="btn btn-primary btn-sm" ng-disabled="myForm.$invalid || myForm.$pristine">Add</button>
	                        <button type="button" ng-click="audit.reset()" class="btn btn-warning btn-sm" ng-disabled="myForm.$pristine">Reset Form</button>
	                    </div>
	                </div>
	            </form>
    	    </div>
		</div>	
    </div>
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">List of Audits </span></div>
		<div class="panel-body">
			<div class="table-responsive">
		        <table class="table table-hover">
		            <thead>
		            <tr>
		                <th>ID</th>
		                <th>NAME</th>
		                <th>COUNT</th>
		                <th>AMOUNT</th>
		                <th width="100"></th>
		                <th width="100"></th>
		            </tr>
		            </thead>
		            <tbody>
		            <tr ng-repeat="u in audit.getAllAudits()">
		                <td>{{u.id}}</td>
		                <td>{{u.name}}</td>
		                <td>{{u.age}}</td>
		                <td>{{u.salary}}</td>
		                <td><button type="button" ng-click="audit.editAudit(u.id)" class="btn btn-success custom-width">Edit</button></td>
		                <td><button type="button" ng-click="audit.removeAudit(u.id)" class="btn btn-danger custom-width">Remove</button></td>
		            </tr>
		            </tbody>
		        </table>		
			</div>
		</div>
    </div>
</div>