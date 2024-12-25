import axiosSeceure from ".";

export const GetToken = async (email) => {
  const { data } = await axiosSeceure.post("/jwt", { email });
  console.log("Token receve from server------>", data);
  return data;
};

export const clearCookies = async () => {
  const { data } = await axiosSeceure.get(`/logout`);
  return data;
};

export const getRole = async (email) => {
  const { data } = await axiosSeceure.get(`/user/${email}`);
  return data;
};

export const saveUser = async (email) => {
  const user = { email }; // Wrap the email in an object
  console.log(user);
  const { data } = await axiosSeceure.put("/save-user", { user, role: "user" });
  return data;
};

// edi profile ------->

export const editProfile = async (id, donorData) => {
  const { data } = await axiosSeceure.put(`/edit-profile/${id}`, { donorData });
  return data;
};

export const saveAsADonator = async (email) => {
  const { data } = await axiosSeceure.patch("/save-as-a-donator", { email });
  return data;
};

// get single Donor data ---------->

export const getSingleDonor = async (id) => {
  const { data } = await axiosSeceure.get(`/donators/details/${id}`);
  return data;
};

// delete donor
export const deleteDonor = async (id) => {
  const { data } = await axiosSeceure.delete(`/donors/${id}`);
  return data;
};

// get all users ----->

export const getAllUsers = async () => {
  const { data } = await axiosSeceure.get("/users");
  return data;
};

// delete users

export const deleteUser = async (id) => {
  const { data } = await axiosSeceure.delete(`/user/${id}`);
  return data;
};


// delete review--------->

export const deleteReview = async (id) => {
  const { data } = await axiosSeceure.delete(`/review/${id}`);
  return data;
};


// get all donors ------->

export const getAllDonator = async () => {
  const { data } = await axiosSeceure.get("/donors");
  return data;
};

// update role -------->

export const updateUserRole = async (id, role) => {
  const { data } = await axiosSeceure.put(`/update-role/${id}`, role);
  return data;
};

// admib state----->
export const adminState = async () => {
  const { data } = await axiosSeceure.get("/admin-state");
  return data;
};


export const getReviews = async () => {
  const { data } = await axiosSeceure.get("/reviews");
  return data;
};


export const AddReview = async (review) => {
  const { data } = await axiosSeceure.post("/reviews", review);
  return data;
};




export const sendReq = async (details) => {
  const { data } = await axiosSeceure.post("/sendReq",{details});
  return data;
};



export const savePaymentInfo = async (paymentInfo) => {
  const { data } = await axiosSeceure.post("/savePaymentInfo", { paymentInfo });
  return data;
};


export const paymentsHistory = async (email) => {
  const { data } = await axiosSeceure.get(`/savePaymentInfo/${email}`);
  return data;
};



export const paymentsHistoryAll = async () => {
  const { data } = await axiosSeceure.get(`/paymentInfo`);
  return data;
};



export const contactDetails = async (user) => {
  const { data } = await axiosSeceure.post("/contactDetails", { user });
  return data;
};


// payment intent

export const createPaymentIntent = async (price) => {
  try {
    // Sending price as an object
    const { data } = await axiosSeceure.post("/create-payment-intent", {
      price,
    });
    console.log("Payment Intent Data:", data); // Debugging
    return data; // Ensure clientSecret is part of the response
  } catch (error) {
    console.error("Error in createPaymentIntent:", error);
    throw error; // Propagate the error to handle it in the caller
  }
};

