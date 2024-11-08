import {LESSON} from "../const";


export const getAllLesson = async () => {
    const response = await fetch(LESSON , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    return data
}
