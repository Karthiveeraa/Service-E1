var angularApp=angular.module('angularExample',[]);

angularApp.controller('cntrlmult',function($scope,multiple){

		$scope.fact = 1;

		$scope.calcMult=function(){
				console.log("inside fact ctrllr");
				$scope.fact = multiple.getValue($scope.number);

		}
});

angularApp.service('multiple',function(){

	this.getValue = function(input){

				var res=2*input;

			return res
	}
});