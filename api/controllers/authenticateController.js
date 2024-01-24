const userData = async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, sercet: "sha256..." });
};

export default { userData };
