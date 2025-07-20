import dayjs from 'dayjs'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRooms } from '@/http/use-rooms'
import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function RoomList() {
  const { data: getRoomsData, isLoading } = useRooms()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recents rooms</CardTitle>
        <CardDescription>
          Quick access to recently created rooms
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Loading rooms...</p>
        )}

        {getRoomsData?.map((room) => (
          <Link
            className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
            key={room.id}
            to={`/room/${room.id}`}
          >
            <div className="flex flex-1 flex-col gap-1">
              <h3 className="font-medium">{room.name}</h3>

              <div className="flex items-center gap-2">
                <Badge className="text-xs" variant="secondary">
                  {dayjs(room.createdAt).toNow()}
                </Badge>
                <Badge className="text-xs" variant="secondary">
                  {room.questionsCount} question(s)
                </Badge>
              </div>
            </div>

            <span className="flex items-center gap-1 text-sm">
              Enter
              <ArrowRight className="size-3" />
            </span>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
