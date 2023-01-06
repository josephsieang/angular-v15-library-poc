import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JosephsieangNgxSpinnerModule } from 'josephsieang-ngx-spinner';

@Component({
  standalone: true,
  imports: [CommonModule, JosephsieangNgxSpinnerModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'showcase';
}
