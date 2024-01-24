const userData = async (req, res) => {
  return res.json({ username: "user", sercet: "sha256..." });
};

export default { userData };
