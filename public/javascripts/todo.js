/**
 * Created by ramonantunez on 03/07/14.
 */
function TodoCtrl($scope) {
    $scope.todos = [
        {text: 'learn angular', done: true},
        {text: 'build an angular app', done: true},
        {text: 'store ToDos in a MongoDB', done: false},
        {text: 'learn angular / nodejs / express / ejs in depth', done: false}
    ];

    $scope.addTodo = function () {
        $scope.todos.push({text: $scope.todoText, done: false});
        $scope.todoText = '';
    };

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };
}