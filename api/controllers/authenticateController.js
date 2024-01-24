import { chatApi } from "../config/chatEngine.js";
import "dotenv/config.js";

const userData = async (req, res) => {
  const { username } = req.body;

  try {
    const result = await chatApi.put(
      "/users/",
      {
        username: username,
        sercet: username,
        first_name: username,
      },
      { headers: { "Private-Key": process.env.PRIVATE_KEY } }
    );
    return res.status(result.status).json(result.data);
  } catch (err) {
    console.log(err.message);
    return res.status(500);
  }
};

const test = (req, res) => {
  return res.status(200).json({ message: "hello" });
};

export default { userData, test };
