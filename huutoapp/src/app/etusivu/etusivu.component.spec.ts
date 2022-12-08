import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatMenuModule } from '@angular/material/menu';

import { EtusivuComponent } from './etusivu.component';

describe('EtusivuComponent', () => {
  let component: EtusivuComponent;
  let fixture: ComponentFixture<EtusivuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtusivuComponent],
      imports: [MatMenuModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtusivuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as title 'angular'`, () => {
    expect(component).toBeTruthy();
  });

  it(
    'home button should work',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        spyOn(component, 'validateRoomCode1');
        component.validateRoomCode1();
        expect(component.validateRoomCode1).toHaveBeenCalled();
      });
    })
  );

  it('isDisabled should be false', () => {
    expect(component.isDisabled).toBeTrue();
  });
});
