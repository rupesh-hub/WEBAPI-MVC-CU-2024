import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './_service/weather.service';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private _weatherService: WeatherService = inject(WeatherService);
  protected message: string;
  protected data: any;

  ngOnInit(): void {
    this._weatherService.fetchMessage().subscribe({
      next: (response: string) => {
        console.log(response);
        this.data = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
      complete: () => {
        console.log('Backend api fetch success');
      },
    });
  }

  public sendMessage(): void {
    this._weatherService.sendMessage(this.message).subscribe({
      next: (response: string) => {
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
      complete: () => {
        console.log('Backend api fetch success');
      },
    });
  }
}
