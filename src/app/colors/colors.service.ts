import { Injectable } from '@angular/core';
import { Color } from './model/color';
import { HttpClient } from '@angular/common/http';
import { ColorsListResponse } from './model/color-list-response';
import { SingleColorResponse } from './model/single-color-response';

const COLOR = [{
  id: 1,
  name: 'red',
  color: '#ff5733',
  year: 1990
}, {
  id: 2,
  name: 'green',
  color: '#00c853',
  year: 1991
}]

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  private static readonly API_URL = 'https://reqres.in/api/colors';

  constructor(private httpClient: HttpClient) { }

  public async getColors(): Promise<Color[]> {
    const response = await this.httpClient.get<ColorsListResponse>(ColorsService.API_URL).toPromise();
    return response.data;
  }

  public async getSingleColor(id: number): Promise<Color> {
    //return COLOR.filter((color: Color) => id === color.id)[0];
    const response = await this.httpClient.get<SingleColorResponse>(`${ColorsService.API_URL}/${id}`).toPromise();
    return response.data;
  }
}
