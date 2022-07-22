import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsGoalkeepersComponent } from './components/cards/cards-goalkeepers/cards-goalkeepers.component';
import { CardsFieldPlayersComponent } from './components/cards/cards-field-players/cards-field-players.component';
import { CardCoachComponent } from './components/cards/card-coach/card-coach.component';
import { TeamComponent } from './components/team/team.component';
import { GoalkeepersDetailsComponent } from './components/details/goalkeepers-details/goalkeepers-details.component';
import { FieldPlayersDetailsComponent } from './components/details/field-players-details/field-players-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardsGoalkeepersComponent,
    CardsFieldPlayersComponent,
    CardCoachComponent,
    TeamComponent,
    GoalkeepersDetailsComponent,
    FieldPlayersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}