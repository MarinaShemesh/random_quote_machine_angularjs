     angular.module('quoteApp')
      .controller('appController', appController);

       appController.$inject = ['quoteService'];
         function appController(quoteService){
            
            const vm = this;

            vm.myquote = false;
            
            const onSuccess = function(response){
            vm.data = response.data;
            vm.myquote = true;
            // console.log('vm.data:', vm.data);
            }

            const onFailure = function(reason){
            console.log("There was some type of mistake.")
            }
          
            vm.getQuote = function() {

             quoteService.getQuote()
             .then(onSuccess, onFailure);
                     
            }

    }
      
