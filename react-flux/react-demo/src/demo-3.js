var TodoList = React.createClass({
    render: function() {
        return (
            <ul>
                {
                    this.props.todos.map(function(item, index) {
                        return <li>{item}</li>
                    })
                }
            </ul>
        );
    }
});

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: this.props.todos
        }
    },
    addOne: function() {
        var input = this.refs.input.getDOMNode();
        var newTodos = this.state.todos.concat([{name: input.value}]);
        this.setState({
            todos: newTodos
        });
    },
    render: function() {
        return (
            <div className="todo-app">
                <input ref="input" placeholder="add your todo" />
                <button onClick={this.addOne}>AddOne</button>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
});

var data = {
    todos: [
        {
            name: 'xuqi'
        },
        {
            name: 'xuqi2'
        }
    ]
};

React.render(
    <TodoApp {...data}/>,
    document.getElementById('content')
);