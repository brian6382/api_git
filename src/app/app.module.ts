import { RepoService } from './services/repo.service';
import { SearchrepoService } from './services/searchrepo.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RoutingModule } from '../routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { searchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import { ProfileComponent } from './profile/profile.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    searchComponent,
    ProfileComponent,
    DateCountPipe,
    HighlightDirective,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [UserService,
    RepoService, SearchrepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
