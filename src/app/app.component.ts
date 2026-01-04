import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { LoaderService } from './services';
import { LoaderComponent, HeaderComponent, FooterComponent } from './components';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App implements OnInit {
  isLoading!: Observable<boolean>;
  protected readonly title = signal('taxyo');

  constructor(
    // private loaderService: LoaderService
  ) {}

  ngOnInit() {
    // this.isLoading = this.loaderService.isLoading$;
  }
}
