import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlImg = 'https://us.123rf.com/450wm/jovanas/jovanas1602/jovanas160202216/52371701-s%C3%ADmbolo-de-clima-caliente-y-la-lluvia.jpg';
  cuidad = '';
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  constructor(private _ClimaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima(){
    this.loading = true;
    //console.log(this.cuidad);
    this._ClimaService.getClima(this.cuidad).subscribe(data=>{
      //console.log(data);
      this.loading = false;
      this.temperatura = data.main.temp-273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
      this.query =  true;
    })
    
  }
}
