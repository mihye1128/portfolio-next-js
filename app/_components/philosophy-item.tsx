import type { PhilosophyItem as PhilosophyItemType } from "@/types";

export default function PhilosophyItem({ item }: { item: PhilosophyItemType }) {
  return (
    <div className="philosophy-item">
      <span className="philosophy-number">{item.number}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}
