import { MatMenuModule } from '@angular/material/menu';
import { EtusivuComponent } from './etusivu.component';

describe('etusivu.cy.ts', () => {
  it('mounts', () => {
    cy.mount(EtusivuComponent);
  });
});
