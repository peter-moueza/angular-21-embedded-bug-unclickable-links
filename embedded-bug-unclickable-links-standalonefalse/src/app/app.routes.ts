import { Routes } from '@angular/router';

import { AComponent } from './a/a.component';
import { BComponent } from './a/b/b.component';
import { CComponent } from './a/b/c/c.component';
import { DComponent } from './a/b/c/d/d.component';
import { EComponent } from './a/b/c/d/e/e.component';

export const routes: Routes = [
    {
        path: 'a',
        component: AComponent,
    },

    {
        path: 'b',
        component: BComponent,
    },
    {
        path: 'c',
        component: CComponent,
    },
    {
        path: 'd',
        component: DComponent,
    },
    {
        path: 'e',
        component: EComponent,
    },

];
