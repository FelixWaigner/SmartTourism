import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import { join } from "path";

// make an api endpoint for uploading files in nextjs
export default async function handler(req: Request, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const file = req.body
        if (file){
            const path = join(process.cwd(), "public", "uploads", file.name);
            await fs.writeFile(path, file.data, "base64");
            res.status(200).json({ success: true });
        }
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(405).json({ success: false });
      break;
  }
}

