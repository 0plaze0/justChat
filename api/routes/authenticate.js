import { Router } from "express";

import authenticateController from "./../controllers/authenticateController.js";

const router = Router();

router
  .route("/")
  .get(authenticateController.test)
  .post(authenticateController.userData);

export { router };
