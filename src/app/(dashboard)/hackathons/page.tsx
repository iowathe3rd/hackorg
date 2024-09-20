import api from '@/api';
import HackatonList from '@/components/shared/hackathon-list';

export default async function HackathonsPage() {
  const hackathons = await api.hackatons.getAllHackathons();

  console.log(hackathons);

  return <HackatonList hackathons={hackathons} />;
}
