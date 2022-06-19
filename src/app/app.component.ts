import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'MENU_LABELS.PUBLIC_APIS',
      url: '/folder/Inbox',
      icon: 'rocket',
    },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(['en']);
    this.translateService.setDefaultLang('es');

    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/es|en/) ? browserLang : 'es');
  }
}
