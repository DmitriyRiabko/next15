import { Hello } from "@/components/hello";
import Link from "next/link";

export default function Home() {
  console.log("i am server/client");

  return (
    <>
      <Hello />
      <div>Hello</div>
      <Link className="text-red-400" href={'/about'}>go to about</Link>
    </>
  );
}
