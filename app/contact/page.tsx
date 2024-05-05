import type { Metadata } from "next";
import Section from "@/components/ui/section";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

const contents = {
  title: "Contact",
  content: {},
};

export default function Contact() {
  return (
    <Section title={contents.title}>
      <p className="text-center">準備中</p>
    </Section>
  );
}
