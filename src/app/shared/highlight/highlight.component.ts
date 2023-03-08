import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'highlight-comp',
  styleUrls: ['highlight.component.scss'],
  templateUrl: 'highlight.component.html',
  inputs: [
    'templateContent: template-content',
    'templateType: template-type'
  ],
  encapsulation: ViewEncapsulation.None
})
export class HighlightComponent implements OnInit, OnDestroy {

  protected clipboard: any;
  templateContent: any;
  templateType: any;
  templateTypeArray: Array<string>;

  constructor(protected elRef: ElementRef) {
  }

  ngOnInit(): void {
    this.templateTypeArray = this.parseTemplateType();
  }
  parseTemplateType() {
    return [this.templateType === 'scss' ? 'css' : this.templateType];
  }

  showTooltip(elem, msg) {
    // TODO show tooltip (solve problem of repainting that does not show tooltip)
    alert('Copied!');
  }

  ngOnDestroy() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }

}
