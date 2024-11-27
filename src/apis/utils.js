

import axios from "axios";

export const imgUplord = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    // Log for debugging but remove in production
    console.log("API Key:", import.meta.env.VITE_IMGBB_API_KEY);

    // Use Axios to upload image
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );

    // Return the uploaded image's URL or response data
    return response.data.data.url;
  } catch (error) {
    console.error("Error uploading image:", error.message);
    throw error; // Ensure the caller is aware of the error
  }
};
