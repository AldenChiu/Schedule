import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">Problem Solving</label>
                    { Icon('fas fa-check', 'library-course__icon') }
                </div>
                <Arrow className="library-course__arrow"/>
                <Action className="library-course__action"/>
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>The megaphones are GALLOPING down the HILLS, chasing after those DASTARDLY PUMPKINS! They weave to AND fro to fight crime and SAVE their mama's chicken pot PIE. Hold onto your wheelbarrows kiddos, 'cuz this rides' gonna get wild! YEEEEEEEEHAW!</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;