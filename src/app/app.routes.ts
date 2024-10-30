import { Routes } from '@angular/router';
import {ConnexionComponent} from './presentation/pages/connexion/connexion.component';
import {SidebarComponent} from './presentation/components/layout/sidebar/sidebar.component';
import {AjouterEleveComponent} from './presentation/components/shared/eleves/ajouter-eleve/ajouter-eleve.component';
import {ListerEleveComponent} from './presentation/components/shared/eleves/lister-eleve/lister-eleve.component';
import {ModifierEleveComponent} from './presentation/components/shared/eleves/modifier-eleve/modifier-eleve.component';
import {AjouterProfesseurComponent} from './presentation/components/shared/professeur/ajouter-professeur/ajouter-professeur.component';
import {ListerProfesseurComponent} from './presentation/components/shared/professeur/lister-professeur/lister-professeur.component';
import {ModifierProfesseurComponent} from './presentation/components/shared/professeur/modifier-professeur/modifier-professeur.component';
import {AjouterUtilisateurComponent} from './presentation/components/shared/utilisateur/ajouter-utilisateur/ajouter-utilisateur.component';
import {ListerUtilisateurComponent} from './presentation/components/shared/utilisateur/lister-utilisateur/lister-utilisateur.component';
import {ModifierUtilisateurComponent} from './presentation/components/shared/utilisateur/modifier-utilisateur/modifier-utilisateur.component';
import {HomeComponent} from './presentation/pages/home/home.component';

export const routes: Routes = [
  {path:"connexion",component:ConnexionComponent},
  {path:"",redirectTo:"/connexion", pathMatch:"full"},

  {path:"sidebar",component:SidebarComponent,children:
      [
        {path:"ajouter-eleve",component:AjouterEleveComponent},
        {path:"lister-eleve",component:ListerEleveComponent},
        {path:"modifier-eleve",component:ModifierEleveComponent},
        {path:"ajouter-professeur",component:AjouterProfesseurComponent},
        {path:"lister-professeur",component:ListerProfesseurComponent},
        {path:"modifier-professeur",component:ModifierProfesseurComponent},
        {path:"ajouter-utilisateur",component:AjouterUtilisateurComponent},
        {path:"lister-utilisateur",component:ListerUtilisateurComponent},
        {path:"modifier-utilisateur",component:ModifierUtilisateurComponent},
        {path:"home",component:HomeComponent},


      ]
  },
  {path:"",redirectTo:"/sidebar", pathMatch:"full"}


];
