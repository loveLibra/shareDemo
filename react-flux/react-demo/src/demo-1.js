var ComponentOne = React.createClass({
    render: function() {
        return (
            <p>Hello,React</p>
        )
    }
});

React.render(
    <ComponentOne />,
    document.getElementById('content')
);