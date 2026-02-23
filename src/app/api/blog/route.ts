import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { title, slug, category, date, img, metaDesc, keywords, excerpt, content } = body;

        if (!title || !slug || !content) {
            return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
        }

        const mdxContent = `---
title: ${title}
category: ${category || "General"}
date: '${date || new Date().toISOString().split("T")[0]}'
img: ${img || "/images/blog/default.jpg"}
metaDesc: ${metaDesc || excerpt}
keywords:
${(keywords || []).map((k: string) => `  - ${k}`).join("\n")}
excerpt: '${excerpt || ""}'
---

${content}
`;

        const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
        fs.writeFileSync(filePath, mdxContent);

        return NextResponse.json({ message: "Post creado correctamente", slug });
    } catch (error) {
        console.error("Error creating blog post:", error);
        return NextResponse.json({ error: "Error al crear el post" }, { status: 500 });
    }
}
