import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

// GET: /api/users - Get all users
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// POST: /api/users - Create a new user
export async function POST(req: Request) {
  try {
    const { username, email, fullName } = await req.json();
    const newUser = await prisma.user.create({
      data: { username, email, fullName },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

// PUT: /api/users - Update a user
export async function PUT(req: Request) {
  try {
    const { id, username, email, fullName } = await req.json();
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { username, email, fullName },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

// DELETE: /api/users - Delete a user
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
