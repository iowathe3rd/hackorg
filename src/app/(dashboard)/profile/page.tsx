import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { currentUser } from '@clerk/nextjs/server';
// Пример данных пользователя и команды

export default async function page() {
  const user = await currentUser();

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
      <Breadcrumbs
        items={[
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'Profile', link: '/dashboard/profile' }
        ]}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
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

        {/* Плитка 2: Я */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-bold">Я</h2>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar>
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
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Плитка 3: Моя команда */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-bold">Моя команда</h2>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-3">
              {teamMembers.map((member, index) => (
                <Avatar key={index}>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
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
