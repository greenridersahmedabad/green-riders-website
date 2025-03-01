import React from "react";
import { Award, Heart, Users, Bike } from "lucide-react";
import { aboutUsPage } from "../content/about-us";
import { stats } from "../content/stasts";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${aboutUsPage.image}")`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">{aboutUsPage.title}</h1>
          <p className="text-xl max-w-2xl">{aboutUsPage.content}</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Green Riders was founded in 2022 by a group of passionate
                cyclists who believed in the power of two wheels to make a
                difference. What started as weekend rides with friends has grown
                into a movement of environmentally conscious cyclists.
              </p>
              <p className="text-gray-600">
                Today, we organize regular rides, workshops, and events that
                bring together cyclists of all levels while promoting
                sustainable transportation and environmental awareness.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-50 p-6 rounded-lg text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-brand-200" />
                <h3 className="text-2xl font-bold text-brand-200">
                  {stats.activeMembers.total}
                </h3>
                <p className="text-gray-600">{stats.activeMembers.title}</p>
              </div>
              <div className="bg-brand-50 p-6 rounded-lg text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-brand-200" />
                <h3 className="text-2xl font-bold text-brand-200">
                  {stats.ridesCompleted.total}
                </h3>
                <p className="text-gray-600">{stats.ridesCompleted.title}</p>
              </div>
              <div className="bg-brand-50 p-6 rounded-lg text-center">
                <Bike className="h-8 w-8 mx-auto mb-2 text-brand-200" />
                <h3 className="text-2xl font-bold text-brand-200">
                  {stats.kmsRidden.total}
                </h3>
                <p className="text-gray-600">{stats.kmsRidden.title}</p>
              </div>
              <div className="bg-brand-50 p-6 rounded-lg text-center">
                <Heart className="h-8 w-8 mx-auto mb-2 text-brand-200" />
                <h3 className="text-2xl font-bold text-brand-200">
                  {stats.eventHosted.total}
                </h3>
                <p className="text-gray-600">{stats.eventHosted.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Core Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutUsPage.coreTeam.members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <a
                    href={member.strava}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-500 hover:underline"
                  >

                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  </a>
                  <p className="text-brand-200 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-brand-200 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a beginner or an experienced cyclist, there's a place
            for you in our community.
          </p>
          <button className="bg-white text-brand-300 px-8 py-3 rounded-full font-semibold text-lg hover:bg-brand-50 transition-colors">
            Become a Member
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
