import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { MembersList } from '../members-list';
import api from '@/api';

interface TeamWidgetProps {
  teamId: string;
}
export default async function TeamWidget({ teamId }: TeamWidgetProps) {
  const team = await api.teams.findOne(teamId);
  return (
    <Card className="col-span-4 md:col-span-3">
      <CardHeader>
        <CardTitle>Ваша команда</CardTitle>
        <CardDescription>Вы участвуете в команде "Команда 1"</CardDescription>
      </CardHeader>
      <CardContent>
        <MembersList users={team.members} />
      </CardContent>
    </Card>
  );
}
