import axios from "axios";

const url = "https://trustiddb.onrender.com";

export const signUp = async (data: any) => {
  try {
    const response = await axios.post(`${url}/api/auth/register`, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
export const logIn = async (data: any) => {
  try {
    const response = await axios.post(`${url}/api/auth/login`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
