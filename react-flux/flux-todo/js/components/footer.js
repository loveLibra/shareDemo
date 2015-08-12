var React = require('react'),
    ReactPropTypes = React.PropTypes;

var TodoActions = require('../actions/todo-actions');

var Footer = React.createClass({
    propTypes: {
        allTodos: ReactPropTypes.object.isRequired
    },
    render: function() {
        var allTodos = this.props.allTodos,
            total = Object.keys(allTodos).length;

        if (total === 0) {
            return null;
        }

        var completed = 0;
        for (var key in allTodos) {
            if (allTodos[key].complete) {
                completed++;
            }
        }

        var itemsLeft = total - completed,
            itemsLeftPhrase = itemsLeft === 1 ? ' item' : ' items';
        itemsLeftPhrase += ' left';

        var clearCompletedBtn;
        if (completed) {
            clearCompletedBtn =
                <button id="clear-completed" onClick={this._onClearCompleted}>
                    Clear Completed ({completed})
                </button>;
        }

        return (
            <footer id="footer">
                <span id="todo-count">
                    <strong>
                        {itemsLeft}
                    </strong>
                    {itemsLeftPhrase}
                </span>
                {clearCompletedBtn}
            </footer>
        );
    },
    _onClearCompleted: function() {
        TodoActions.destroyCompleted();
    }
});

module.exports = Footer;