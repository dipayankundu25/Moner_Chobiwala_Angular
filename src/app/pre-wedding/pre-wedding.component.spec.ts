import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreWeddingComponent } from './pre-wedding.component';

describe('PreWeddingComponent', () => {
  let component: PreWeddingComponent;
  let fixture: ComponentFixture<PreWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreWeddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
