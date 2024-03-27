import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  cars: any[] = [];

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars(): void {
    this.http.get<any[]>('http://localhost:8080/api/car/list').subscribe(
      (response) => {
        this.cars = response;
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }


  goToEdit(id: number): void {
    this.router.navigate(['/edit', id]);
  }


  deleteCar(id: number): void {
    if (confirm('Are you sure you want to delete this car?')) {
      this.http.delete(`http://localhost:8080/api/car/delete/${id}`).subscribe(
        () => {
          // Remove the deleted car from the cars array
          this.cars = this.cars.filter(car => car.id !== id);
        },
        (error) => {
          console.error('Error deleting car:', error);
        }
      );
    }
  }

}
