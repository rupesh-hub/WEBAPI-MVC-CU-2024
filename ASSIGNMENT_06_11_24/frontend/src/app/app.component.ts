import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private url: string = 'http://localhost:3000/test';

  public response: any = '';

  constructor(private http: HttpClient) {}

  private connectToBackend(): Observable<string | HttpErrorResponse> {
    return this.http.get<string>(this.url);
  }

  ngOnInit(): void {
    this.connectToBackend().subscribe({
      next: (res) => {
        this.response = res;
      },
    });
  }
}
