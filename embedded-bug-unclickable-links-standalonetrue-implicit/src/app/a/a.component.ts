import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Routes } from '@angular/router';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-a',
  imports: [RouterLink],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

}
