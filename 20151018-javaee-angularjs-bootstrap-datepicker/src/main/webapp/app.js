'use strict';

var myApp = angular.module(
  'myApp', 
  [ 'ngAnimate', 
    'ui.bootstrap',
    'ngResource']);

myApp.controller('AlertCtrl', function($scope) {
  $scope.alerts = [ ];
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});

myApp.factory('Model', function($resource) {
  return $resource('api', {}, {
    get: {
      transformResponse: function(data, headers) {
        // MAP DATES
        var data = angular.fromJson(data);
        data.testDateInput  = data.testDateInput  === null ? null : new Date(data.testDateInput);
        data.testDatePicker = data.testDatePicker === null ? null : new Date(data.testDatePicker);
        return data;
      }
    }
  });
});

myApp.controller('DatepickerCtrl', function($scope, Model, $location) {
	
  // READ
  Model.get(function(obj) {
    $scope.model = obj;
  });
  
  // UPDATE
  $scope.update = function() {
    Model.save($scope.model, function(obj) {
	  $scope.$parent.alerts.push({type: 'success', msg: 'Updated!'});
    }, function(error) {
	  $scope.$parent.alerts.push({type: 'danger', msg: 'Server: '+error.statusText});
    });
  }
  
  // DATEPICKER BUTTON
  $scope.status = { opened: false };
  $scope.open = function($event) {
    $scope.status.opened = true;
  };  

});