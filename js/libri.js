function Libri($scope) {

	$scope.libri= {
		"Dreamweaver corso base livello 1": {
			"titolo": "Dreamweaver corso base livello 1",
			"autore": "Innocenzo Tremamondo",
			"categoria": "Esperto in un click",
			"img": "DW1"
		
		},
		
		"Dreamweaver corso base livello 2": {
			"titolo": "Dreamweaver corso base livello 2",
			"autore": "Innocenzo Tremamondo",
			"categoria": "Esperto in un click",
			"img": "DW2"
		
		},
		
		"Dreamweaver corso base livello 3": {
			"titolo": "Dreamweaver corso base livello 3",
			"autore": "Innocenzo Tremamondo",
			"categoria": "Esperto in un click",
			"img": "DW3"
		
		},
		
		"Objective-C: le basi per tutti": {
			"titolo": "Objective-C: le basi per tutti",
			"autore": "Michael Ferrari",
			"categoria": "Esperto in un click",
			"img": "ObjC"
		
		}
	
	
	};
	
	$scope.libriCorrenti=null;
	
	$scope.setLibri= function(titolo) {
		$scope.libriCorrenti= $scope.libri[titolo];
		
	
	};


}