import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiX, SiFacebook, SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Rajdhani } from "next/font/google";
import { cn } from "@/lib/utils";

const rajdhani = Rajdhani({ weight: "400", subsets: ["latin"] });

export default function ProfileCard({
  profile,
}: {
  profile: {
    name: string;
    description: string | JSX.Element;
    sns?: {
      x?: string;
      facebook?: string;
      github?: string;
    };
  };
}) {
  return (
    <div className="rounded-xl border bg-card px-5 py-8 md:p-8 md:px-6">
      <div
        className={cn([
          rajdhani.className,
          "md:flex items-center md:gap-5 mb-6",
        ])}
      >
        <Avatar className="mx-auto md:mx-0">
          <AvatarImage src="/images/profile/thumbnail.jpg" alt="@shadcn" />
          <AvatarFallback>{profile.name}</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <p className="text-xl">{profile.name}</p>
          {profile.sns && (
            <div className="">
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
