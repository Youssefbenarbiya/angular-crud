import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEtudiantComponent } from './search-etudiant.component';

describe('SearchEtudiantComponent', () => {
  let component: SearchEtudiantComponent;
  let fixture: ComponentFixture<SearchEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchEtudiantComponent]
    });
    fixture = TestBed.createComponent(SearchEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
