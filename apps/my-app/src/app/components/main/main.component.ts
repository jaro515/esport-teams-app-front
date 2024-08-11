import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuComponent } from '@my-app/menu';
import { MenuItem, User } from '@my-app/shared';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    MenuComponent,
    RouterModule,
  ],
})
export class MainComponent {
  private readonly _breakpointObserver: BreakpointObserver =
    inject(BreakpointObserver);

  public loggedUser$: Observable<User> = of({ id: null, name: null }); //TODO: Pobierać zalogowanego usera
  public isHandset$: Observable<boolean> = this._breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  public templogged: boolean = false;
  public menuItems: MenuItem[] = [{ path: 'test', name: 'test' }];

  public get isUserLoggedIn(): boolean {
    return this.templogged;
  }

  public onLogout() {
    this.templogged = false;
    this.loggedUser$ = of({ id: null, name: null });
  }
}
