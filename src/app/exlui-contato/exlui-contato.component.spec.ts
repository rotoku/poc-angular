import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExluiContatoComponent } from './exlui-contato.component';

describe('ExluiContatoComponent', () => {
  let component: ExluiContatoComponent;
  let fixture: ComponentFixture<ExluiContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExluiContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExluiContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
