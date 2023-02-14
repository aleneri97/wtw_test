import { CurrencyPipe } from '@angular/common';
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
  /** * @description Currency field focused */
  focusedField = 0;

  constructor(private fb: FormBuilder, private currencyPipe: CurrencyPipe) { }

  ngOnInit() { }

  /**
   * @description Handles form submit
   */
  onFormSubmit() {
    this.calculateData();
  }

  /**
   * @description Generate and change the table data
   */
  calculateData() {
    const data = new Array(5 + Math.floor(Math.random() * 15)).fill(0).map(() => ({
        date: new Date(new Date().getTime() - (Math.random() * 315360000000)),
        benchmark1: Number((Math.random() * 100).toFixed(2)),
        benchmark2: Number((Math.random() * 100).toFixed(2)),
    }));
    this.dataSource = new MatTableDataSource(data);
  }

  /**
   * @description Format currency fields, removing non numerical characters and then formatting to currency notation
   * @param {number} fieldId Field to format
   */
  formatCurrencyInput(fieldId: number) {
    if (fieldId === 1) {
      const fieldValue = this.form.value.mainLimit?.replaceAll(/[^0-9.]/g, '') || 0;
      this.form.controls.mainLimit.setValue(this.currencyPipe.transform(fieldValue, '', ''));
    } else {
      const fieldValue = this.form.value.mainRetention?.replaceAll(/[^0-9.]/g, '') || 0;
      this.form.controls.mainRetention.setValue(this.currencyPipe.transform(fieldValue, '', ''));
    }
  }

}
