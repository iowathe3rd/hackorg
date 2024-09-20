import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { AnimatedTooltip } from '@/components/shared/animated-tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { currentUser } from '@clerk/nextjs/server';
// Пример данных пользователя и команды

export default async function page() {
  const user = await currentUser();

  const people = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      image:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'
    },
    {
      id: 2,
      name: 'Robert Johnson',
      designation: 'Product Manager',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 3,
      name: 'Jane Smith',
      designation: 'Data Scientist',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 4,
      name: 'Emily Davis',
      designation: 'UX Designer',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 5,
      name: 'Tyler Durden',
      designation: 'Soap Developer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'
    },
    {
      id: 6,
      name: 'Dora',
      designation: 'The Explorer',
      image:
        'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80'
    }
  ];
  // Example team members and event history
  const teamMembers = [
    { name: 'Петр', avatar: '/path/to/avatar1.jpg' },
    { name: 'Сергей', avatar: '/path/to/avatar2.jpg' },
    { name: 'Анна', avatar: '/path/to/avatar3.jpg' }
  ];

  const eventHistory = [
    { title: 'Хакатон А', date: '12 сентября 2023' },
    { title: 'Хакатон B', date: '23 августа 2023' }
  ];
  return (
    <PageContainer>
      <div className="grid grid-cols-2 gap-4">
        {/* Плитка 2: Я */}
        <Card className="p-8">
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={user?.imageUrl || '/path/to/default-avatar.jpg'}
                />
                <AvatarFallback>{user?.fullName}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">{user?.fullName}</h3>
                <p className="text-sm text-muted-foreground">
                  @{user?.username}
                </p>
                <Badge>Статус: Лидер команды</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Плитка 1: Мои события */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-bold">Мои события</h2>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-1 pl-5">
              {eventHistory.map((event, index) => (
                <li key={index}>
                  {event.title} - {event.date}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Плитка 3: Моя команда */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-bold">Моя команда</h2>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-3">
              <AnimatedTooltip items={people} />
            </div>
          </CardContent>
        </Card>

        {/* Плитка 4: История участий */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-bold">История участий</h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {eventHistory.map((event, index) => (
                <li key={index} className="rounded-lg border p-3">
                  <h3 className="text-md font-semibold">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
