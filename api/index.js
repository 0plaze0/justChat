import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: true }));

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
