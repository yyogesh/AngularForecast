
// Home controller 
weatherApp.controller('homeController', ["$scope","cityService", "$resource",'$location', function($scope,cityService,$resource,$location){
    $scope.city= cityService.city;
    $scope.$watch('city',function() {
      cityService.city= $scope.city;
     });
    $scope.submit=function(){
        $location.path("/forecast");
    };
}]);

// Forecast controller 
weatherApp.controller('forecastController', ["$scope","cityService","$resource","$routeParams","weatherService", function($scope,cityService,$resource, $routeParams, weatherService){
    $scope.city= cityService.city;
    $scope.days= $routeParams.days || '2';
   
    
    // Get Rest Service Result into weatherresult
    $scope.weatherResult= weatherService.getWeather($scope.city,$scope.days)
    // Convert Kalvin to celsius temp
    $scope.convertToCelsius= function(degk){
        return Math.round(degk-273.15);
    }
    // Convert date
    $scope.convertToDate= function(dt){
        return new Date(dt*1000);
    }
}]);
