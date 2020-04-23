import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenLoginComponent } from './model-driven-login.component';

describe('ModelDrivenLoginComponent', () => {
  let component: ModelDrivenLoginComponent;
  let fixture: ComponentFixture<ModelDrivenLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
