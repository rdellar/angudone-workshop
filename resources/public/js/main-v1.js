"use strict";
var app = angular.module("TodosApp", []);
app.controller("MainCtrl", [
    function() {
        
        var main = this,
            counter = 0,
            todos = [
                {id:++counter, text: "Learn Angular"},
                {id:++counter, text: "speak"},
                {id:++counter, text: "profit"}
            ];
        main.todos = todos;
        main.markDone = function (currentTodo) {
            if(!currentTodo.done) {
                currentTodo.done = new Date().getTime();

            } else {
                delete currentTodo.done;
            }

        };
        
        main.addNewTodo = function(obj, todos) {
            todos.push({id:++counter, text: obj.newTodoText});
            // assuming scorep issues - main.newTodoText = '';
            obj.newTodoText = '';
            
        };
        // this is newly created controller object
        /*var main = this;
        main.firstName = "JZ";*/
        
        /*
        function a(){
            // this is undefined here...
            console.log(this);
            // keeps the correct handle here
            console.log(vm);
        }
        // not defined properly with this
        a()
        */
    }
])
