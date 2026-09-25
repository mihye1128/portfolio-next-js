import Hero from "./_components/hero";
import Profile from "./_components/profile";
import Skills from "./_components/skills";
import WhatIDo from "./_components/what-i-do";
import Works from "./_components/works";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <WhatIDo />
      <Works />
      <Skills />
      <Profile />
    </main>
  );
}
