import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { siSteam, siDiscord } from "simple-icons";

export const metadata = {
  title: "Model Kit Story • Spooky Rabbits Studio",
};

export default function ModelKitStoryPage() {
  return (
    <div className="relative overflow-hidden py-16 w-full">
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/background.png"
          alt="Background Model Kit"
          className="w-full h-full object-cover object-center"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Gradient overlay from transparent top to black bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
      </div>
      <div className="space-y-4 text-center text-white drop-shadow-lg z-10 w-full px-4">
        <h1 className="text-3xl font-bold tracking-tight">Model Kit Story</h1>
        <p className="text-muted-foreground">Presentation coming soon.</p>
        <div className="max-w-4xl mx-auto">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/94y34EXB2L8?rel=0"
              title="Model Kit Story Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </AspectRatio>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xxxl" asChild>
              <a
                href="https://store.steampowered.com/app/APP_ID"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Steam page (new tab)"
                className="flex items-center gap-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-9"
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  fill="currentColor"
                >
                  <path d={siSteam.path} />
                </svg>
                Wishlist on Steam
              </a>
            </Button>
            <Button size="xxxl" asChild>
              <a
                href="https://discord.gg/INVITE_CODE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Discord server (new tab)"
                className="flex items-center gap-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-9"
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  fill="currentColor"
                >
                  <path d={siDiscord.path} />
                </svg>
                Join the Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
