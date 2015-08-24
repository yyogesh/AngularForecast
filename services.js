// City Service
weatherApp.service('cityService', function(){
    this.city="Gurgaon";
    
});

weatherApp.service('weatherService', ['$resource', function($resource){
     // Call rest service 
    this.getWeather= function(city, days){
     var weatherAPI= $resource("http://api.openweathermap.org/data/2.5/forecast/daily", 
                                 {callback:"JSON_CALLBACK"},
                                 {get:{method:"JSONP"}}
            
    );
    
    // Get Rest Service Result into weatherresult
    return weatherAPI.get({q:city, cnt:days });
    }
}]);