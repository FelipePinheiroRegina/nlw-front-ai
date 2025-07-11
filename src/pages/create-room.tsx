import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type GetRoomsApiResponse = Array<{
  id: string
  name: string
}>

export function CreateRoom() {
  const { data: getRoomsData, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const data: GetRoomsApiResponse = await response.json()
      return data
    },
  })
  return (
    <div style={{ padding: 32 }}>
      {isLoading && <p>Loading...</p>}
      <ul style={{ listStyle: 'inside' }}>
        {getRoomsData?.map((room) => (
          <li key={room.id} style={{ textDecoration: 'underline' }}>
            <Link to={`/room/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
