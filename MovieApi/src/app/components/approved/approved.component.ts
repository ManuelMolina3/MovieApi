import { Component, OnInit } from '@angular/core';
import { AccountResponse } from 'src/app/models/account.interface';
import { AccountService } from 'src/app/service/account.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit{

  constructor(private authService: AuthService, private accountService: AccountService){}
  account!: AccountResponse;
  ngOnInit(): void {
    let token = localStorage.getItem('REQUEST_TOKEN');
    this.authService.createSession(token!).subscribe(resp=>{
      localStorage.setItem('SESSION_ID', resp.session_id);
      this.accountService.getAccountDetails().subscribe(resp=>{
        this.account= resp;
        localStorage.setItem('USERNAME', resp.username);
        localStorage.setItem('ACCOUNT_ID', resp.id.toString());
        window.location.href= 'http://localhost:4200/'
      })
    })
  }

}
