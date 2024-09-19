import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

// GET: /api/teams - Get all teams
export async function GET() {
  try {
    const teams = await prisma.team.findMany();
    return NextResponse.json(teams);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch teams' }, { status: 500 });
  }
}

// POST: /api/teams - Create a new team
export async function POST(req: Request) {
  try {
    const { name, description } = await req.json();
    const newTeam = await prisma.team.create({
      data: { name, description },
    });
    return NextResponse.json(newTeam);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create team' }, { status: 500 });
  }
}

// PUT: /api/teams - Update a team
export async function PUT(req: Request) {
  try {
    const { id, name, description } = await req.json();
    const updatedTeam = await prisma.team.update({
      where: { id },
      data: { name, description },
    });
    return NextResponse.json(updatedTeam);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update team' }, { status: 500 });
  }
}

// DELETE: /api/teams - Delete a team
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.team.delete({ where: { id } });
    return NextResponse.json({ message: 'Team deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete team' }, { status: 500 });
  }
}
