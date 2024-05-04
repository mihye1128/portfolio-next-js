import Hero from "./components/hero";
import Works from "./components/works";
import Profile from "./components/profile";
import Skills from "./components/skills";

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
