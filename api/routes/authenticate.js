import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  return res.send("hello");
});

export default router;
