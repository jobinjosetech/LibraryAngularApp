import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-issues',
  templateUrl: './user-issues.component.html',
  styleUrls: ['./user-issues.component.css']
})
export class UserIssuesComponent {
  constructor(private api:ApiService){
    api.getUserIssue({"userId":localStorage['userId']}).subscribe(
      (response:any)=>{
        console.log(response)
        this.issueBooks = response
      }
    )
  }
  issueBooks:any = []
}
