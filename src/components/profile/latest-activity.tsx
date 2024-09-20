import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { CalendarDaysIcon } from 'lucide-react';

export default function LatestActivity() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDaysIcon className="h-6 w-6 text-muted-foreground" />
          <CardTitle>Последняя активность</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Agenda</TableHead>
              <TableHead>Mode</TableHead>
              <TableHead>
                <span className="sr-only">Attendees</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>July 21, 2024</TableCell>
              <TableCell>10:00 AM - 11:00 AM</TableCell>
              <TableCell>Project kickoff meeting</TableCell>
              <TableCell>
                <Badge variant="outline">Online</Badge>
              </TableCell>
              <TableCell>
                <div className="relative flex -space-x-2 overflow-hidden">
                  <Avatar className="border-2 border-background">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="@jaredpalmer"
                    />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@maxleiter" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shuding_" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>July 28, 2024</TableCell>
              <TableCell>2:00 PM - 3:30 PM</TableCell>
              <TableCell>Design review</TableCell>
              <TableCell>
                <Badge variant="outline">Offline</Badge>
              </TableCell>
              <TableCell>
                <div className="relative flex -space-x-2 overflow-hidden">
                  <Avatar className="border-2 border-background">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="@jaredpalmer"
                    />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@maxleiter" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shuding_" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="@jaredpalmer"
                    />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>August 4, 2024</TableCell>
              <TableCell>9:00 AM - 10:30 AM</TableCell>
              <TableCell>Sprint planning</TableCell>
              <TableCell>
                <Badge variant="outline">Online</Badge>
              </TableCell>
              <TableCell>
                <div className="relative flex -space-x-2 overflow-hidden">
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@maxleiter" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shuding_" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>August 18, 2024</TableCell>
              <TableCell>11:00 AM - 12:30 PM</TableCell>
              <TableCell>Retrospective</TableCell>
              <TableCell>
                <Badge variant="outline">Offline</Badge>
              </TableCell>
              <TableCell>
                <div className="relative flex -space-x-2 overflow-hidden">
                  <Avatar className="border-2 border-background">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="@jaredpalmer"
                    />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@maxleiter" />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shuding_" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt="@jaredpalmer"
                    />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
