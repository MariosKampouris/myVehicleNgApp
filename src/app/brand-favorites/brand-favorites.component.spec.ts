import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandFavoritesComponent } from './brand-favorites.component';

describe('BrandFavoritesComponent', () => {
  let component: BrandFavoritesComponent;
  let fixture: ComponentFixture<BrandFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandFavoritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
