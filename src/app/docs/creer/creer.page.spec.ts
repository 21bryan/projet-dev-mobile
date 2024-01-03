import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreerPage } from './creer.page';

describe('CreerPage', () => {
  let component: CreerPage;
  let fixture: ComponentFixture<CreerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
