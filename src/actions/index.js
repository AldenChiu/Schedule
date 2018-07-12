import { FETCH_COURSES_} from '/.types';

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                title: "Introduction to Professional Magic Playing",
                description: ""
            },
            {
                title: "Flipping Out Over Fried Chicken",
                description: ""
            },
            {
                title: "Cow Care 101",
                description: ""
            },
            {
                title: "Bowling Basics",
                description: ""
            },
            {
                title: "Advanced Bowling",
                description: ""
            },
            {
                title: "Bowling *EXTREME*",
                description: ""
            },
            {
                title: "Dissecting Despacito (maybe other songs too)",
                description: ""
            },
            {
                title: "Breaking Through With Black Gold",
                description: ""
            },
            {
                title: "Triage Lab",
                description: ""
            },
            {
                title: "Time-Lord Training",
                description: ""
            },
        ]
    }
}