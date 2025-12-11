import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Arxiu} from '../arxiu/arxiu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Arxiu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DOM-Serveis');
}
