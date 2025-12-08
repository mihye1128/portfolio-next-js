import Hero from "./_components/hero";
import Works from "./_components/works";
import Profile from "./_components/profile";
import Skills from "./_components/skills";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Skills />
      <Works />
      <Profile />
    </main>
  );
}
