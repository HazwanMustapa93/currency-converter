import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LayoutMode } from './../../../infras/layout-mode';
import { LayoutService } from './../../../services/layout.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  layoutMode: LayoutMode = 'NORMAL';

  constructor(private layoutService: LayoutService) {
    this.layoutService.layoutModeEventEmitter.subscribe(mode => {
      this.layoutMode = mode;
    });
  }

  ngOnInit() {
  }

}
