var myApp= angular.module('myApp', [
	'ngRoute',
	'calciatoriControllers'

	]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/lista', {
		templateUrl:'partials/lista.html',
		controller:'ListController'
	}).
	when('/dettagli/:itemId', {
		templateUrl:'partials/dettagli.html',
		controller:'DettagliController'
	}).
	otherwise({
		redirectTo:'/lista'
	});
}]);