import {
    FETCH_COURSES,
    TOGGLE_ENROLLED
} from './types';

export function toggleEnrolled(id) {
    return {
        type: TOGGLE_ENROLLED,
        payload: id
    }
}

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                id: 0,
                title: "Introduction to Professional Magic Playing",
                description: "",
                enrolled: false
            },
            {
                id: 1,
                title: "Flipping Out Over Fried Chicken",
                description: "",
                enrolled: false
            },
            {
                id: 2,
                title: "i don't know",
                description: "The megaphones are GALLOPING down the HILLS, chasing after those DASTARDLY PUMPKINS! They weave to AND fro to fight crime and SAVE their mama's chicken pot PIE. Hold onto your wheelbarrows kiddos, 'cuz this ride's gonna get wild! YEEEEEEEEHAW!",
                enrolled: false
            },
            {
                id: 3,
                title: "Bowling Basics",
                description: "Looking for some free credits? Bowling Basics with ",
                enrolled: false
            },
            {
                id: 4,
                title: "Advanced Bowling",
                description: "",
                enrolled: false
            },
            {
                id: 5,
                title: "Bowling *EXTREME*",
                description: "",
                enrolled: false
            },
            {
                id: 6,
                title: "Dissecting Despacito (maybe other songs too)",
                description: "",
                enrolled: false
            },
            {
                id: 7,
                title: "Breaking Through With Black Gold",
                description: "Hi, my name's Jed, and today we'll be diving into the secret mysteries of oil. Has anyone seen my pitchfork?!",
                enrolled: false
            },
            {
                id: 8,
                title: "Triage Lab",
                description: "Real-time scenarios!",
                enrolled: false
            },
            {
                id: 9,
                title: "Time-Lord Training",
                description: "Archibald Beechcroft",
                enrolled: false
            },
        ]
    }
}