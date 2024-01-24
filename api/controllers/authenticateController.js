import { chatApi } from "../config/chatEngine.js";
import "dotenv/config.js";

const userData = async (req, res) => {
  const { username } = req.body;

  try {
    const result = await chatApi.put(
      "/users",
      {
        username: username,
        sercet: username,
        first_name: username,
      },
      { headers: { "Private-Key": process.env.PRIVATE_KEY } }
    );
  } catch (err) {
    console.log(err.message);
  }
  return res.json({ username: username, sercet: "sha256..." });
};

export default { userData };
