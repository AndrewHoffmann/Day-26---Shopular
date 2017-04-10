// prepare data in controller, send to factory/service here to run

(function() {
    'use strict';

    angular
        .module('toDo')
        .factory('API', function($http) {

        let data =     [];

            return {
                getData:() => {                                             // going to return data  
                    if(localStorage.getItem("items")){                      // if data in Local Storage ...
                        data = JSON.parse(localStorage.getItem("items"))    // 
                        return JSON.parse(localStorage.getItem("items"));   // ... (return ends function) return what is in Local Storage, JSON.parse allows you to convert string into JS array/object
                    }
                    return data;                                            // if nothing in Local Storage, return default data
                },
                newItem:(item) => {                                         // (new function like getData) when add new item will recall getData and update data 
                    data.push(item);                                        // pushing new item into data array
                    localStorage.setItem("items",JSON.stringify(data));     // LocalStorage cannot save JSON string, JSON.stringify converts it a string
                    return data;                                            // updated the data and returning it
                },                                                          
        
                checkItem:(item) => {                                       // check object function
                    data.forEach(function(single,index){                    // going into the data and for each object in the array 
                        if(single.id === item.id){                          // seeing if the object in loop is the object looking for
                            single.status = !single.status;                 // then we reverse the status of that single item
                        }
                    });
                    localStorage.setItem("items",JSON.stringify(data));     // any time manipulate data, want to add to local storage
                    return data;                                            // updated the data and returning it
                },

                deleteItem:(item) => {                                      // delete object function
                    data.forEach(function(single,index){                    // going into the data and for each object in the array 
                        if(single.id === item.id){                          // seeing if the object in loop is the object looking for
                            data.splice(index,1);                           // then splice (remove) that 1 object from the array
                        }
                    });
                    localStorage.setItem("items",JSON.stringify(data));     // any time manipulate data, want to add to local storage
                    return data;                                            // updated the data and returning it
                },        

                checkCompleted:() => {                                      // Completed filter 
                    var completedList = data.filter(function(taco){         // taco = current item
                        if(taco.status === true){
                        return taco;
                        }
                    })    
                    return completedList;                        
                },

                 checkActive:() => {                                      // Active filter 
                    var activeList = data.filter(function(taco){          // taco = current item
                        if(taco.status === false){
                        return taco;
                        }
                    })  
                    return activeList;                          
                },

                checkAll:() => {                                          // All filter 
                    return data;                                          // return all data
                    }                           

            }
                    
        })
})();