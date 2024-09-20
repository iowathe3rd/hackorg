'use client';

import { Hackathon, HackathonStatus } from '@/types';
import { CalendarDays, MapPin, Clock, Users } from 'lucide-react';
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { format, parseISO, differenceInDays } from 'date-fns';

interface HackathonCardProps extends Omit<Hackathon, 'startDate' | 'endDate'> {
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  className?: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  id,
  name,
  description,
  startDate,
  endDate,
  location,
  maxParticipants,
  status,
  className
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'MMM dd, yyyy');
  };

  const calculateDuration = (start: string, end: string) => {
    const startDate = parseISO(start);
    const endDate = parseISO(end);
    return differenceInDays(endDate, startDate) + 1; // +1 to include both start and end days
  };

  const statusColors = {
    [HackathonStatus.UPCOMING]: 'bg-green-500',
    [HackathonStatus.ONGOING]: 'bg-yellow-500',
    [HackathonStatus.FINISHED]: 'bg-gray-500'
  };

  const renderInfoItem = (Icon: React.ElementType, text: string) => (
    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
      <Icon className="h-4 w-4" />
      <span>{text}</span>
    </div>
  );

  return (
    <Card className={`transition-shadow hover:shadow-lg ${className}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold">{name}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <Badge className={`${statusColors[status]} text-white`}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 space-y-2">
          {renderInfoItem(
            CalendarDays,
            `${formatDate(startDate)} - ${formatDate(endDate)}`
          )}
          {renderInfoItem(MapPin, location)}
          {renderInfoItem(
            Clock,
            `${calculateDuration(startDate, endDate)} days`
          )}
          {renderInfoItem(Users, `Max ${maxParticipants} participants`)}
        </div>
        {status === HackathonStatus.UPCOMING ? (
          <Button className="w-full" asChild>
            <Link href={`/hackathons/${id}/register`}>Register Now</Link>
          </Button>
        ) : (
          <Button variant="secondary" className="w-full" disabled>
            {status === HackathonStatus.ONGOING ? 'In Progress' : 'Closed'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default HackathonCard;
