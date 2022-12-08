import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {
  title = ""
  constructor(private api: ApiService) {
    api.fetchBook().subscribe(
      (response) => {
        this.books = response
        console.log(response)
      }
    )
  }
  readValues = () => {
    let data: any = {
      "title": this.title
    }
    if (this.title.length == 0) {
      this.searchData = []
    } else {
      this.api.searchBook(data).subscribe(
        (response: any) => {
          if (response.length == 0) {
            this.searchData = []
          } else {
            this.searchData = response
          }
        }
      )
    }
  }
  searchData: any = []
  books: any = []
}
