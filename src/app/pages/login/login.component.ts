import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../models/car';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

newCar : Car;

constructor(private http : HttpClient){
  this.newCar = new Car();
}

  onCar(){
    debugger;
    this.http.post('http://localhost:8080/api/car/create', this.newCar).subscribe((res:any)=>{
      if (res) {
        alert("voiture ajoutée avec succès")
      }
    })
  }

}


// "node_modules/bootstrap/dist/css/bootstrap.min.css",
