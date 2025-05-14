import { EarthAsset } from "../../domain/entities/EarthAsset";

export const earthAssetFactory = (data: any): EarthAsset => ({
  id: `${data.lat}-${data.lon}-${data.date}`,
  date: data.date,
  url: data.url,
  lat: data.lat,
  lon: data.lon,
});
