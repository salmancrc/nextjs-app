import React from 'react';

const SingleArticlePage = async ({ params }) => {
  const ps = await params;

  console.log("ps: ", ps);
  return (
    <div>
      <h1>Article: </h1>
    </div>
  );
};

export default SingleArticlePage;

