app.controller('allocationController', function($scope, $location, mainService, toastr) {
	$scope.currentAllocation = [];
	$scope.lastAllocation = 0;
	$scope.days = ["M", "T", "W", "Th", "F"];
	$scope.weekDates = [];
	$scope.parks = mainService.parkingSpots;
	$scope.currentDate = new Date();

	$scope.showProperDate = function(date) {
		return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
	}

	$scope.allocate = function() {
		var temEmployeeArr = angular.copy(mainService.employees);
		var numSpots = mainService.parkingSpots.length;
		$scope.currentAllocation = temEmployeeArr.splice($scope.lastAllocation, numSpots);
		/*if($scope.currentAllocation.length < numSpots) {
			console.log("sadf");
			var remainingSpots = numSpots - $scope.currentAllocation.length;
			var temEmployeeArr = angular.copy(mainService.employees);
			var fillUpPositions = temEmployeeArr.splice(0, remainingSpots);
			$scope.currentAllocation = $scope.currentAllocation.concat(fillUpPositions);
			$scope.lastAllocation = numSpots - 1;
		}*/
		if($scope.lastAllocation + 1 > temEmployeeArr.length) {
			$scope.lastAllocation = 0;
		}
		else {
			$scope.lastAllocation = $scope.lastAllocation + numSpots;	
		}	
		$scope.weekDates = [];
		$scope.generateDays();
		console.log($scope.currentAllocation);		
	}


	$scope.generateDays = function() {
		currentDate = $scope.currentDate;
		currentDate = new Date(currentDate.getFullYear() , (currentDate.getMonth()) , currentDate.getDate(), 0, 0, 0 );
		var weekStartDate = currentDate.setDate(currentDate.getDate() - (currentDate.getDay() - 1)); 
		weekStartDate = new Date(weekStartDate);
		console.log(weekStartDate);

		var startTemp = angular.copy(weekStartDate);
		var weekEndDate = startTemp.setDate(startTemp.getDate() + 5);  
		weekEndDate = new Date(weekEndDate);


		for(var i=0;i<5;i++) {
			var iterationDate = angular.copy(weekStartDate);			
			iterationDate = iterationDate.setDate(iterationDate.getDate() + i); 
			iterationDate = new Date(iterationDate);
			$scope.weekDates.push(iterationDate.getDate());
		}

		$scope.currentDate = weekStartDate;

		console.log($scope.weekDates);
	}

	$scope.prev = function() {
		$scope.currentDate.setDate($scope.currentDate.getDate() - 7); 
		console.log($scope.currentDate);
		$scope.allocate();
	}

	$scope.next = function() {
		$scope.currentDate.setDate($scope.currentDate.getDate() + 7); 
		console.log($scope.currentDate);
		$scope.allocate();
	}

	$scope.allocate();
});