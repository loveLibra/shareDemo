var React = require('react');

var TodoAction = require('../actions/todo-actions');

var TodoTextInput = require('./todo-text-input');

var Header = React.createClass({
    render: function() {
        return (
            <header id="header">
                <h1>TODOS</h1>
                <TodoTextInput
                    id="new-todo"
                    placeholder="what needs to be done?"
                    onSave={this._onSave}
                />
            </header>
        );
    },
    _onSave: function(text) {
        if (text.trim()) {
            TodoAction.create(text);
        }
    }
});

module.exports = Header;