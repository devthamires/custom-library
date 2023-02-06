import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type TSide = 'left' | 'right' | 'bottom';
type TOrientation = 'left' | 'right' | 'bottom' | 'none';

@Component({
  selector: 'ui-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.4s ease-in', style({ opacity: 0 })),
      ]),
    ]),
    trigger('slideInOut', [
      transition('void => left', [
        style({ left: '-100%' }),
        animate('.4s ease-out', style({ left: 0 })),
      ]),
      transition('left => void', [
        style({ left: 0 }),
        animate('.3s ease-in', style({ left: '-100%' })),
      ]),
      transition('void => right', [
        style({ right: '-100%' }),
        animate('.4s ease-out', style({ right: 0 })),
      ]),
      transition('right => void', [
        style({ right: 0 }),
        animate('.3s ease-in', style({ right: '-100%' })),
      ]),
      transition('void => bottom', [
        style({ bottom: '-100%' }),
        animate('.4s ease-out', style({ bottom: 0 })),
      ]),
      transition('bottom => void', [
        style({ bottom: 0 }),
        animate('.3s ease-in', style({ bottom: '-100%' })),
      ]),
    ]),
  ],
})
export class PanelComponent {
  @Input() fullscreen = false;
  @Input() side: TSide = 'left';
  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Input() hasBackground: boolean;

  isActive = false;
  orientation: TOrientation;

  constructor() {
    this.orientation = 'none';
  }

  open() {
    this.isActive = true;
    this.orientation = this.side;
  }

  close() {
    this.isActive = false;
    this.orientation = 'none';
  }

  toggle() {
    this.isActive = !this.isActive;
    this.orientation = this.isActive ? this.side : 'none';
  }
}
