export const getAllTutors = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers/all`);
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
export const getPopularTutors = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers/popular`);
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
export const getSingleTutor = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch tutor");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
};

//my booking data fetch
export const getMyBookingSessions = async (email) =>{
    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings?email=${email}`);
    if (!res.ok) {
      throw new Error("Failed to fetch tutors");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }

}