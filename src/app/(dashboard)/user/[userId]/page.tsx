import api from '@/api';
import { EmployeeForm } from '@/components/forms/employee-form';
import PageContainer from '@/components/layout/page-container';
import LatestActivity from '@/components/profile/latest-activity';
import TeamWidget from '@/components/profile/team-widget';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { HeartIcon, MessageCircleIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'User', link: '/dashboard/user' },
  { title: 'Create', link: '/dashboard/user/create' }
];
export default async function Page({ params }: { params: { userId: string } }) {
  const user = await api.users.findOne(params.userId);
  if (!user) {
    notFound();
  }
  return (
    <PageContainer scrollable={true}>
      <div className="mx-auto grid grid-cols-1 gap-6 px-4 py-8">
        <div>
          <div className="grid grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-muted">
              <div className="h-48 bg-[url('/placeholder.svg')] bg-cover bg-center" />
              <div className="flex items-center gap-4 p-6">
                <Avatar className="h-20 w-20 border-4 border-background">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <h2 className="text-2xl font-bold">{user.fullName}</h2>
                  <p className="text-muted-foreground">{user?.bio}</p>
                  <Badge>Статус: Лидер команды</Badge>
                </div>
              </div>
            </div>
            <TeamWidget teamId="8b3c8922-76b1-404a-8ae6-1861e29524ab" />
          </div>
          <LatestActivity />
        </div>
      </div>
    </PageContainer>
  );
}
