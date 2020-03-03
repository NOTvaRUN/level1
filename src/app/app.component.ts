import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "test1";

  constructor(private http: HttpClient) {}
  ngOnInit() {
    // this.http.post<any>(this.url, 40).subscribe(res => {
    //   console.log(res);
    // });
    // http://192.168.8.140:8881
  }

  runrun() {
    let message;
    let status;
    // this.http.post<any>(`/app3/myurl/2`, 6).subscribe(res => {
    //   console.log(res);
    // do {
    //   this.http.post<any>(`/app3/myurl/${this.i}`, 6).subscribe(res => {
    //     console.log(res);
    //     this.output = res;
    //     message = res.status;
    //     console.log(message);

    let i = 0;
    // while (message == "success") {
    //   this.http.post<any>(`/app3/myurl/${i}`, 6).subscribe(res => {
    //     console.log(res);
    //     message = res.message;
    //     console.log(message);
    //     i++;
    //   });
    // }
    let max;
    // while (status == "success") {
    for (let i = 0; i < 10; i++) {
      this.http.post<any>(`/app3/myurl/${i}`, 6).subscribe(res => {
        console.log(res);
        message = res.message;
        status = res.status;
        console.log(status);
        console.log(message);
        if (res.status == "failure") {
          return;
        } else {
          max = max + message;
          console.log(max);
        }
      });
      // }
    }
  }
}
