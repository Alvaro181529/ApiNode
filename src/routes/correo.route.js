import { Router } from "express";
import {
  getCorreo,
  getCorreos,
  createCorreo,
  updateCorreo,
  deleteCorreo,
} from "../controllers/correo.controller.js";
const router = Router();

// router.get("/", (req, res) => {
//   res.json({"titulo": "hola"});
// });
router.get("/correo", getCorreos);
router.get("/correo/:id", getCorreo);
router.post("/correo", createCorreo);
router.patch("/correo/:id", updateCorreo);
router.delete("/correo/:id", deleteCorreo);

export default router;
