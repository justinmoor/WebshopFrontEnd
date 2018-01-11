import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarisComponent } from './inventaris.component';

describe('InventarisComponent', () => {
  let component: InventarisComponent;
  let fixture: ComponentFixture<InventarisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
