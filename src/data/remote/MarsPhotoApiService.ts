import axios from "axios";
import { MarsPhoto } from "../../domain/entities/MarsPhoto";
import { API_NASA } from "../../core/Api";
import HttpClient from "../../core/AxiosSinggleton";


export class MarsPhotoApiService {

  private http = HttpClient.getInstance();
  async getPhotos(rover: string, date: string, camera?: string): Promise<MarsPhoto[]> {

   
     const url = `${API_NASA.BASE_URL}${API_NASA.BASE_URL_MARS.replace("${rover}", rover)}`;
    const response = await this.http.get(url, {
      params: {
        earth_date: date,
        camera,
       
      },
    });

    console.log("Response from MarsPhotoApiService:", response.data);
    return response.data.photos;
  }
}
