import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
url = 'https://api.openweathermap.org/data/2.5/weather?appid=';
key = 'a5b14db3e904a7d7cb7299e7ba20e33f';
  constructor(private http: HttpClient ) { }
  
  getClima(cuidad: String): Observable<any>{
    const URL = this.url + this.key + "&q=" + cuidad;
    return this.http.get(URL);
  }
}
