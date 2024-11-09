import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
  `,
  styles: [
    `
      .title {
        font-size: 1.875rem;
        font-weight: 600;
        color: #111827;
        margin-bottom: 0.5rem;
        letter-spacing: -0.025em;
      }
      .subtitle {
        font-size: 1rem;
        color: #6b7280;
        margin-bottom: 2rem;
      }
    `,
  ],
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
