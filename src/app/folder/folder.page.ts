import { PATHS } from './../core/constants/paths';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public readonly paths = PATHS;
  public readonly hashMapTranslations = {
    [this.paths.home]: 'MENU_LABELS.HOME',
    [this.paths.publicApis]: 'MENU_LABELS.PUBLIC_APIS',
  };

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
