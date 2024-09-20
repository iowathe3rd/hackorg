'use client';
import React, { useEffect, useState } from 'react';
import { TeamsApi } from '@/api/teams';
import { Heading } from '@/components/ui/heading';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { GetTeamDto } from '@/api/dto/teams';

export default function Page() {
  const [teams, setTeams] = useState<GetTeamDto[]>([]);
  const [loading, setLoading] = useState(true);
  const teamsApi = new TeamsApi();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamsData = await teamsApi.findAll();
        setTeams(teamsData);
      } catch (error) {
        console.error('Ошибка при получении данных команд:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <Heading title={`Рейтинг команд`} description="" />
      <div className="ml-30">
        {teams.map((team, index) => (
          <Card key={team.id} className="mb-5">
            <CardTitle className="w-68 pl-15 mt-5 h-24 rounded-lg bg-white text-lg font-bold text-purple-600 shadow-md">
              <CardDescription className="text-6xl text-orange-500">
                {index + 1}
              </CardDescription>
              {team.name}
              <CardDescription>
                Количество командных побед: {team.teamWins || 0}
              </CardDescription>
              <CardDescription>
                Количество персональных побед: {team.personalWins || 0}
              </CardDescription>
            </CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
}
