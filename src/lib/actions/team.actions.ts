// teamActions.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// CREATE
export async function createTeam(team: CreateTeamParams) {
  try {
    const newTeam = await prisma.team.create({
      data: {
        name: team.name,
        description: team.description,
      },
    });
    return newTeam;
  } catch (error) {
    console.error('Error creating team:', error);
    throw new Error('Failed to create team');
  }
}

// READ
export async function getTeamById(teamId: string) {
  try {
    const team = await prisma.team.findUnique({
      where: {
        id: teamId,
      },
      include: {
        members: true,
        teamParticipations: true,
      },
    });
    return team;
  } catch (error) {
    console.error('Error fetching team:', error);
    throw new Error('Failed to fetch team');
  }
}

// UPDATE
export async function updateTeam(teamId: string, team: UpdateTeamParams) {
  try {
    const updatedTeam = await prisma.team.update({
      where: {
        id: teamId,
      },
      data: {
        ...team,
        updatedAt: new Date(),
      },
    });
    return updatedTeam;
  } catch (error) {
    console.error('Error updating team:', error);
    throw new Error('Failed to update team');
  }
}

// DELETE
export async function deleteTeam(teamId: string) {
  try {
    await prisma.team.delete({
      where: {
        id: teamId,
      },
    });
    return { message: 'Team deleted successfully' };
  } catch (error) {
    console.error('Error deleting team:', error);
    throw new Error('Failed to delete team');
  }
}
