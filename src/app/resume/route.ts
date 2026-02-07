export const runtime = "nodejs";

import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const pdfPath = path.resolve("public/resume-arif-prasetyo.pdf");

  if (!fs.existsSync(pdfPath)) {
    return new NextResponse("File not found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(pdfPath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="resume-arif-prasetyo.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
