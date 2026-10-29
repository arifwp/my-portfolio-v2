export const runtime = "nodejs";

import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { absoluteUrl } from "@/constants/site";

export async function GET() {
  const pdfPath = path.resolve("public/resume-arif-prasetyo.pdf");

  const fileBuffer = await readFile(pdfPath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="resume-arif-prasetyo.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
      Link: `<${absoluteUrl("/resume")}>; rel="canonical"`,
    },
  });
}
