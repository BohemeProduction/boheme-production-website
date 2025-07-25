export const homeBannerQuery = `*[_type == "homeBanner"][0]{
  media
}`;

export const teamQuery = `*[_type == "teamMember"]{
  _id,
  name,
  keyPoint,
  description,
  "photo": photo.asset->url
}`;

export const projectsQuery = `*[_type == "project"] | order(order asc){
  _id,
  title,
  slug,
  category,
  order,
  "cover": coverImage.asset->url,
  "gallery": gallery[].asset->url,
  videos[] {
    title,
    url
  }
}`;
