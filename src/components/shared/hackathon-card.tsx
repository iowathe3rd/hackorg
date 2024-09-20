'use client';

import { Hackathon } from '@/types';
import { CalendarDays, MapPin, Clock, Users } from 'lucide-react';
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Card
} from '../ui/card';
import { Button } from '../ui/button';

const HackathonCard: React.FC<Hackathon> = (props) => {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex items-center space-x-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>{props.startDate.toString()}</span>
        </div>
        <div className="mb-2 flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{props.location}</span>
        </div>
        <div className="mb-2 flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{props.endDate.toString()}</span>
        </div>
        <div className="mb-4 flex items-center space-x-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{props.maxParticipants}</span>
        </div>
        <Button className="w-full">Register Now</Button>
      </CardContent>
    </Card>
  );
};

export default HackathonCard;
