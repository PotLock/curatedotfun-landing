import {
  Bot,
  CalendarRange,
  Gift,
  Newspaper,
  Podcast,
  SatelliteDish,
  Workflow,
} from "lucide-react";
import { FaGlobeAmericas } from "react-icons/fa";
import CaseStudyCard from "./CaseStudyCard";

const caseStudiesData = [
  {
    href: "https://AmericanCrypto.Foundation",
    imageSrc: "/assets/images/communities/acf.jpg",
    imageAlt: "American Crypto Foundation",
    title: "American Crypto Foundation",
    description:
      "All new America x crypto news and policy updates, curated for the community",
    hashtag: "#usa",
    icon: <FaGlobeAmericas className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://t.me/cryptograntwire",
    imageSrc: "/assets/images/communities/cryptograntwire.svg",
    imageAlt: "Crypto Grant Wire",
    title: "Crypto Grant Wire",
    description: "Feed for Web3 grant opportunities and DAO governance updates",
    hashtag: "#grants",
    icon: <SatelliteDish className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://t.me/cryptofundraise",
    imageSrc: "/assets/images/communities/cryptofundraises.jpg",
    imageAlt: "Crypto Fundraising",
    title: "Crypto Fundraises",
    description: "Open database & API for crypto fundraising announcements",
    hashtag: "#fundraising",
    icon: <Gift className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://nearweek.com",
    imageSrc: "/assets/images/communities/nearweek.svg",
    imageAlt: "NEARWEEK",
    title: "NEARWEEK",
    description: "NEAR Protocol community digest and ecosystem updates",
    hashtag: "#near",
    icon: <CalendarRange className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://publicgoods.fm",
    imageSrc: "/assets/images/communities/publicgoodsfm.svg",
    imageAlt: "Public Goods FM",
    title: "Public Goods FM",
    description: "Public goods focused podcast and newsletter content",
    hashtag: "#publicgoods",
    icon: <Podcast className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://t.me/solana_digest",
    imageSrc: "/assets/images/communities/solana.jpg",
    imageAlt: "Solana Digest",
    title: "Solana Digest",
    description: "Solana ecosystem news and development updates",
    hashtag: "#solana",
    icon: <Workflow className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://stablecoins.press",
    imageSrc: "/assets/images/communities/StablecoinsPressLogo.png",
    imageAlt: "stablecoins.press",
    title: "stablecoins.press",
    description: "Premier stablecoin news and market analysis",
    hashtag: "#stablecoins",
    icon: <Newspaper className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://t.me/eigennews",
    imageSrc: "/assets/images/communities/EigenLayer.png",
    imageAlt: "Eigen News",
    title: "Eigen News",
    description: "Restaking news and EigenLayer ecosystem developments",
    hashtag: "#eigenlayer",
    icon: <Bot className="w-4 h-4 text-gray-400" />,
  },
];

export default function CaseStudies() {
  return (
    <section className="w-full bg-white">
      <div className="w-full mx-auto py-6 md:py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:items-start items-center mb-6 md:mb-8">
            <span className="inline-block px-4 py-2 rounded-full border border-black text-sm">
              CASE STUDIES
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center md:text-left max-w-[900px]">
            Discover How Leading Communities and Creators Streamline Their
            Workflows
          </h2>
        </div>
        <div className="w-full border-t border-black"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8 py-8 md:py-12">
            {caseStudiesData.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                href={caseStudy.href}
                imageSrc={caseStudy.imageSrc}
                imageAlt={caseStudy.imageAlt}
                title={caseStudy.title}
                description={caseStudy.description}
                hashtag={caseStudy.hashtag}
                icon={caseStudy.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border-t border-black"></div>
    </section>
  );
}
