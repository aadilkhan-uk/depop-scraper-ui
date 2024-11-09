import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrapeFormComponent } from '../../../features/scrape-form/scrape-form.component';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CommonModule, ScrapeFormComponent, SectionTitleComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',
})
export class MainContainerComponent {}
