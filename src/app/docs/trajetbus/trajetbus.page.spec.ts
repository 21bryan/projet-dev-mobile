import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrajetbusPage } from './trajetbus.page';

describe('TrajetbusPage', () => {
  let component: TrajetbusPage;
  let fixture: ComponentFixture<TrajetbusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrajetbusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
