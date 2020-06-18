import { Component, OnInit } from '@angular/core';

import { NavigationBarService } from '../shared/services/navigation-bar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  protected sectionTitle: string = '';
  public version = '8.0.0-rc.0';

  constructor(protected navigationService: NavigationBarService) {

  }

  ngOnInit() {
    this.navigationService.onTitleChange((title) => {
      this.sectionTitle = title;
    });
  }

}
