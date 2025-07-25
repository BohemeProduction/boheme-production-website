import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '1p5oz6cl',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false, // false pour utiliser le token et avoir les données à jour
  token: import.meta.env.VITE_SANITY_API_TOKEN,
});
