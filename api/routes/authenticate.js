import { Router } from "express";

import authenticateController from "./../controllers/authenticateController.js";

const router = Router();

router.route("/").post(authenticateController.userData);

export { router };
