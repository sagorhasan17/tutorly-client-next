export const getAllTutors = async () => {
  try {
    const res = await fetch("http://localhost:8000/teachers/all");
    if (!res.ok) {
      throw new Error("Failed to fetch tutors");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);

    return [];
  }
};