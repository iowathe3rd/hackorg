import api from '@/api';
import { User } from '@/types';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export async function getUserData() {
  const clerkData = await currentUser();

  if (!clerkData) {
    redirect('/');
  }

  const user = api.users.findOne(clerkData.publicMetadata.userId as string);
  return user;
}
