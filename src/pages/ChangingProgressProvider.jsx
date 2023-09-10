import React from 'react';

class ChangingProgressProvider extends React.Component {
    static defaultProps = {
        interval: 1000,
    };

    state = {
        valuesIndex: 0,
    };

    componentDidMount() {
        setInterval(() => {
            // while (valuesIndex <= 100) {
            this.setState({
                valuesIndex: this.state.valuesIndex + 1 || 100,
            });
            // }
        }, this.props.interval);
    }

    render() {
        return this.props.children(this.props.values[this.state.valuesIndex]);
    }
}

export default ChangingProgressProvider;
