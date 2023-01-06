import { Component, Input, SimpleChanges } from '@angular/core';
import { NgxSpinnerService, Size } from 'ngx-spinner';

@Component({
  selector: 'josephsieang-ngx-spinner',
  template: `
    <!-- For fullScreen: false, please add position: relative to its parent -->
    <ngx-spinner
      [bdColor]="bdColor"
      [size]="size"
      [color]="color"
      [type]="type"
      [fullScreen]="fullScreen"
      [name]="name"
    >
    </ngx-spinner>
  `,
  styles: [],
})
export class JosephsieangNgxSpinnerComponent {
  @Input() bdColor: string = 'rgba(0,0,0,0.4)';
  @Input() size: Size = 'large';
  @Input() color: string = '#fff';
  @Input() type: string = 'ball-scale';
  @Input() fullScreen: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() name: string = 'loader';

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const { isLoading } = changes;

    if (isLoading && isLoading.currentValue) {
      this.show();
    } else {
      this.hide();
    }
  }

  private show(): void {
    this.spinner.show(this.name);
  }

  private hide(): void {
    this.spinner.hide(this.name);
  }
}
