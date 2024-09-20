import PageContainer from '@/components/layout/page-container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getUserData } from '@/lib/api-utils';
// Пример данных пользователя и команды

export default async function page() {
  const user = await getUserData();

  return (
    <PageContainer>
      <div className="grid grid-cols-2 gap-4">
        {/* Плитка 2: Я */}
        <Card className="p-8">
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={user?.profilePicture || '/path/to/default-avatar.jpg'}
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
      </div>
    </PageContainer>
  );
}
