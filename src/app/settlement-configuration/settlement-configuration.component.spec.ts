import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementConfigurationComponent } from './settlement-configuration.component';

describe('SettlementConfigurationComponent', () => {
  let component: SettlementConfigurationComponent;
  let fixture: ComponentFixture<SettlementConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
