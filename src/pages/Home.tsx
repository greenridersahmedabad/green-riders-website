import {
  Users,
  Award,
  Bike,
} from "lucide-react";
import { homePage } from "../content/home-page";
import HeroCarousel from "./HeroCarousel";
import { stats } from "../content/stasts";
import { footer } from "../content/footer";
import QuoteSlider from "../components/QuoteSlider";


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={homePage.heroSection.slides} />

      {/* Stats */}
      <section className="py-16 bg-brand-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-4">
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
            </div>
          </div>
      </section>

      {/* Testimonials */}
      <QuoteSlider />

      {/* Join Us CTA */}
      <section className="py-16 bg-brand-200 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of a movement that combines the joy of cycling with
            environmental consciousness.
          </p>
          <a href={footer.joinUs.whatsappRedirect.url} target="_blank">
          <button className="bg-white text-brand-300 px-8 py-3 rounded-full font-semibold hover:bg-brand-50 transition-colors">
            Get Started Today
          </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
