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
    href: "https://nearweek.com",
    imageSrc: "/assets/images/communities/nearweek.svg",
    imageAlt: "NEARWEEK",
    title: "NEARWEEK",
    description: "NEAR Protocol community digest and ecosystem updates",
    hashtag: "#near",
    icon: <CalendarRange className="w-4 h-4 text-gray-400" />,
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
    href: "https://t.me/abstractionnews",
    imageSrc: "/assets/images/communities/abstraction.jpg",
    imageAlt: "Abstraction News",
    title: "Chain Abstraction",
    description: "News on everything chain abstraction",
    hashtag: "#chainabstraction",
    icon: <Podcast className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://t.me/desciunderground",
    imageSrc: "/assets/images/communities/desciunderground.jpg",
    imageAlt: "DeSci Underground",
    title: "DeSci Underground",
    description: "The Hub for everything Decentralized Science by DeSci Underground",
    hashtag: "#desci",
    icon: <Podcast className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://t.me/networkstatenews",
    imageSrc: "/assets/images/communities/networkstatenews.jpg",
    imageAlt: "Network State News",
    title: "Network State News",
    description: "Network states, popup cities, builder residencies; events, thought leaderships, policy updates, new communities, new tools.",
    hashtag: "#networkstate",
    icon: <Podcast className="w-4 h-4 text-gray-400" />,
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
    href: "https://t.me/open_social",
    imageSrc: "/assets/images/communities/opensocial.jpg",
    imageAlt: "Open Social",
    title: "Open Social",
    description: "The feed for everything decentralized social, social graphs, open socials, socialFI + more",
    hashtag: "#web3social",
    icon: <Gift className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://t.me/howtodaonews",
    imageSrc: "/assets/images/communities/howtodao.jpg",
    imageAlt: "How to DAO news",
    title: "How to DAO News",
    description: "The central hub for all DAO related news by How2DAO",
    hashtag: "#dao",
    icon: <Podcast className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://t.me/daily_sui",
    imageSrc: "/assets/images/communities/dailysui.jpg",
    imageAlt: "Daily Sui",
    title: "Daily Sui",
    description: "All news around Sui (layer 1 blockchain's) ecosystem.",
    hashtag: "#sui",
    icon: <Podcast className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://t.me/celo_news",
    imageSrc: "/assets/images/communities/celo.jpg",
    imageAlt: "Celo news",
    title: "Celo News",
    description: "All news around Celo (Eth-l2) blockchain's ecosystem",
    hashtag: "#celo",
    icon: <Podcast className="w-4 h-4 text-gray-400" />,
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
    href: "https://t.me/based_reporter",
    imageSrc: "/assets/images/communities/basedreporter.jpg",
    imageAlt: "Based Reporter",
    title: "Based Reporter",
    description: "The #1 reporter on Base's l2 Ecosystem. builder updates, product updates, ecosystem news, and so much more",
    hashtag: "#base",
    icon: <Gift className="w-4 h-4 text-gray-400" />,
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
    href: "https://t.me/arbitrumintern",
    imageSrc: "/assets/images/communities/arbitrumintern.jpg",
    imageAlt: "Arbitrum Intern",
    title: "Arbitrum Intern",
    description: "The #1 reporter on Arbitrum's l2 Ecosystem. builder updates, product updates, ecosystem news, and so much more",
    hashtag: "#arbitrum",
    icon: <Gift className="w-4 h-4 text-gray-400" />,
  },
  {
    href: "https://t.me/monadpress",
    imageSrc: "/assets/images/communities/monadpress.jpg",
    imageAlt: "Monad Press",
    title: "Monad Press",
    description: "Curated Updates from Monad Ecosystem",
    hashtag: "#monad",
    icon: <Gift className="w-4 h-4 text-gray-400" />,
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
