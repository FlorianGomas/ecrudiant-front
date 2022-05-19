import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CarteComponent } from './carte/carte.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FooterComponent } from './footer/footer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AnnuaireComponent,
    EtudiantComponent,
    FormulaireComponent,
    RechercheComponent,
    CarteComponent,
    EditFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
