import { useEffect, useState } from 'react';
import { client } from './sanity.client';

export function useSanityData<T>(query: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    client.fetch(query).then(setData);
  }, [query]);

  return data;
}
