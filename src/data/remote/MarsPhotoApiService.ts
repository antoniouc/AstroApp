import axios from "axios";
import { MarsPhoto } from "../../domain/entities/MarsPhoto";
import { API_NASA } from "../../core/Api";


export class MarsPhotoApiService {
  async getPhotos(rover: string, date: string, camera?: string): Promise<MarsPhoto[]> {

   
     const url = `${API_NASA.BASE_URL}${API_NASA.BASE_URL_MARS.replace("${rover}", rover)}`;
    const response = await axios.get(url, {
      params: {
        earth_date: date,
        camera,
        api_key: API_NASA.API_KEY,
      },
    });

    console.log("Response from MarsPhotoApiService:", response.data);
    return response.data.photos;
  }
}
