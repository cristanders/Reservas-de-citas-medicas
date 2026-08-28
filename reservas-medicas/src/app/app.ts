import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './feature/formulario/formulario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormularioComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'reservas-medicas';
}