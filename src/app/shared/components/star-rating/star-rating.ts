// shared/components/star-rating/star-rating.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule],
  template: `
    <div class="flex items-center space-x-0.5">
      <svg
        *ngFor="let star of stars"
        class="w-6 h-6"
        [class.text-yellow-400]="star.filled"
        [class.text-gray-300]="!star.filled"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 15l-1.183-3.653L5.5 10.5l3.317-.047L10 6.5l1.183 3.953 3.317.047-2.317 1.847.683 3.653L10 15z"
        />
      </svg>
      <span class="ml-1 text-sm text-white">{{ rating | number : '1.1-1' }}</span>
    </div>
  `,
})
export class StarRatingComponent {
  @Input() rating!: number;

  get stars() {
    const clamp = Math.min(Math.max(this.rating, 0), 10); // 0-10
    const total = clamp; // 0-10 estrellas
    return Array(10)
      .fill(0)
      .map((_, i) => ({
        filled: i < total,
      }));
  }
}
