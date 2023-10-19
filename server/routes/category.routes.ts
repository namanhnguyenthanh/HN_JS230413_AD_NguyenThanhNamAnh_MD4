import express, { Request, Response } from "express";
const router = express.Router();
import db from "../utils/database";


router.get("/", async (req: Request, res: Response) => {
  try {
    const data = await db.execute("SELECT * FROM category");
    const [rows] = data;
    res.json({
      rows: rows,
    });
  } catch (error) {
    res.json({
      message: "error",
    });
  }
});


router.get("/:id", async (req: Request, res: Response) => {
  let {id} = req.params
  try {
    const data = await db.execute("SELECT * FROM category where category_id = ?", [
      id,
    ]);
    const [rows] = data;
    res.json({
      rows: rows,
    });
  } catch (error) {
    res.json({
      message: "error",
    });
  }
});


router.post("/", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const data = await db.execute(
      `INSERT INTO category (name) VALUES (?)`,
      [name]
    );
    res.json({
      message: "Thêm thành công",
    });
  } catch (error) {
    console.log(error);
  }
});


export default router;
