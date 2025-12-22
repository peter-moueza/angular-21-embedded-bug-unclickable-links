import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false, // 👈 Changez 'true' par 'false' (ou supprimez la ligne)
  // ⚠️ Supprimez aussi le tableau 'imports: [...]' s'il était présent ici
})
export class AppComponent {
  title = 'embedded-bug-unclickable-links-standalonefalse';
}
