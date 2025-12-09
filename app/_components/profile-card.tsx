import Link from "next/link";
import type { Profile } from "@/types";
import { SiFacebook, SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-card rounded-xl border px-5 py-8 md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-6 md:py-8 md:pr-16 md:pl-8">
      <div className="font-rajdhani mb-6 items-center md:mb-0 md:min-w-56">
        <Avatar className="mx-auto mb-3">
          <AvatarImage src="/images/profile/thumbnail.jpg" alt="" />
          <AvatarFallback>{profile.name}</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <p className="text-xl">{profile.name}</p>
          {profile.sns && (
            <div>
              {profile.sns?.x && (
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href={profile.sns.x}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SiX className="size-5" />
                  </Link>
                </Button>
              )}
              {profile.sns?.facebook && (
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href={profile.sns.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SiFacebook className="size-5" />
                  </Link>
                </Button>
              )}
              {profile.sns?.github && (
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href={profile.sns.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SiGithub className="size-5" />
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="grid gap-2 text-sm leading-loose">
        {profile.description}
      </div>
    </div>
  );
}
