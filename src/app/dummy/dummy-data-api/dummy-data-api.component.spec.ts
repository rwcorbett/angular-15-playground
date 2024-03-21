import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDataAPIComponent } from './dummy-data-api.component';

describe('DummyDataAPIComponent', () => {
  let component: DummyDataAPIComponent;
  let fixture: ComponentFixture<DummyDataAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyDataAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyDataAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
