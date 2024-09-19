import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

// GET: /api/hackathons - Get all hackathons
export async function GET() {
  try {
    const hackathons = await prisma.hackathon.findMany();
    return NextResponse.json(hackathons);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch hackathons' }, { status: 500 });
  }
}

// POST: /api/hackathons - Create a new hackathon
export async function POST(req: Request) {
  try {
    const { name, description, location, startDate, endDate, maxParticipants } = await req.json();
    const newHackathon = await prisma.hackathon.create({
      data: { name, description, location, startDate, endDate, maxParticipants },
    });
    return NextResponse.json(newHackathon);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create hackathon' }, { status: 500 });
  }
}

// PUT: /api/hackathons - Update a hackathon
export async function PUT(req: Request) {
  try {
    const { id, name, description, location, startDate, endDate, maxParticipants } = await req.json();
    const updatedHackathon = await prisma.hackathon.update({
      where: { id },
      data: { name, description, location, startDate, endDate, maxParticipants },
    });
    return NextResponse.json(updatedHackathon);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update hackathon' }, { status: 500 });
  }
}

// DELETE: /api/hackathons - Delete a hackathon
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.hackathon.delete({ where: { id } });
    return NextResponse.json({ message: 'Hackathon deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete hackathon' }, { status: 500 });
  }
}
