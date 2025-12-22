import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router'; //

 

import { routes } from './app.routes'; // 👈 Import de votre fichier de routes
import { AComponent } from './a/a.component';
import { BComponent } from './a/b/b.component';
import { CComponent } from './a/b/c/c.component';
import { DComponent } from './a/b/c/d/d.component';
import { EComponent } from './a/b/c/d/e/e.component';

// Importez ici TOUS vos composants (ceux qui étaient KO)

@NgModule({
    declarations: [
        AppComponent,
        AComponent,
        BComponent,
        CComponent,
        DComponent,
         EComponent
    ],
    imports: [
        BrowserModule,
        //BComponent,
        // On initialise le routeur avec vos routes et le mode Hash (#) si besoin
        RouterModule.forRoot(routes, { useHash: true })
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
