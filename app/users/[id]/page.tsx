import React from "react";

const Page = ({ params }: { params: { id: Promise<string> } }) => {
//   const userId = await params.id;

  return <div>{params.id}</div>;
};

export default Page;
