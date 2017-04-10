// prepare data in controller here, send to factory/service to run

(function() {
    'use strict';

    angular
        .module('toDo')
        .controller('TableController', function (API) {

        	const vm = this;

			function Todo(i){
				this.name =i,
				this.status =false,
				this.id = Date.now()
			}

            // get all of our data
            vm.data = API.getData();

			// add item to data	when click submitButton
			vm.addItem = function(valid){
                if(valid){
                	var todo = new Todo(vm.todo.name);
				    vm.data = API.newItem(todo);            // 
				    vm.item = {};                          // clears it out, overwritting object with blank
                }
                else {
                    alert("Form incomplete. Please complete all required fields.");
                }
			}

			// (button) check item
			vm.checkItem = function(item){
				vm.data = API.checkItem(item);
			}

			// (button) delete item
			vm.deleteItem = function(item){
				vm.data = API.deleteItem(item);
			}

			// (button) completed items
			vm.checkCompleted = function(){
				vm.data = API.checkCompleted();
			}
			
			// (button) active items
			vm.checkActive = function(){
				vm.data = API.checkActive();
			}

			// (button) all items
			vm.checkAll = function(){
				vm.data = API.checkAll();
			}
			
        });
})();