import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaContatoComponent } from './cria-contato.component';

describe('CriaContatoComponent', () => {
  let component: CriaContatoComponent;
  let fixture: ComponentFixture<CriaContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
