import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Product } from '../../models/product'
import { ProductserviceService } from '../../services/producten/productservice.service';

@Component({
  selector: 'app-toevoegen',
  templateUrl: './toevoegen.component.html',
  styleUrls: ['./toevoegen.component.css']
})
export class ToevoegenComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
 
  naam : string;
  beschrijving:string;
  aantal: number;
  prijs : number;
  path : string;

  image  = {
    base64 : null,
    naam: null
  }

  @ViewChild('fileInput') fileInput: ElementRef;

  ngOnInit(){

  }

  constructor(private fb: FormBuilder, private service : ProductserviceService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      beschrijving: ['', Validators.required],
      prijs: ['', Validators.required],
      aantal: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      this.path = file.name;
      
      reader.onload = () => {
        this.image.base64 = reader.result.split(',')[1]
        // this.form.get('avatar').setValue({
        //   filename: file.name,
        //   filetype: file.type,
        //   value: reader.result.split(',')[1]
        // })
      };
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
   
    setTimeout(() => {
      this.service.uploadProduct(new Product(this.naam, this.beschrijving, this.prijs, this.aantal, this.path))
      this.image.naam = this.path
      console.log(this.image.base64)
      this.service.uploadImage(this.image)
      alert('Product toegevoegd!');
      this.form.reset();
    }, 1000);
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
}
