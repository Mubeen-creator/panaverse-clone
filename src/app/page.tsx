import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import ProgramOutcome from "@/components/widgets/ProgramOutcome";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";


export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Core Track Section */}
        <CoreTracks />
        {/* Specialized Track */}
        <SpecializedTracks />
        {/* Outcome sections */}
        <ProgramOutcome />
      </main>
    </>
  );
}
