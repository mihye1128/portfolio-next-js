import type { PhilosophyItem as PhilosophyItemType } from "@/types";

interface PhilosophyItemProps {
  item: PhilosophyItemType;
}

export default function PhilosophyItem({ item }: PhilosophyItemProps) {
  return (
    <div className="grid gap-2">
      <p className="font-rajdhani text-orange-500">{item.number}</p>
      <h3 className="font-rajdhani text-xl font-bold">{item.title}</h3>
      <p className="text-sm leading-[1.75]">{item.description}</p>
    </div>
  );
}
