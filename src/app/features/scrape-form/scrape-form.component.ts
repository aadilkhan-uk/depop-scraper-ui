import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormFieldComponent } from '../../shared/components/form-field/form-field.component';
import { createScrapeForm } from './utils/scrape-form-defintion';
import { formFields, FormFieldConfig } from './utils/scrape-form-config';

@Component({
  selector: 'app-scrape-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFieldComponent],
  templateUrl: './scrape-form.component.html',
  styleUrl: './scrape-form.component.css',
})
export class ScrapeFormComponent implements OnInit {
  form!: FormGroup;
  formFields: FormFieldConfig[] = formFields;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = createScrapeForm(this.fb);
  }

  onSubmit(): void {}

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    if (control?.errors) {
      if (control.errors['lettersOnly']) {
        return control.errors['lettersOnly'].message;
      }

      if (control.errors['maxlength']) {
        return `Max length for ${controlName} is ${control.errors['maxlength'].requiredLength} characters`;
      }

      if (control.errors['minlength']) {
        return `Min length for ${controlName} is ${control.errors['minlength'].requiredLength} characters`;
      }
    }
    return '';
  }
}
