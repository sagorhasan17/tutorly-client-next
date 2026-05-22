
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
export const getSingleTutor = async (id, token) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers/${id}`,{
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

export const getMyTutors = async (email, token) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors?email=${email}`,{
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
    return [];
  }
};

//update teacher 
export const updateTeacher = async (id, data) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Failed to update teacher");
    }
    const updatedTeacher = await res.json();
    return updatedTeacher;
  } catch (error) {
    return null;
  }
};  


//delete tutor 
export const deleteTutor = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete tutor");
    }
    return true;
  } catch (error) {
    return false;
  }
};


//search 
