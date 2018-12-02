import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit() {
    let token = this.getAccessTokenFromUrl(location.href);
    this.http.get("https://discordapp.com/api/users/@me", this.getAuthHeaders(token)).subscribe(
      res => console.log(res)
    );
  }

  private getAccessTokenFromUrl(url: string) {
    const regexp = new RegExp(/(#|\&)([^=]+)\=([^&]+)/g);
    const results = regexp.exec(url);
    return results[3];
  }

  private getAuthHeaders(token) {
    const httpOptions = {
      headers: new HttpHeaders().set("Authorization", "Bearer " + token)
    };
    return httpOptions;
  }

}
