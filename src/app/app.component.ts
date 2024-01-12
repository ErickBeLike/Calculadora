import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = '';

  appendToDisplay(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      // Utilizando la función eval de TypeScript y manejando errores
      const result = Function('return ' + this.display)();
      this.display = result.toString();
    } catch (error) {
      this.display = 'Error';
    }
  }

  title = 'CalcuRauw';
}
