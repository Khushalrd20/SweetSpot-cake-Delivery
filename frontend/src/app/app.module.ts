import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        
        // HeaderComponent
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        
        
    ]
})
export class AppModule { }
