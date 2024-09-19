import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface HackatonCardProps {
  name: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

export default function HackatonCard(props: HackatonCardProps) {
  return (
    <Card className="w-full max-w-md border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-gray-100">
          {props.name}
        </CardTitle>
        <CardDescription className="text-gray-700 dark:text-gray-400">
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border border-gray-200 dark:border-gray-700 p-4">
          <Calendar className="h-5 w-5 text-primary dark:text-primary-light" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">
              Date
            </p>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              {props.startDate}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 rounded-md border border-gray-200 dark:border-gray-700 p-4">
          <Clock className="h-5 w-5 text-primary dark:text-primary-light" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">
              Duration
            </p>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              48 hours
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 rounded-md border border-gray-200 dark:border-gray-700 p-4">
          <MapPin className="h-5 w-5 text-primary dark:text-primary-light" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">
              Location
            </p>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              {props.location}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 rounded-md border border-gray-200 dark:border-gray-700 p-4">
          <Users className="h-5 w-5 text-primary dark:text-primary-light" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">
              Team Size
            </p>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              1-4 members
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary dark:bg-primary-light text-white dark:text-gray-900">
          Register Now
        </Button>
      </CardFooter>
    </Card>
  );
}
