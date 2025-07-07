import { Hero } from "@/components/Hero";
import { WhyFirstRank } from "@/components/WhyFirstRank";
import { Content } from "@/components/Content";
import StoryOfArjun from "@/components/StoryOfArjun";

export default function Home() {
  return (
    <>
      <Hero />
      <StoryOfArjun />
      <WhyFirstRank />
      <Content />
    </>
  );
}
