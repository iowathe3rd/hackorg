// hackathonActions.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// CREATE
export async function createHackathon(hackathon: CreateHackathonParams) {
  try {
    const newHackathon = await prisma.hackathon.create({
      data: {
        name: hackathon.name,
        description: hackathon.description,
        location: hackathon.location,
        startDate: hackathon.startDate,
        endDate: hackathon.endDate,
        maxParticipants: hackathon.maxParticipants,
        registrationDeadline: hackathon.registrationDeadline,
        status: hackathon.status || 'UPCOMING',
      },
    });
    return newHackathon;
  } catch (error) {
    console.error('Error creating hackathon:', error);
    throw new Error('Failed to create hackathon');
  }
}

// READ
export async function getHackathonById(hackathonId: string) {
  try {
    const hackathon = await prisma.hackathon.findUnique({
      where: {
        id: hackathonId,
      },
      include: {
        participants: true,
        teamParticipations: true,
        topics: true,
      },
    });
    return hackathon;
  } catch (error) {
    console.error('Error fetching hackathon:', error);
    throw new Error('Failed to fetch hackathon');
  }
}

// UPDATE
export async function updateHackathon(hackathonId: string, hackathon: UpdateHackathonParams) {
  try {
    const updatedHackathon = await prisma.hackathon.update({
      where: {
        id: hackathonId,
      },
      data: {
        ...hackathon,
        updatedAt: new Date(),
      },
    });
    return updatedHackathon;
  } catch (error) {
    console.error('Error updating hackathon:', error);
    throw new Error('Failed to update hackathon');
  }
}

// DELETE
export async function deleteHackathon(hackathonId: string) {
  try {
    await prisma.hackathon.delete({
      where: {
        id: hackathonId,
      },
    });
    return { message: 'Hackathon deleted successfully' };
  } catch (error) {
    console.error('Error deleting hackathon:', error);
    throw new Error('Failed to delete hackathon');
  }
}
