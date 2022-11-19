import axios from "axios";

const loginSubmit = async (user: { email: string; password: string }) => {
  try {
    const { data } = await axios.post("http://localhost:5001/login", user);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default loginSubmit;
