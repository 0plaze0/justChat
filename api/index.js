import express from "express";
import cors from "cors";

import { router as authenticate } from "./routes/authenticate";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors({ origin: true }));

//routes
app.use("/authenticate", authenticate);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
