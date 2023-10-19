import express, { Request, Response } from "express";
const router = express.Router();
import db from "../utils/database";


router.get("/", async (req: Request, res: Response) => {
  try {
    const data = await db.execute("SELECT * FROM question");
    const [rows] = data;
    res.json({
      data: rows,
    });
  } catch (error) {
    res.json({
      message: "error",
    });
  }
});


router.get("/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await db.execute(
            `SELECT * FROM question WHERE question_id = ?`,
            [id]
        );
        const row: any = data[0];
        if (row.length === 0) {
            res.json({
                message: "question with id is not defined",
            });
        } else {
            res.json(row[0]);
        }
    } catch (error) {
        res.json({
            error: error,
        });
    }
});



router.post("/", async (req: Request, res: Response) => {
    try {
        const { name, level, category_id } = req.body;
        const data = await db.execute(
            `INSERT INTO question (name, level, category_id) VALUES (?, ?, ?)`,
            [name, level, category_id]
        );

        res.json({
            message: "Add thành công",
        });
    } catch (error) {
        res.json({
            error: error,
        });
    }
});


export default router;
