import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from "./components/header/header.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, HeaderModule]
})
export class AppComponent {
  title = 'pointofsale';
}
