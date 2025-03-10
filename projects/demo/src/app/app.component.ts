import { Component } from '@angular/core';
import { GithubService } from './core/services/github.service';
import { Observable } from 'rxjs';
import { IconsComponent } from './shared/components/icons/icons.component';
import { RouterModule } from '@angular/router';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe,
    CommonModule,
    IconsComponent,
    // JsonPipe,
    RouterModule
  ],
  providers: [
    GithubService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  repos$: Observable<any>
  this_repo$: Observable<any>
  user$: Observable<any>

  show_settings: boolean = false
  name: string = ''
  version: string = '0.0.1'
  
  constructor(private githubService: GithubService) {
    this.repos$ = this.githubService.repos$
    this.this_repo$ = this.githubService.this_repo$
    this.user$ = this.githubService.user$

    this.name = this.githubService.getThisRepo()
    this.version = this.githubService.getVersion()
  }

  toggleSettings() {
    this.show_settings = !this.show_settings
  }
  toggleTheme() {
    this.toggleSettings()
  }
}
