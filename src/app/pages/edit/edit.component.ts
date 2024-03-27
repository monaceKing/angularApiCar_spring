import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  carId: number | undefined;
  car: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router:Router) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const carId = params['id']; // Obtenez l'ID de la voiture à partir des paramètres de l'URL
      this.getCarDetails(carId); // Appelez la méthode pour obtenir les détails de la voiture
    });
  }

  getCarDetails(id: number): void {
    this.http.get<any>('http://localhost:8080/api/car/find/' + id).subscribe(
      (response) => {
        this.car = response;
      },
      (error) => {
        console.error('Error fetching car details:', error);
      }
    );
  }

  updateCar(): void {
    this.http.put(`http://localhost:8080/api/car/update`, this.car).subscribe(
      () => {
        this.router.navigate(['/home']);
        console.log('Car updated successfully');
        // Peut-être rediriger vers une autre page ou afficher un message de confirmation
      },
      (error) => {
        console.error('Error updating car:', error);
      }
    );
  }

}
