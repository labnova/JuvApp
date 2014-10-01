var calciatoriControllers=angular.module('calciatoriControllers', ['ngAnimate']);

calciatoriControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {

$http.get('data_giocatori.json').success(function(data) {
	
	$scope.giocatori=data;

});  
			
	
}]);


calciatoriControllers.controller('DettagliController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

$http.get('data_giocatori.json').success(function(data) {
	
	$scope.giocatori=data;
	$scope.whichItem=$routeParams.itemId;



	if($routeParams.itemId > 0) {
		$scope.prevItem= Number($routeParams.itemId)-1;
	} else {
		$scope.prevItem= $scope.giocatori.length-1;
	}

		if($routeParams.itemId < $scope.giocatori.length-1) {
		$scope.nextItem= Number($routeParams.itemId)+1;
	} else {
		$scope.nextItem= 0;
	}

});  
			
	
}]);


/*




*/