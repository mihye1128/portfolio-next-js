import Hero from "./_components/hero";
import Profile from "./_components/profile";
import Skills from "./_components/skills";
import Works from "./_components/works";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Works />
      <Profile />
    </main>
  );
}
