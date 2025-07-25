import { useSanityData } from './useSanity';
import { homeBannerQuery, teamQuery, projectsQuery } from './queries';

export const useHomeBanner = () => {
  return useSanityData<{ media: any }>(homeBannerQuery);
};

export const useTeam = () => {
  return useSanityData<
    {
      _id: string;
      name: string;
      keyPoint: string;
      description: string;
      photo: any;
    }[]
  >(teamQuery);
};

export const useProjects = () => {
  return useSanityData<
    {
      _id: string;
      title: string;
      slug: { current: string };
      category: string;
      order: number;
      cover: any;
      gallery: any[];
    }[]
  >(projectsQuery);
};
