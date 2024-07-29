import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePositionsComponent } from './favorite-positions.component';

describe('FavoritePositionsComponent', () => {
  let component: FavoritePositionsComponent;
  let fixture: ComponentFixture<FavoritePositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritePositionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritePositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
