import { NEWS } from "../const";

export const getAllNews = async () => {
    const response = await fetch(NEWS, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}


export const getNewsById = async (id) => {
    const response = await fetch(`${NEWS}${id}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}