var React = require('react');

var TodoApp = require('./components/todo-app');

React.render(
    <TodoApp />,
    document.getElementById('todo-app')
);