import { WEEKLY_TIME } from "../const";



export const getAllWeeklyTime = async () => {
    const response = await fetch(WEEKLY_TIME);
    const data = await response.json();
    return data;
};

export const getWeeklyTimeByClass = async (id) => {
    const response = await fetch(`${WEEKLY_TIME}classe/${id}` ,{
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

export const createWeeklyTime = async (data) => {
  const response = await fetch(WEEKLY_TIME, {
    method: "POST",
    body: data
  });

  const data1 = await response.json();
  return data1
}