import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../app/services/user.service.service';
import { QuerySnapshot, onSnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router'; // Importa Router desde @angular/router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name: string = '';

  constructor(public userService: UserServiceService, private router: Router) { } // Inyecta el servicio Router

  async addUser() {
    const gameId = await this.userService.createGameIfNotExists(this.name);
    if (gameId !== null && gameId !== undefined) {
      this.router.navigate(['/game/' + gameId]);
    } else {
      console.log('No game found or created');
    }
  }
}