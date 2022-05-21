/**
 * Import Angular libraries.
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Rectangular } from '../models/rectangular';
import { RectServiceService } from './rectService.service';



@Component({
  templateUrl: 'rect.component.html'
})
export class RectComponent implements OnInit {

  rectForm!: FormGroup;
  rectangulars: Rectangular[] = [];
  // public rectangulars: Rectangular[] = [{
  //   height: 100,
  //   width: 200,
  //   color: 'rgba(125, 125, 32, 0.5)',
  //   x: 20,
  //   y: 30,
  //   rx: 0,
  //   ry: 0
  // }, {
  //   height: 50,
  //   width: 50,
  //   color: 'rgba(12, 32, 222, 0.7)',
  //   x: 200,
  //   y: 20,
  //   rx: 10,
  //   ry: 15
  // }];

  height= 0;
  width= 0;
  color= '';
  x= 0;
  y= 0;
  rx= 0;
  ry= 0;



  constructor(
    private fb : FormBuilder,
    private service: RectServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

  }

  addNew() {
    this.rectangulars.push({
      height: 0,
      width: 0,
      color: '#000',
      x: 0,
      y: 0,
      rx: 0,
      ry: 0
    });
  }

  getHeight(): number {
    return Math.max.apply(Math, this.rectangulars.map(el => el.height + el.y)) + 20;
  }

  removeRow(index: number) {
    this.rectangulars.splice(index, 1);
  }
  onSubmit(it: NgForm) {
    this.service.save(it.value).subscribe();
  }

}
