import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scrape-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scrape-form.component.html',
  styleUrl: './scrape-form.component.css',
})
export class ScrapeFormComponent {}
