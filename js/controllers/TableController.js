(function() {
    'use strict';

    angular
        .module('shopular')
        .controller('TableController', function (API) {

        	const vm = this;

            // get all of our data
            vm.data = API.getData();

            // set constants
			vm.tax = 1.0575;

			// + and - quantity buttons
			vm.changeQuantity = function(item,add){
				if(add) {
					item.quantity++;
				} else {
					item.quantity--;
				}
			}

			// price minus discount (if there is one) will show discounted price times tax.  
			vm.getPrice = function(item){
				return ((item.price-item.discount) * vm.tax)*item.quantity
			}

			// add item to data	when click submitButton
			vm.addItem = function(valid){
                if(valid){
                    const kat = Object.assign({},vm.item); // after hit submit, this creates a new Object
                    console.log(kat);                      // don't need, but shows new object (kat) created in Console Log
                    vm.data = API.newItem(kat);            // 
				    vm.item = {};                          // clears it out, overwritting object with blank
                }
                else {
                    alert("INVALID, please complete");
                }
			}
        });
})();