import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudComponentComponent } from './cloud-component.component';

describe('CloudComponentComponent', () => {
  let component: CloudComponentComponent;
  let fixture: ComponentFixture<CloudComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
