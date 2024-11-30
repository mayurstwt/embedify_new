import { CodeComparisonDemo } from "./beforeaftercode";
import Footer from "./footer";
import Hero from "./Hero";
import Howtouse from "./howtouse";
import { IconCloudDemo } from "./iconcloud";
import Navbar from "./navbar";
import FlickeringGrid from "./ui/flickering-grid";

export function FlickeringGridDemo() {
  return (
    <div className="relative rounded-lg w-full bg-background overflow-hidden">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={30}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />

      <Navbar/>
      <Hero/>
      <IconCloudDemo/>
      <CodeComparisonDemo/>
      <Howtouse/>
      <Footer/>
    </div>
  );
}
