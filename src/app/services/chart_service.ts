import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private baseUrl = 'https://candv-back.onrender.com';
  constructor(private http: HttpClient) { }

  getCategoryRevenue(): Observable<any> {
    const endpoint = `${this.baseUrl}/category-revenue`;  // Construct the URL
    console.log(`Fetching category revenue from: ${endpoint}`);  // Log the URL
    return this.http.get<any>(endpoint);
  }
  getMonthlyRevenue(): Observable<any>{
    const endpoint = `${this.baseUrl}/monthly-revenue`;  // Construct the URL
    console.log(`Fetching category revenue from: ${endpoint}`);  // Log the URL
    return this.http.get<any>(endpoint);
  }
  getAveragePerPerson(year: string, month: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/average_per_person/${year}/${month}`);
}

  getAveragePerTicket(year: string, month: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/averare_per_order/${year}/${month}`);
}
}
