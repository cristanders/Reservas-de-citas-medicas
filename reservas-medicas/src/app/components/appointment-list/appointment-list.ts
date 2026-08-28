import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cita } from '../../models/cita.model';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-list.html',
styleUrl: './appointment-list.css'
})
export class AppointmentListComponent implements OnInit {
  citas: Cita[] = [];

  ngOnInit(): void {
    this.citas = [
      {
        id: 1,
        paciente: 'Ana López',
        especialidad: 'Pediatría',
        medico: 'Dr. Ramírez',
        fecha: '2026-09-02',
        hora: '09:00',
        estado: 'Programada'
      },
      {
        id: 2,
        paciente: 'Carlos Pérez',
        especialidad: 'Cardiología',
        medico: 'Dra. Gómez',
        fecha: '2026-08-30',
        hora: '11:30',
        estado: 'Atendida'
      }
    ];
  }

  editarCita(cita: Cita): void {
  }

  confirmarEliminar(cita: Cita): void {
  }
}