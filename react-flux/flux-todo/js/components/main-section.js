var React = require('react'),
    ReactPropTypes = React.PropTypes;

var TodoItem = require('./todo-item');

var TodoActions = require('../actions/todo-actions');

var MainSection = React.createClass({
    propTypes: {
        allTodos: ReactPropTypes.object.isRequired,
        areAllComplete: ReactPropTypes.bool.isRequired
    },

    render: function() {
        if (Object.keys(this.props.allTodos).length < 1) {
            return null;
        }

        var todos = [];
        var allTodos = this.props.allTodos;

        for (var key in allTodos) {
            todos.push(<TodoItem key={key} todo={allTodos[key]} />);
        }

        return (
            <section id="main">
                <input 
                    id="toggle-all"
                    type="checkbox"
                    onChange={this._onToggleCompleteAll}
                    checked={this.props.areAllComplete ? 'checked' : ''}
                />
                <label htmlFor="toggle-all">mark all as complete</label>
                <ul id="todo-list">
                    {todos}
                </ul>
            </section>
        );
    },
    _onToggleCompleteAll: function() {
        TodoActions.toggleCompleteAll();
    }
});

module.exports = MainSection;