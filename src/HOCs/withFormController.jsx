import React from 'react';

const withFormController = (WrappedComponent) => {
    return class Wrapper extends React.Component {

        render() {
            return (
                <WrappedComponent values={this.props.state} onChange={this.props.onChange}/>
            );
        }
    }
};

export default withFormController;