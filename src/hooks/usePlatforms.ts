import platforms from "../data/platforms";
export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({data: platforms, error: null});
export default usePlatforms;
