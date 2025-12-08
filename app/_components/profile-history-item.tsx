import type { ProfileHistory } from "@/types";

interface ProfileHistoryItemProps {
  data: ProfileHistory;
}

export default function ProfileHistoryItem({ data }: ProfileHistoryItemProps) {
  return (
    <div className="grid grid-cols-[5em,1fr] border-b py-3 text-sm leading-[1.75]">
      <dt className="font-rajdhani">{data.title}</dt>
      <dd>{data.description}</dd>
    </div>
  );
}
