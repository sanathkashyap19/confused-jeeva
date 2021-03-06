import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-form-element",
  templateUrl: "./form-element.component.html",
  styleUrls: ["./form-element.component.scss"],
})
export class FormElementComponent implements OnInit {
  inputForm: FormGroup;
  randomized: boolean = false;
  spinnerDisplay: boolean = true;
  result;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.randomized = false;

    this.inputForm = this.formBuilder.group({
      question: "",
      options: this.formBuilder.array([]),
    });

    this.addOption();
    this.addOption();
  }

  addOption() {
    const option = this.inputForm.controls.options as FormArray;
    option.push(
      this.formBuilder.group({
        option: ["", Validators.required],
      })
    );
  }

  presentOption() {
    if (this.inputForm.valid) {
      setTimeout(() => {
        this.spinnerDisplay = false;
      }, 2000);
      console.log(this.inputForm.getRawValue());
      let options = this.inputForm.controls.options.value;
      let randomNumber = Math.floor(Math.random() * options.length);
      this.result = options[randomNumber];
      this.dataService.postData(this.inputForm.getRawValue()).subscribe();
      console.log(this.result);
      this.randomized = true;
    } else {
      this.inputForm.markAllAsTouched();
    }
  }
}
