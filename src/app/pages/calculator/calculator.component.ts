import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

interface Row {
  date: Date;
  benchmark1: number;
  benchmark2: number;
};

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
  /** @description Data to be shown on the table */
  dataSource = new MatTableDataSource<Row>();
  /** @description Names of columns to be displayed on the table */
  displayedColumns = ['date', 'benchmark1', 'benchmark2'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  /**
   * @description Handles form submit
   */
  onFormSubmit() {
    console.log(this.form.value);
  }
}
