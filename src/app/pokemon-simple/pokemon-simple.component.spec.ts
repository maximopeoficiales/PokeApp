import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSimpleComponent } from './pokemon-simple.component';

describe('PokemonSimpleComponent', () => {
  let component: PokemonSimpleComponent;
  let fixture: ComponentFixture<PokemonSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
