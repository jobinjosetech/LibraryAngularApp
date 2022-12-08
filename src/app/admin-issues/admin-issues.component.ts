import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-issues',
  templateUrl: './admin-issues.component.html',
  styleUrls: ['./admin-issues.component.css']
})
export class AdminIssuesComponent {
  constructor(private api:ApiService){
    api.getBookIssue().subscribe(
      (response:any)=>{
        this.issueBooks = response
      }
    )
  }
  issueBooks:any = []
}
