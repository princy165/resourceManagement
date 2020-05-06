import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { MustMatch } from './_helpers/must-match.validator';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
interface Post {
  startDate: Date;
  endDate: Date;
}
@Component({
  selector: 'app-tagging',
  templateUrl: './tagging.component.html',
  styleUrls: ['./tagging.component.css']
})
export class TaggingComponent implements OnInit {
  title = 'StaffingTool';

    taggingForm: FormGroup;
    submitted = false;
    edit = true;
    countries : any;
    WorkLs:any
    candle:any
    intcandles:any  = ['GOVERNANCE', 'SAP'];
    Subskills:any
    skills:any
    oppoSuits: any
    userDetails:Array<object>;
    post: Post = {
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now())
    }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.skills =[
      {"id" :1, "name": "GOVERNANCE", "code":"IN"},
      {"id" :2, "name": "SAP", "code":"NP"}
    ];
    this.Subskills =[
      {"id" :1, "name": "GOVERNANCE", "code":"IN"},
      {"id" :2, "name": "SAP", "code":"NP"}
    ];

    this.taggingForm = this.formBuilder.group({
      
      empID: ['',{disabled: true}, Validators.required],
      CorpID: ['', Validators.required],
      BD:  [{value: '', disabled: true}, Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        BDMgr:['', [ Validators.required ]],
        BDID:['', [ Validators.required ]],
        country:['', [ Validators.required ]],
        country2:['', [ Validators.required ]],
        address:['', [ Validators.required ]],
        cityName: ['', [Validators.required]],
        WorkL:['', [ Validators.required ]],
        grp:['', [ Validators.required ]],
        candle:['', [ Validators.required ]],

        intcandle:['', [ Validators.required ]],
        skill:['', [ Validators.required ]],
        Subskill:['', [ Validators.required ]],
        startDate: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en'), [Validators.required]],
        endDate: [formatDate(this.post.endDate, 'yyyy-MM-dd', 'en'), [Validators.required]],
        grade:['', [ Validators.required ]],
        grade2:['', [ Validators.required ]],
        sl:['', [ Validators.required ]]
    });
  }
  
  // convenience getter for easy access to form fields
  get f() { 
    
    return this.taggingForm.controls; }
    update(){
      this.taggingForm.get('empID');
      this.taggingForm.patchValue({
        
     });
    }
    updateProfile(){
      console.log("enable");
      this.submitted = false;
      this.taggingForm.enable();
    }
  onSubmit() {
    console.log("submitted")
      this.submitted = true;
      this.edit = false;
      this.taggingForm.disable();
      // stop here if form is invalid
      if (this.taggingForm.invalid) {
          return;
      }

     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.taggingForm.value))
  }
  }


