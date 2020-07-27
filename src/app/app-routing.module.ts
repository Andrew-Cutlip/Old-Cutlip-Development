import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';
import {AboutComponent} from './about/about.component';
import {ResumeComponent} from './resume/resume.component'
import {ContactComponent} from './contact/contact.component'
import{PortfolioComponent} from './portfolio/portfolio.component'


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "skills", component: SkillsComponent },
  { path: "about", component: AboutComponent },
  { path: "resume", component: ResumeComponent },
  { path: "contact", component: ContactComponent },
  { path: "portfolio", component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
