var Timer = React.createClass({
    getInitialState: function() {
        return {
            time: this.props.time
        }
    },
    getDefaultProps: function() {
        return {
            sex: 'male'
        }
    },
    killMyself: function() {
        React.unmountComponentAtNode(document.getElementById('content'));
    },
    componentDidMount: function() {
        var that = this;
        this.interval = setInterval(function() {
            that.setState({
                time: that.state.time + 1
            });
        }, 1000);
        //
        this.refs.killMyself.getDOMNode().addEventListener('click', this.killMyself);
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
        //
        alert('Bye,I am going to dead');
    },
    render: function() {
        return (
            <div className="demo-2-container"> 
                <h1>Hello,{this.props.name},You are a {this.props.sex}.Time is:</h1>
                <h2>{this.state.time}</h2>
                <button ref="killMyself">Kill MySelf</button>
            </div>
        );
    }
});

//TIPS:现实使用场景->推荐做法
// var data = {
//     time: 10,
//     name: xuqi
// };
// <Timer {...data} />
React.render(
    <Timer time={10} name={'xuqi'}/>,
    document.getElementById('content')
);