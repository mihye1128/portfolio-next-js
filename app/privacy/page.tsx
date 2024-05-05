import type { Metadata } from "next";
import Section from "@/components/ui/section";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

const contents = {
  title: "Privacy policy",
  content: {},
};

export default function Privacy() {
  return (
    <Section title={contents.title}>
      <p className="text-center">準備中</p>
    </Section>
  );
}
