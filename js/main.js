(function() {
    'use strict';

    angular
        .module('shopular', [])
        .controller('TableController', function Header() {

        	const vm = this;

			vm.tax = 1.0575;

            // vm.user = {		
		    //   firstName: 'Jake',
		    //   lastName: 'Boyles'
		  	// }

		  	// vm.sayHello = function(){
		  	// 	return `${vm.user.firstName} ${vm.user.lastName}`;
		  	// }	save as an example

		  	vm.data = [
				{ "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31 },
				{ "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0 },
				{ "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0 },
				{ "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0 },
				{ "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10 },
				{ "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50 },
				{ "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0 },
				{ "id": 46, "name": "guitar", "price": 899, "quantity": 0, "color": "blue", "discount": 150 },
				{ "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11 },
				{ "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0 },
				{ "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1 },
				{ "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12 }
			];

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
			vm.addItem = function(){
				vm.data.push({"name": vm.item.name, "price": vm.item.price, "discount": vm.item.discount, "quantity": vm.item.quantity, "color": vm.item.color});
				vm.item = {};  // clears it out, overwritting object with blank
			}
        });
})();