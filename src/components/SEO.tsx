import { Helmet } from "react-helmet-async";
import { footer, whatsappNumber } from "../content/footer";

const SEO = () => {
  return (
    <Helmet>
      <title>Green Riders - Exploring Nature 🚴🌿</title>
      <meta
        name="description"
        content="Green Riders - Exploring Nature through eco-friendly cycling adventures. Join our community for sustainable rides and scenic routes."
      />
      <meta property="og:title" content="Green Riders - Exploring Nature" />
      <meta
        property="og:description"
        content="Experience adventure, sustainability, and nature-friendly cycling with Green Riders."
      />
      <meta
        name="keywords"
        content="Green Riders, GRGP, GRGP2025, cycling club, eco-friendly cycling, adventure cycling, Green Riders Ahmedabad"
      />
      <meta
        property="og:image"
        content="/public/images/logos/green-riders-logo.png"
      />
      <meta property="og:url" content="https://www.greenriders.org" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          name: "Green Riders",
          url: "https://www.greenriders.org",
          logo: "/public/images/logos/green-riders-logo.png",
          description:
            "Green Riders - Exploring Nature through eco-friendly cycling adventures. Join our community for sustainable rides and scenic routes.",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: `+${whatsappNumber}`,
            contactType: "customer service",
          },
          sameAs: [
            `${footer.section4.sl.instagram.link}`,
            `${footer.section4.sl.strava.link}`,
            `${footer.section4.sl.youtube.link}`,
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
