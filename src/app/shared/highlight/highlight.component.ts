import { Component, ElementRef } from '@angular/core';

import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'highlight-comp',
  moduleId: module.id,
  styleUrls: ['highlight.component.css'],
  templateUrl: 'highlight.component.html',
  inputs: [
    'templateContent: template-content',
    'templateType: template-type'
  ]
})
export class HighlightComponent {

  protected templateContent: string = '';
  protected templateType: string = '';

  constructor(protected elRef: ElementRef,
    protected service : HighlightJsService) {

  }

  // ngOnInit() {
  //   this.sampleContent = `
  //     <o-button class="highlight" attr="flat" type="FLAT" label="FLAT" layout-padding></o-button>
  //     <o-button attr="raised" type="RAISED" label="RAISED" layout-padding></o-button>
  //     <o-button attr="floating" type="FLOATING" icon="add" layout-padding></o-button>`;
  // }

  // ngAfterViewInit() {
  //   let code = this.elRef.nativeElement.querySelector('code.highlight');
  //   //  this.service.highlight(code);
  //   }


}
