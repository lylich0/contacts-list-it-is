import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCardListComponent } from './contact-card-list.component';

describe('ContactCardListComponent', () => {
  let component: ContactCardListComponent;
  let fixture: ComponentFixture<ContactCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
