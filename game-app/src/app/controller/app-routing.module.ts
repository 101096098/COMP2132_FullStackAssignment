import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';

import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';

//bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Components
import { HeaderComponent } from '../component/header/header.component';
import { PlayerListComponent } from '../component/player-list/player-list.component';
import { AdminloginComponent } from '../component/adminlogin/adminlogin.component';
import { MainpageComponent} from '../component/mainpage/mainpage.component';
import { AdminAddplayerComponent} from '../component/admin-addplayer/admin-addplayer.component';
import { AdminEditplayerComponent} from '../component/admin-editplayer/admin-editplayer.component';
import { AdminGamelistComponent} from'../component/admin-gamelist/admin-gamelist.component';
import { AdminPlayerlistComponent} from '../component/admin-playerlist/admin-playerlist.component';
import {PlayerDetailsComponent} from '../component/player-details/player-details.component';


//Guard
import { AdminGuard } from '../component/adminlogin/adminlogin.guard';

const appRoutes: Routes=[
  
{path: "",  redirectTo:'app-root', pathMatch:'full'},
{path: "adminlogin", component: AdminloginComponent},
{path:'mainpage' ,component: MainpageComponent },
{path:'player-list', component: PlayerListComponent},
//{path:'admin-addplayer',canActivate:[AdminGuard],  component:AdminAddplayerComponent},
//{path:'admin-editplayer',canActivate:[AdminGuard],  component:AdminEditplayerComponent},
//{path:'admingamelist', canActivate:[AdminGuard], component:AdminGamelistComponent},
//{path: 'admin-playerlist', canActivate:[AdminGuard], component: AdminPlayerlistComponent},
{path: 'players/:id', component: PlayerDetailsComponent},
//{path: 'editplayers/:id', canActivate:[AdminGuard], component: AdminEditplayerComponent}*/

{path:'admin-addplayer',  component:AdminAddplayerComponent},
{path:'admin-editplayer/:id',  component:AdminEditplayerComponent},
{path:'admingamelist',  component:AdminGamelistComponent},
{path: 'admin-playerlist',  component: AdminPlayerlistComponent},
{path: 'editplayers/:id', component: AdminEditplayerComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }