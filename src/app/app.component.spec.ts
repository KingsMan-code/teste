import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrimeiroComponentComponent } from './components/primeiro-component/primeiro-component.component';
import { QuartoComponentComponent } from './components/quarto-component/quarto-component.component';
import { QuintoComponentComponent } from './components/quinto-component/quinto-component.component';
import { SegundoComponentComponent } from './components/segundo-component/segundo-component.component';
import { TerceiroComponentComponent } from './components/terceiro-component/terceiro-component.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        PrimeiroComponentComponent,
        SegundoComponentComponent,
        TerceiroComponentComponent,
        QuartoComponentComponent,
        QuintoComponentComponent
      ],
    }).compileComponents();
  });
});
