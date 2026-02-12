import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Ensure this path is correct based on project structure

export async function POST() {
  try {
    // Transactional delete to ensure consistency
    await prisma.$transaction([
        prisma.accessLog.deleteMany(),
        prisma.ipTracking.deleteMany()
    ]);

    return NextResponse.json({ success: true, message: 'Security database (MySQL) reset successfully.' });
  } catch (error) {
    console.error('Reset Security Error:', error);
    return NextResponse.json({ error: 'Failed to reset security database' }, { status: 500 });
  }
}
