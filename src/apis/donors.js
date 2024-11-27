import axiosSeceure from "../apis";

export const singleDonor = async (id) => {
 const {data}= axiosSeceure.get(`donors/${id}`);
 return data;

};

export const addDonor = async (donorData) => {
  const { data } = axiosSeceure.post("donors",donorData);
  return data;
};