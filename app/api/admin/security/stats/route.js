import { NextResponse } from 'next/server';
import { Security } from '@/lib/security';

export async function GET() {
    try {
        const stats = await Security.getStats();
        return NextResponse.json(stats);
    } catch (e) {
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
}
