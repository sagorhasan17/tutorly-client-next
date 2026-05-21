export const getAllTutors = async (token) => {
  try {
    const res = await fetch(`${process.env.LOCALHOST_URL}/teachers/all`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
export const getPopularTutors = async (token) => {
  try {
    const res = await fetch(`${process.env.LOCALHOST_URL}/teachers/popular`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

//get a single tutor by id
export const getSingleTutor = async (id,token) => {
  try {
    const res = await fetch(`http://localhost:8000/teachers/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch tutor");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};