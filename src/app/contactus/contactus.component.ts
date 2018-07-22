import { Component, OnInit } from '@angular/core';
import { CyprusService } from '../cyprus.service';
import { ContactRequest } from '../Entities/ContactRequest';
import * as uuid from 'uuid/v4';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactno: string;
  email: string;
  name: string;
  query: string;

  constructor(private cyprusService: CyprusService) { }

  ngOnInit() {
  }
  OnSubmit() {
    const request: ContactRequest = new ContactRequest();
    request.ContactNo = this.contactno;
    request.Email = this.email;
    request.Name = this.name;
    request.Query = this.query;
    request.RefNo = uuid();
    request.Response = '';
    const msg = this.cyprusService.postData(request).subscribe(
      respdata => {
        console.log('Submitted');
        alert('Details Submitted');
        this.OnReset();
      });
  }
  OnReset() {
    this.contactno = '';
    this.email = '';
    this.name = '';
    this.query = '';
  }
}
