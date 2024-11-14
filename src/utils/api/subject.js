import { SUBJECT } from "../const";

export const getAllSubject = async () => {
    const response = await fetch(SUBJECT, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

export const getSubjectByClasse = async (id) => {
    const response = await fetch(`${SUBJECT}${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    
    const data = await response.json();
    return data;
  };

export const createSubject = async (data) => {
    const response = await fetch(SUBJECT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const data1 = await response.json();
    return data1;
}

export const deleteClasse = async (id) => {
    const response = await fetch(`${SUBJECT}${id}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

export const updateClasse = async (id, data) => {
    const response = await fetch(`${SUBJECT}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const data1 = await response.json();
    return data1;
}