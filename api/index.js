import express from "express";
import cors from "cors";

import router from "./routes/authenticate.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors({ origin: true }));

//routes
app.use("/authenticate", router);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
