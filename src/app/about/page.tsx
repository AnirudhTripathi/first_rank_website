import Image from "next/image";
import { Users, BookOpen, Target, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "10,000+", label: "Students" },
    { icon: <BookOpen className="h-8 w-8" />, number: "100+", label: "Courses" },
    { icon: <Target className="h-8 w-8" />, number: "95%", label: "Success Rate" },
    { icon: <Award className="h-8 w-8" />, number: "50+", label: "Expert Tutors" },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "/Images/team1.jpg",
      bio: "Education technology expert with 10+ years of experience in e-learning solutions."
    },
    {
      name: "Sarah Williams",
      role: "Head of Education",
      image: "/Images/team2.jpg",
      bio: "Former university professor passionate about making education accessible to all."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/Images/team3.jpg",
      bio: "Tech visionary with expertise in building scalable learning platforms."
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Empowering the Next Generation of Learners
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At First Rank, we believe that everyone deserves access to quality education, 
              regardless of their background or location.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Founded in 2023, First Rank began as a small team of educators and technologists 
                who saw the need for more personalized, engaging learning experiences in the digital age.
              </p>
              <p className="mb-6">
                What started as a passion project has grown into a platform that serves thousands of 
                students worldwide, helping them achieve their academic and professional goals through 
                innovative learning solutions.
              </p>
              <p>
                Today, we continue to push the boundaries of educational technology, constantly 
                improving our platform to provide the best possible learning experience for our users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 relative">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-0" // Placeholder for actual images
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Learning Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to start your learning journey with First Rank?
          </p>
          <a 
            href="/pricing" 
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-300"
          >
            View Plans
          </a>
        </div>
      </section>
    </div>
  );
}
