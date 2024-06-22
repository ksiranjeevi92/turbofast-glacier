import { Component } from "@angular/core";

@Component({
  selector: "app-password-generator",
  templateUrl: "./password-generator.component.html",
  styleUrls: ["./password-generator.component.css"],
})
export class PasswordGeneratorComponent {
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;

  password: string = "";

  onButtonClick() {
    let validChar: string = "";
    let numbers: string = "1234567890";
    let lettes: string = "abcdefghijklmnopqrstuvwxyz";
    let symbols: string = "!@#$%^&*()";
    let generatedPassword: string = "";

    if (this.includeLetters) {
      validChar += lettes;
    }
    if (this.includeNumbers) {
      validChar += numbers;
    }
    if (this.includeSymbols) {
      validChar += symbols;
    }
    for (let i = 0; i <= this.length; i++) {
      let index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }
    this.password = generatedPassword;
  }

  onChangeLength(value: string) {
    const parsedValaue: number = parseInt(value);

    if (!isNaN(parsedValaue)) {
      this.length = parsedValaue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
