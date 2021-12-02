import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaContatoComponent } from './atualiza-contato.component';

describe('AtualizaContatoComponent', () => {
  let component: AtualizaContatoComponent;
  let fixture: ComponentFixture<AtualizaContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
