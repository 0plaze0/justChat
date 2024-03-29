import express from "express";
import cors from "cors";

import { router as authenticate } from "./routes/authenticate.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//routes
app.use("/authenticate", authenticate);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
