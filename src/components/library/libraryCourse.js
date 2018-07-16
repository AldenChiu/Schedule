import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

import AnimateHeight from 'react-animate-height';

class LibraryCourse extends Component {

    constructor(props) {
        super(props)

        this.state = {
            status: true,
            height: 0
        }
    }



    handleCallback = function(status) {
        let height = this.state.height == 0 ? 'auto' : 0;
        if(!status) {
            document.getElementById(this.id).classList.add('library-course-selected');
        } else {
            document.getElementById(this.id).classList.remove('library-course-selected');
        }
        this.setState({ status, height })
    }.bind(this)

    render() {
        this.id = `library-course-${this.props.id}`
        return (
            <div id={this.id} className="library-course">
                <div className="library-course__title-check">
                    <div className="library-course__title">{ this.props.title }</div>
                    { Icon('fas fa-check', 'library-course__icon') }
                </div>
                <Arrow callback={(status) => this.handleCallback(status)} id={this.props.id} className="library-course__arrow"/>
                <Action id = {this.props.id} onClick={() => this.props.toggleEnrolled(this.props.id)} className="library-course__action"/>
                <AnimateHeight duration = {300} height={this.state.height}>
                <div className="library-course__description">
                  <label>Course Description</label>
                  <p>
                  { this.props.description }
                  </p>
                </div>
                </AnimateHeight>
            </div>
        )
    }
}

export default connect(null, actions)(LibraryCourse);