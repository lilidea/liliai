import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const publicDir = path.join(process.cwd(), 'public');
  
  try {
    const files = fs.readdirSync(publicDir);
    // Filter only images
    const images = files.filter(file => /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(file));
    
    return NextResponse.json({ images });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read directory' }, { status: 500 });
  }
}
