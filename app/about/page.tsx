import React from 'react';

interface Props {
    className?: string;
}

const Page: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>about page</div>
  );
};



export default Page