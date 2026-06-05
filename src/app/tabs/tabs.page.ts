import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  user: any;  
  constructor(
    private auth:AuthService
  ) {

    this.auth.user$.subscribe(user=>{  
      this.user = user;
    })
  }

}
