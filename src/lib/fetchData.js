export const getAllTutors = async (
  search = "",
  startTime = "",
  endTime = "",
) => {
  try {
    const params = new URLSearchParams();
    if (search) {
      params.append("search", search);
    }
    if (startTime) {
      params.append("startTime", startTime);
    }
    if (endTime) {
      params.append("endTime", endTime);
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers?${params.toString()}`,
      {
        cache: "no-store",
      },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch tutors");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPopularTutors = async () => {
  try {const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers/popular`);
    if (!res.ok) {
      throw new Error("Failed to fetch tutors");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

// get a single tutor by id
export const getSingleTutor = async (id, token) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers/${id}`,
      {
        cache: "no-store",

        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch tutor");
    }
    return res.json();
  } catch (error) {
    return null;
  }
};

// my booking data fetch
export const getMyBookingSessions = async (email) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings?email=${email}`,
      {
        cache: "no-store",
      },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch tutors");
    }

    return res.json();
  } catch (error) {
    return [];
  }
};

export const getMyTutors = async (email, token) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors?email=${email}`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch tutors");
    }
    return res.json();
  } catch (error) {
    return [];
  }
};

// update teacher
export const updateTeacher = async (id, data) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/teachers/${id}`,
      {
        method: "PATCH",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!res.ok) {
      throw new Error("Failed to update teacher");
    }

    return res.json();
  } catch (error) {
    return null;
  }
};

// delete tutor
export const deleteTutor = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
      {
        method: "DELETE",
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to delete tutor");
    }

    return true;
  } catch (error) {
    return false;
  }
};
