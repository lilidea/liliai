import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    const { token } = await req.json();

    // Default Hash Key (User can change this really easily later)
    // "L1L-ID3A-S3CUR3-X99"
    const VALID_HASH = process.env.ADMIN_ACCESS_TOKEN || 'L1L-ID3A-S3CUR3-X99';

    if (token === VALID_HASH) {
        // Set HttpOnly cookie
        const cookieStore = await cookies();
        cookieStore.set('admin_session', 'authenticated', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        });

        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
