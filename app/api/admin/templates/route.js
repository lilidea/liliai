import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET: List all templates
export async function GET() {
  try {
    const templates = await prisma.template.findMany({
      orderBy: { updatedAt: 'desc' }
    });
    return NextResponse.json(templates);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch templates' }, { status: 500 });
  }
}

// POST: Create a new template
export async function POST(req) {
  try {
    const data = await req.json();
    const template = await prisma.template.create({
      data: {
        name: data.name,
        description: data.description,
        category: data.category,
        content: data.content, // JSON string
        thumbnail: data.thumbnail
      }
    });
    return NextResponse.json(template);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create template' }, { status: 500 });
  }
}

// PUT: Update an existing template
export async function PUT(req) {
  try {
    const data = await req.json();
    const { id, ...updateData } = data;

    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

    const template = await prisma.template.update({
      where: { id: parseInt(id) },
      data: {
         name: updateData.name,
         description: updateData.description,
         category: updateData.category,
         thumbnail: updateData.thumbnail,
         content: updateData.content
      }
    });

    return NextResponse.json(template);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update template' }, { status: 500 });
  }
}

// DELETE: Remove a template (Expects ?id=...)
export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await prisma.template.delete({
            where: { id: parseInt(id) }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete template' }, { status: 500 });
    }
}
