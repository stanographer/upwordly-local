import React from 'react';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();

  return (
      <>
        <h1>{router.query.user}</h1>
        <p>This is the blog post content.</p>
      </>
  );
}