import HackatonCard from "../ui/hackaton-card"

interface HackathonCardProps {
  title: string;
  description: string;
  date: string;
  duration: string;
  location: string;
  teamSize: string;
}

// HackathonList component
export default function HackatonList() {
  const hackathons: HackathonCardProps[] = [
    {
      title: "Vercel Hackathon 2023",
      description: "Join us for an exciting 48-hour coding challenge!",
      date: "June 15-17, 2023",
      duration: "48 hours",
      location: "Online (Remote)",
      teamSize: "1-4 members",
    },
    {
      title: "Next.js Conf Hackathon",
      description: "Build the future of web applications with Next.js",
      date: "July 1-3, 2023",
      duration: "72 hours",
      location: "San Francisco, CA",
      teamSize: "2-5 members",
    },
    {
      title: "React Summit Hackathon",
      description: "Create innovative React applications",
      date: "August 10-12, 2023",
      duration: "48 hours",
      location: "Online (Remote)",
      teamSize: "1-3 members",
    },
    {
      title: "AI & Web Development Hackathon",
      description: "Integrate AI into web applications",
      date: "September 5-7, 2023",
      duration: "60 hours",
      location: "New York City, NY",
      teamSize: "2-4 members",
    },
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-foreground">Upcoming Hackathons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hackathons.map((hackathon, index) => (
          <HackatonCard
            key={index}
            name={hackathon.title}
            description={hackathon.description}
            startDate={hackathon.date}
            location={hackathon.location}
            endDate="June 17, 2023"
          />
        ))}
      </div>
    </div>
  );
}
