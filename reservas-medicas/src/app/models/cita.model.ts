export type EstadoCita = 'Programada' | 'Atendida' | 'Cancelada';

export interface Cita {
  id: number;
  paciente: string;
  especialidad: string;
  medico: string;
  fecha: string;
  hora: string;
  estado: EstadoCita;
}
