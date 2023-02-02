import axios from "axios";
import { BASEURL } from "./api";

export const getToken = async (email, password) => {
  try {
    const res = await axios({
      url: `${BASEURL}/user/login`,
      method: "post",
      data: { email, password },
    });
    localStorage.setItem("jwtToken", res.data.token);
    return res.data;
  } catch (err) {
    console.error("Error: ", err);
    return;
  }
};

export const signup = async (email, username, password) => {
  try {
    const res = await axios({
      url: `${BASEURL}/user/signup`,
      method: "post",
      data: { email, username, password },
    });
    localStorage.setItem("jwtToken", res.data.token);
    return res.data;
  } catch (err) {
    console.error("Error: ", err);
    return;
  }
};

export const protectedData = async () => {
  const res = await axios({
    url: `${BASEURL}/protecc`,
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    },
  });
  return res.data;
};
