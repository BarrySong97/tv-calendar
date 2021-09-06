import { request } from '@/.umi/plugin-request/request';
export interface reponse {
  top: Tv[];
}
export interface Tv {
  image_url: string;
  title: string;
  id: string;
}
export async function getNowPopularTVs() {
  return request<reponse>(`https://api.jikan.moe/v3/top/anime/1/airing`);
}
