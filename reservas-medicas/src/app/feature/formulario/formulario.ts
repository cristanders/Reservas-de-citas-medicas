import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class FormularioComponent implements OnInit {
  citaForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.citaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      dpi: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      especialidad: ['', Validators.required],
      medico: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      motivo: ['', [Validators.required, Validators.maxLength(250)]],
      primeraConsulta: [true, Validators.required]
    });
  }

  get f() {
    return this.citaForm.controls;
  }

  get motivoLength(): number {
    return this.citaForm.get('motivo')?.value?.length || 0;
  }

  onSubmit(): void {
    if (this.citaForm.invalid) {
      this.citaForm.markAllAsTouched();
      return;
    }
    console.log('Formulario válido:', this.citaForm.value);
  }
}