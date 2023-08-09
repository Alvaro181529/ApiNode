import { Router } from "express";
import {
  getCorreo,
  createCorreo,
  updateCorreo,
  deleteCorreo,
} from "../controllers/correo.controller.js";
const router = Router();

// router.get("/", (req, res) => {
//   res.json({"titulo": "hola"});
// });
router.get("/correo", getCorreo);
router.post("/correo", createCorreo);
router.put("/correo", updateCorreo);
router.delete("/correo", deleteCorreo);

export default router;
