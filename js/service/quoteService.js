     angular.module('quoteApp')
      .service('quoteService', quoteService);

     quoteService.$inject = ['$http'];
     function quoteService($http){

       const service = this;

       service.getQuote = function() {
          const response = $http({
            method: "GET",
            url: ("http://quotes.stormconsultancy.co.uk/random.json")
          });

          return response;
 };

}