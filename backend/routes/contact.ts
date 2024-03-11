import { Router } from "express";
const router = Router();

router.post("/", async (req, res) => {
  res.status(200).json({ message: "success" });
});

router.get("/articles", async (req, res) => {
  res.status(200).json({ message: "success" });
});

export default router;
