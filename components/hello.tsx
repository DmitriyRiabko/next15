"use client";

interface Props {
  className?: string;
}

export const Hello: React.FC<Props> = ({ className }) => {
  console.log("i am client");

  return <div className={className}>i am client</div>;
};
