import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form-element",
  templateUrl: "./form-element.component.html",
  styleUrls: ["./form-element.component.scss"],
})
export class FormElementComponent implements OnInit {
  inputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
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
}
