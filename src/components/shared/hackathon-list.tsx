import api from '@/api';
import { Hackathon, HackathonStatus } from '@/types';
import HackathonCard from './hackathon-card';
import PageContainer from '../layout/page-container';

interface HackathonListProps {
  hackathons: Hackathon[];
}

export default async function HackatonList(props: HackathonListProps) {
  const hackatons = await api.hackatons.getAllHackathons();
  return (
    <PageContainer>
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        Upcoming hackathons
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hackatons.map((hackathon, index) => (
          <HackathonCard key={index} {...hackathon} />
        ))}
      </div>
    </PageContainer>
  );
}
