import Hero from "./_components/hero";
import Philosophy from "./_components/philosophy";
import Profile from "./_components/profile";
import Skills from "./_components/skills";
import Works from "./_components/works";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Philosophy />
      <Works />
      <Profile />
    </main>
  );
}
