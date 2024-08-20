"use client";

import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
  ClerkLoading,
  ClerkLoaded,
} from "@clerk/nextjs";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Button } from "~/components/ui/button";
import { Loader2 } from "lucide-react";
import { UploadButton, useUploadThing } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function NavMenu() {
  const router = useRouter();
  return (
    <header className="flex h-16 items-center justify-between border-b p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <SignedIn>
              <ClerkLoaded>
                <UploadButton
                  endpoint="documentUploader"
                  appearance={{
                    button:
                      "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-red-500 bg-none after:bg-orange-400",
                    container:
                      "w-max flex-row rounded-md border-cyan-300 bg-slate-800",
                    allowedContent:
                      "flex h-8 flex-col items-center justify-center px-2 text-white",
                  }}
                  onClientUploadComplete={() => {
                    toast.dismiss("upload-begin");
                    toast.success("Upload complete");
                    router.refresh();
                  }}
                  onUploadBegin={() => {
                    toast(
                      <div className="flex align-middle">
                        <div>
                          <Loader2 className="mx-2 h-4 w-4 animate-spin" />
                        </div>
                        <div>Uploading</div>
                      </div>,
                      { id: "upload-begin" },
                    );
                  }}
                  onUploadError={() => {
                    toast.dismiss("upload-begin");
                    toast.error("Upload failed");
                  }}
                />
              </ClerkLoaded>
            </SignedIn>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button variant="ghost" className="justify-center">
                <UserButton />
              </Button>
            </SignedIn>
            <ClerkLoading>
              <Button>
                <Loader2 className="h-6 w-7 animate-spin" />
              </Button>
            </ClerkLoading>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
