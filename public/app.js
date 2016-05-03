var app = angular.module('appZ', []);

app.controller('mainController', ['$scope', function ($scope) {
    
	$scope.input = {final:''};

	$scope.items = [];
	$scope.percents = [];
	$scope.grades = [];

	$scope.categories = [
		{
			name: "",
			percent: 0,
			grade: 0,
			pos: 1
		},
		{
			name: "",
			percent: 0,
			grade: 0,
			pos: 2
		},
		{
			name: "",
			percent: 0,
			grade: 0,
			pos: 3
		}
	];

	$scope.add = function(){
		$scope.categories.push(
			{
				name: "",
				percent: 0,
				grade: 0,
				pos: $scope.categories.length
			}
		);
	}

	$scope.delete = function(){
		$scope.categories.pop();
	}

	$scope.final = [];

	$scope.cutOffs = [
		{
			cutOff: 90,
			letter: "A",
			needed: 0
		},
		{
			cutOff: 88,
			letter: "A-",
			needed: 0
		},		
		{
			cutOff: 83,
			letter: "B+",
			needed: 0
		},
		{
			cutOff: 79,
			letter: "B",
			needed: 0
		},
		{
			cutOff: 75,
			letter: "B-",
			needed: 0
		},
		{
			cutOff: 70,
			letter: "C+",
			needed: 0
		},
		{
			cutOff: 65,
			letter: "C",
			needed: 0
		},
		{
			cutOff: 60,
			letter: "C-",
			needed: 0
		},
		{
			cutOff: 55,
			letter: "D",
			needed: 0
		},
		{
			cutOff: 50,
			letter: "D-",
			needed: 0
		},
	];



	// $scope.cutOffs = [90, 88, 83, 79, 75, 70, 65, 60, 55, 50];
	// $scope.cutOffLetters = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D"];
	// $scope.finalGradeNeededFor = [0, 0, 0, 0 , 0, 0, 0, 0, 0, 0];

	$scope.realPercents = [];
	$scope.realFinal = [];

	$scope.isTime = false;
	$scope.whatIsNeeded = "";
	$scope.isNeeded = true;

	$scope.send = function(){
		$scope.isNeeded = true;
		$scope.isTime = true;


	$scope.realPercents = [];
	$scope.realFinal = [];


		var total = 0;
		angular.forEach($scope.categories, function(value, key){
			total += value.percent;
			$scope.realPercents.push(value.percent/100);
		});


		total += $scope.final[0];
		$scope.realFinal[0] = $scope.final[0]/100;

		if(total != 100){

		}

		total = 0;
		console.log(total);
		angular.forEach($scope.categories, function(value, key){
			total = total + value.grade*$scope.realPercents[key];
			
		});

		var curr = 0;
		angular.forEach($scope.cutOffs, function(value, key){
			$scope.cutOffs[key].needed = (value.cutOff - total)/$scope.realFinal[0];
			if($scope.cutOffs[key].needed < 0){
				$scope.isNeeded = false;
			}
			else{
				curr = $scope.cutOffs[key].needed;
			}
		});

		if($scope.whatIsNeeded != "You don't need to even take the final to pass!"){
			$scope.whatIsNeeded = curr;
		}

	}
	

}]);