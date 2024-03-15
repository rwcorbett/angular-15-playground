import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBasicsComponent } from './tab-basics.component';

describe('TabBasicsComponent', () => {
  let component: TabBasicsComponent;
  let fixture: ComponentFixture<TabBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
