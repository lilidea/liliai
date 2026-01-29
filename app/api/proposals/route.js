import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// POST: Create a new proposal
export async function POST(request) {
    try {
        let body;
        try {
            body = await request.json();
        } catch (e) {
            return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
        }

        const { formData, siteData } = body;

        // Validation
        if (!formData.name || !formData.email || !formData.company) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const proposal = await prisma.proposal.create({
            data: {
                companyName: formData.company,
                contactName: formData.name,
                email: formData.email,
                phone: formData.phone,
                budget: formData.budget,
                timeline: formData.timeline,
                notes: formData.notes,
                siteData: JSON.stringify(siteData), // Serialize for SQLite (stored as String)
                status: 'PENDING'
            }
        });

        return NextResponse.json({ success: true, data: proposal }, { status: 201 });

    } catch (error) {
        console.error('Proposal Creation Error:', error);
        return NextResponse.json({
            error: 'Failed to create proposal',
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }, { status: 500 });
    }
}

// GET: List all proposals (Admin)
export async function GET(request) {
    try {
        const proposals = await prisma.proposal.findMany({
            orderBy: { createdAt: 'desc' }
        });

        // Parse JSON string back to object
        const parsedProposals = proposals.map(p => {
            try {
                return {
                    ...p,
                    siteData: JSON.parse(p.siteData)
                };
            } catch (e) {
                return { ...p, siteData: {} }; // Fallback for invalid JSON
            }
        });

        return NextResponse.json({ success: true, data: parsedProposals });

    } catch (error) {
        console.error('Fetch Proposals Error:', error);
        return NextResponse.json({ error: 'Failed to fetch proposals' }, { status: 500 });
    }
}
