import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Component({
  imports: [CommonModule, AppRoutingModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'lonely-components';
}
