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

export const createLesson = async (data) => {
    const response = await fetch(LESSON, {
        method: 'POST',
        body: data,  // استخدم FormData مباشرة هنا دون تحديد Content-Type
    });

    const data1 = await response.json();
    return data1;
};

export const deleteLesson = async (id) => {
    const response = await fetch(`${LESSON}${id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};

export const getLessonBySubject = async (id) => {
    const response = await fetch(`${LESSON}${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};