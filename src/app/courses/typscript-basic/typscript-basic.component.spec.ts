import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypscriptBasicComponent } from './typscript-basic.component';

describe('TypscriptBasicComponent', () => {
  let component: TypscriptBasicComponent;
  let fixture: ComponentFixture<TypscriptBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypscriptBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypscriptBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
