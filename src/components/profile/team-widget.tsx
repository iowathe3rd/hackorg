import api from '@/api';
import { AnimatedTooltip } from '../shared/animated-tooltip';
import { Card, CardHeader, CardContent } from '../ui/card';
import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { getUserData } from '@/lib/api-utils';

export default async function TeamWidget() {
  const user = await getUserData();
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">Моя команда</h2>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-3">
          {/* <AnimatedTooltip items={user.teamMemberships.}  */}
        </div>
      </CardContent>
    </Card>
  );
}
