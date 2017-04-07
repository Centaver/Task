app.controller('myCtrl', ['UserService', myCtrp]);

function myCtrp(UserService) {
   
    var vm = this;
    
    vm.tasks = UserService.getTasks();
   
    vm.newTask = {
        done: 'In progres'
        , check: false
        , class: 'active'
    };
    
    vm.editeTask = {};
    
    vm.add = function () {
        
        if (vm.newTask.task == undefined){
            return;
        };
        
        UserService.addNewTask(vm.newTask);
        vm.newTask = {};
    };
   
    vm.editTask = function (task) {
        for (var i in vm.tasks) {
            if (vm.tasks[i].UID == task.UID) {
                vm.editeTask = vm.tasks[i];
                vm.ischange = true;
            };
        };
    };
   
    vm.deleteTask = function (task) {
        for (var i in vm.tasks) {
            if (vm.tasks[i].UID == task.UID) {
                vm.tasks.splice(i, 1);
            };
        };
    };
    
    vm.chengStatys = function(task){
        if (task.check){
            task.done = 'Done';
            task.class = 'complete';
        }else{
           task.done = 'In progres'; 
           task.class = 'active';
        };
    };
    
    
};