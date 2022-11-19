import axios from "axios";

const signUpSubmit = async (user: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const { data } = await axios.post("http://localhost:5001/signup", user);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default signUpSubmit;
