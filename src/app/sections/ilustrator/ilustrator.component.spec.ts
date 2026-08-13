import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlustratorComponent } from './ilustrator.component';

describe('IlustratorComponent', () => {
  let component: IlustratorComponent;
  let fixture: ComponentFixture<IlustratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlustratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlustratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
