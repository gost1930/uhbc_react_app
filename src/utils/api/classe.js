import {CLASSE} from "../const";


export const getAllClasse = async () => {
    const response = await fetch(CLASSE, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}
 

export const addClasse = async (data) => {
    const response = await fetch(CLASSE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const data1 = await response.json();
    return data1;
};