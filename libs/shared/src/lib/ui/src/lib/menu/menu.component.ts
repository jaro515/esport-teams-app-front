import { Component, input, InputSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '@my-app/shared';

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <ul class="flex flex-col mx-2 gap-6">
        @for (menu of menuItems(); track $index) {
        <li>
          <a
            class="flex justify-center w-full rounded px-4 py-3"
            routerLinkActive="bg-grey-600"
            [routerLink]="menu.path"
          >
            {{ menu.name }}
          </a>
        </li>
        }
      </ul>
    </nav>
  `,
  styles: ``,
})
export class MenuComponent {
  public menuItems: InputSignal<MenuItem[]> = input.required<MenuItem[]>();
}
