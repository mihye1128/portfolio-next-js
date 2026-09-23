import Link from "next/link";
import type { Profile } from "@/types";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="profile-layout">
      <div className="profile-identity">
        <div className="profile-name">
          <div className="profile-name-row">
            <p className="profile-display-name">{profile.name}</p>
            {profile.sns?.github && (
              <Button variant="ghost" size="icon" asChild>
                <Link
                  aria-label="GitHub（新しいタブで開く）"
                  href={profile.sns.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SiGithub className="size-5" />
                </Link>
              </Button>
            )}
          </div>
          {profile.tagline && (
            <p className="profile-tagline text-muted-foreground">
              {profile.tagline.split(" / ").map((part, index, parts) => (
                <span key={index}>
                  {part}
                  {index < parts.length - 1 ? " /" : ""}
                  {index < parts.length - 1 && " "}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
      <div className="grid gap-10">
        {profile.highlights && profile.highlights.length > 0 && (
          <ul className="grid gap-6 sm:grid-cols-3">
            {profile.highlights.map((highlight) => (
              <li key={highlight.label}>
                <p className="mb-1 text-sm font-bold">{highlight.label}</p>
                <p className="text-muted-foreground text-xs leading-[1.75]">
                  {highlight.description}
                </p>
              </li>
            ))}
          </ul>
        )}
        <div className="grid gap-2 text-sm leading-loose">
          {profile.description}
        </div>
      </div>
    </div>
  );
}
