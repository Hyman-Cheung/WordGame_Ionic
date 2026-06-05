import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  },  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',                 //如果登入後要到達tabs，（1）這裡需要在path:裡添加'tabs' ，然後到tabs-routing.module.ts操作
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q1',
    loadChildren: () => import('./q1/q1.module').then( m => m.Q1PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q2',
    loadChildren: () => import('./q2/q2.module').then( m => m.Q2PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q3',
    loadChildren: () => import('./q3/q3.module').then( m => m.Q3PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q4',
    loadChildren: () => import('./q4/q4.module').then( m => m.Q4PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q5',
    loadChildren: () => import('./q5/q5.module').then( m => m.Q5PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q6',
    loadChildren: () => import('./q6/q6.module').then( m => m.Q6PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q7',
    loadChildren: () => import('./q7/q7.module').then( m => m.Q7PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q8',
    loadChildren: () => import('./q8/q8.module').then( m => m.Q8PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q9',
    loadChildren: () => import('./q9/q9.module').then( m => m.Q9PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q10',
    loadChildren: () => import('./q10/q10.module').then( m => m.Q10PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q11',
    loadChildren: () => import('./q11/q11.module').then( m => m.Q11PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q12',
    loadChildren: () => import('./q12/q12.module').then( m => m.Q12PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q13',
    loadChildren: () => import('./q13/q13.module').then( m => m.Q13PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q14',
    loadChildren: () => import('./q14/q14.module').then( m => m.Q14PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q15',
    loadChildren: () => import('./q15/q15.module').then( m => m.Q15PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q16',
    loadChildren: () => import('./q16/q16.module').then( m => m.Q16PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q17',
    loadChildren: () => import('./q17/q17.module').then( m => m.Q17PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q18',
    loadChildren: () => import('./q18/q18.module').then( m => m.Q18PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q19',
    loadChildren: () => import('./q19/q19.module').then( m => m.Q19PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'q20',
    loadChildren: () => import('./q20/q20.module').then( m => m.Q20PageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
