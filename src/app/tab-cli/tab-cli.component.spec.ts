import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCLIComponent } from './tab-cli.component';

describe('TabCLIComponent', () => {
  let component: TabCLIComponent;
  let fixture: ComponentFixture<TabCLIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabCLIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCLIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
