'use server';

import { revalidatePath } from 'next/cache';
import prisma from '../db';

// CREATE
export async function createUser(user: CreateUserParams) {
	try {
		const newUser = await prisma.user.create({
			data: {
				username: user.username,
				email: user.email,
				fullName: user.fullName,
				profilePicture: user.profilePicture,
				bio: user.bio,
			},
		});
		revalidatePath('/'); // Adjust the path as needed
		return newUser;
	} catch (error) {
		handleError(error);
	}
}

// READ
export async function getUserById(userId: string) {
	try {
		const user = await prisma.user.findUnique({
			where: { id: userId },
		});
		return user;
	} catch (error) {
		handleError(error);
	}
}

// UPDATE
export async function updateUser(userId: string, user: UpdateUserParams) {
	try {
		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: {
				username: user.username,
				email: user.email,
				fullName: user.fullName,
				profilePicture: user.profilePicture,
				bio: user.bio,
			},
		});
		revalidatePath('/'); // Adjust the path as needed
		return updatedUser;
	} catch (error) {
		handleError(error);
	}
}

// DELETE
export async function deleteUser(userId: string) {
	try {
		await prisma.user.delete({
			where: { id: userId },
		});
		revalidatePath('/'); // Adjust the path as needed
	} catch (error) {
		handleError(error);
	}
}

function handleError(error: any) {
	console.error(error);
	// You can add more sophisticated error handling here
}
