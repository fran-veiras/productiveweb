import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';

export default function PostPage(props) {
  const route = useRouter();

  const { id } = route.query;

  return <h1>hola {id}</h1>;
}
