import React, { Component } from 'react';

class ProgressTracker extends Component {

    calculateProgress = function() {
        return (this.props.amountEnrolled / this.props.amountPossible) * 100;
    }.bind(this);

    render() {
        return (
            <div className="progress-tracker">
                <div className="progress-tracker__title">Progress Tracker</div>
                <div className="progress-tracker__percentage">
                    {this.calculateProgress()}%
                </div>
            </div>
        )
    }
}

export default ProgressTracker;