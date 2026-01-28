import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const DATA_DIR = path.join(process.cwd(), 'data');
    const DB_FILE = path.join(DATA_DIR, 'ip-tracking.json');

    if (fs.existsSync(DB_FILE)) {
        // Reset file to initial state
        const initialData = { usage: {}, logs: [] };
        fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
        return NextResponse.json({ success: true, message: 'Security database reset successfully.' });
    } else {
        return NextResponse.json({ success: true, message: 'Database file not found, nothing to reset.' });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to reset security database' }, { status: 500 });
  }
}
