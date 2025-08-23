import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CaseStudyCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  hashtag: string;
  icon: ReactNode;
}

export default function CaseStudyCard({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  hashtag,
  icon,
}: CaseStudyCardProps) {
  return (
    <div className="group hover:bg-gray-50 hover:shadow transition-all duration-300 ease-in-out relative rounded-lg p-6 border border-gray-200">
      <Link
        href={href}
        target="_blank"
        className="flex flex-col justify-between h-full"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 fill-amber-400 opacity-5 -translate-y-1/2 w-full h-full [&_svg]:size-full">
          {icon}
        </div>
        <div className="flex items-center gap-3 mb-4 z-10 relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={48}
            height={48}
            className="rounded-full"
            unoptimized
          />
          <div className="flex items-center w-full gap-2">
            <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">
              {title}
            </h3>
            <ExternalLink className="shrink-0 ms-auto w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        </div>
        <p className="z-10 relative font-['PT_Root_UI'] text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#57606A] mb-4">
          {description}
        </p>
        <div className="z-10 relative flex items-center gap-2 mt-auto">
          <span className="inline-block px-3 py-1 bg-black text-white rounded-md text-sm">
            {hashtag}
          </span>
        </div>
      </Link>
    </div>
  );
}
