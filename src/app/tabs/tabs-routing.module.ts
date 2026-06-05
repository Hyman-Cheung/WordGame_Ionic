import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  { 
    path: '',                    //如果登入後要到達tabs，（2）這裡需要在path:裡取消'tabs' 
    component: TabsPage,
    children: [
      {
        path: 'tab1',                
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
       
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]                                     //如果登入後要到達tabs，（3）在這裡吧原來兩個的  {path: ''                  ， 取消一個
  },                                      //                                           , redirectTo: '/tabs/tab1'
 //                                                                                    , pathMatch: 'full'}                              
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
