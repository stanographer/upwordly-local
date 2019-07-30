import React from 'react';
import { useRouter } from 'next/router';

// Routes the user to the correct transcript.
// Still working on it.

export default function Transcript() {
  const router = useRouter();

  // router.push(`${router.query.user}/`);
  return (
    <>
      <h1>{}</h1>
      <h1>{router.query.id}</h1>
      <p>This is content.</p>
    </>
  );
}
