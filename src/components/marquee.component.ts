
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full bg-red-600 text-black overflow-hidden py-3 font-mono text-lg font-bold border-y-2 border-black tracking-widest uppercase select-none">
      <div class="marquee-container">
        <div class="marquee-content">
          <span>{{ text() }} /// {{ text() }} /// {{ text() }} /// {{ text() }} /// {{ text() }} /// {{ text() }} ///</span>
          <span>{{ text() }} /// {{ text() }} /// {{ text() }} /// {{ text() }} /// {{ text() }} /// {{ text() }} ///</span>
        </div>
      </div>
    </div>
  `
})
export class MarqueeComponent {
  text = input.required<string>();
}
