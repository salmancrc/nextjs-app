import React from 'react';

const SingleArticlePage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h1>Article: {id}</h1>
    </div>
  );
};

export default SingleArticlePage;

