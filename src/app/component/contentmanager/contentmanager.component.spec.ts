import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentmanagerComponent } from './contentmanager.component';

describe('ContentmanagerComponent', () => {
  let component: ContentmanagerComponent;
  let fixture: ComponentFixture<ContentmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
