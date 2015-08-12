var React = require('react'),
    ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({
    propTypes: {
        className: ReactPropTypes.string,
        id: ReactPropTypes.string,
        placeholder: ReactPropTypes.string,
        value: ReactPropTypes.string,
        onSave: ReactPropTypes.func.isRequired
    },
    getInitialState: function() {
        return {
            value: this.props.value || ''
        };
    },
    render: function() {
        return (
            <input 
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onBlur={this._save}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                value={this.state.value}
                autoFocus={true}
            />
        );
    },
    _save: function() {
        this.props.onSave(this.state.value); //OnSave由parent传入，因为有新建和编辑两种不同的业务需求
        this.setState({
            value: ''
        });
    },
    _onChange: function(e) {
        this.setState({
            value: e.target.value
        });
    },
    _onKeyDown: function(e) {
        if (e.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
    }
});

module.exports = TodoTextInput;