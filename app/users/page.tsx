import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const Page: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <ul>
        <li>
          <Link href={"/users/1"}>Go to User 1</Link>
        </li>
        <li>
          <Link href={"/users/2"}>Go to User 2</Link>
        </li>

        <li>
          <Link href={"/users/3"}>Go to User 3</Link>
        </li>
        <li>
          <Link href={"/users/4"}>Go to User 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
