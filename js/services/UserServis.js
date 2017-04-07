app.factory('UserService', function () {
    return {
        getTasks: function () {
            return Tasks;
        }
        , addNewTask: function (NewTask) {
            NewTask.UID = Math.random();
            Tasks.push(NewTask);
        }
    };
});
var Tasks = [
    {
        task: 'Зробити завдання 1'
        , check: true
        , done: 'Done'
        , UID:  Math.random()
        ,class: 'complete'
            }
            , {
        task: 'Забити на завдання 1'
        , check: false
        , done: 'In progres'
        , UID:  Math.random()
                ,class: 'active'
            }
            , {
        task: 'Забити на все'
        , check: true
        , done: 'Done'
        , UID: Math.random()
                ,class: 'complete'
            }
    ];

