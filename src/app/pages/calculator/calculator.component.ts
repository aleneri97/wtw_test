import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  /** @description Calculator form fields */
  form = this.fb.group({
    mainLimit: ['', [Validators.required]],
    mainRetention: ['', [Validators.required]],
    complexity: ['simple', [Validators.required]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  /**
   * @description Handles form submit
   */
  onFormSubmit() {
    console.log(this.form.value);
  }
}
