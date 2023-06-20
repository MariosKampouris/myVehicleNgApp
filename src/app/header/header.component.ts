import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService){
    
  }

  ngOnInit():void {
    this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }
}
