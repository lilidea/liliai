import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const LOG_DIR = path.join(process.cwd(), 'logs');
const LOG_FILE = path.join(LOG_DIR, 'analytics.json');

export async function POST(req) {
    try {
        const data = await req.json();

        // Ensure logs directory exists
        try {
            await fs.access(LOG_DIR);
        } catch {
            await fs.mkdir(LOG_DIR);
        }

        // Prepare log entry
        const entry = {
            timestamp: new Date().toISOString(),
            id: data.id || 'unknown',
            companyName: data.companyName || 'N/A',
            sector: data.sector || 'N/A',
            selectedComponents: data.selectedComponents || {},
            generatedContent: data.generatedContent || {},
            stats: {
                componentCount: data.selectedComponents ? Object.keys(data.selectedComponents).length : 0,
                pageCount: data.pages ? data.pages.length : 0
            }
        };

        // Read existing logs
        let logs = [];
        try {
            const existing = await fs.readFile(LOG_FILE, 'utf8');
            logs = JSON.parse(existing);
        } catch {
            logs = [];
        }

        // Append and save
        logs.push(entry);
        await fs.writeFile(LOG_FILE, JSON.stringify(logs, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Logging failed:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
