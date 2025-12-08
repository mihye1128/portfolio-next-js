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
    <div className="bg-card rounded-xl border px-5 py-8 md:p-8 md:px-6">
      <div className="font-rajdhani mb-6 items-center md:flex md:gap-5">
        <Avatar className="mx-auto md:mx-0">
          <AvatarImage src="/images/profile/thumbnail.jpg" alt="" />
          <AvatarFallback>{profile.name}</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <p className="text-xl md:pl-[10px]">{profile.name}</p>
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
      <div className="grid gap-2 text-sm leading-[1.75]">
        {profile.description}
      </div>
    </div>
  );
}
