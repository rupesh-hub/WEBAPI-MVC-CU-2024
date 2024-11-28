import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _http: HttpClient = inject(HttpClient);
  private _baseURL: string = 'http://localhost:3000';

  constructor() {}

  public fetchMessage(): Observable<string | HttpErrorResponse> {
    return this._http.get<string | HttpErrorResponse>(`${this._baseURL}/test`);
  }

  public sendMessage(message: any): Observable<string | HttpErrorResponse> {
    let data = { message: message };
    
    return this._http.post<string | HttpErrorResponse>(
      `${this._baseURL}/test`,
      data
    );
  }

  //ng g s _service/weather --skip-tests --flat
}
