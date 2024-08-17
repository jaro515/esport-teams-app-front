import { Component, inject, signal, WritableSignal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatButtonModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  private readonly _formBuilder = inject(FormBuilder);

  public hide: WritableSignal<boolean> = signal<boolean>(true);

  public authForm: FormGroup = this._formBuilder.group({
    login: [null, Validators.required],
    password: [null, Validators.required],
  });

  public hidePassword(event: MouseEvent): void {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
