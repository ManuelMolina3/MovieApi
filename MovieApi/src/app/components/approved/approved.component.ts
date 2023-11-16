import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit{

  constructor(private authService: AuthService, private accountService: AccountService){}

  ngOnInit(): void {
    let token = localStorage.getItem('REQUEST_TOKEN');
    this.authService.createSession(token!).subscribe(resp=>{
      localStorage.setItem('SESSION_ID', resp.session_id);
      this.accountService.getAccountDetails().subscribe(resp=>{
        
      })
    })
  }

}
