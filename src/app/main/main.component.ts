import { Component, OnInit } from '@angular/core';

import { NavigationBarService } from '../shared/services/navigation-bar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  protected sectionTitle: string = '';

  constructor(protected navigationService: NavigationBarService) {

  }

  ngOnInit() {
    this.navigationService.onTitleChange((title) => {
      this.sectionTitle = title;
    });
  }

}
