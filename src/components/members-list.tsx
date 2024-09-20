import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TeamMember, User } from '@/types';

export function MembersList({ users }: { users: TeamMember[] }) {
  return (
    <div className="space-y-8">
      {users.map((value, index) => (
        <div className="flex items-center" key={index}>
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>{value.user.fullName.split('')[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {value.user.fullName}
            </p>
            <p className="text-sm text-muted-foreground">{value.user.email}</p>
          </div>
          <div className="ml-auto font-medium">{value.user.rating}</div>
        </div>
      ))}
    </div>
  );
}
