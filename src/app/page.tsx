// export default function HomePage() {
//   return (
//     <main className="">
//       <div className="flex flex-wrap gap-4 text-wrap">Home Page WIP</div>
//     </main>
//   );
// }

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { HardHatIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Welcome to MemoMate!
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <HardHatIcon className="h-24 w-24 text-yellow-500" />
          <p className="text-center text-gray-600">
            Memo-mate is like a Dropbox for Markdown, enabling users to upload
            and share Markdown content seamlessly.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>
            <a
              target="_blank"
              href="https://github.com/nick-z-h/memo-mate/blob/main/README.md"
              rel="noopener noreferrer"
            >
              Details
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
