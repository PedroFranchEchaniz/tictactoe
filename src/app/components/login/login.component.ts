import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../app/services/user.service.service';
import { QuerySnapshot, onSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  name: string = '';

  constructor(public userService: UserServiceService) { }

  createGame() {
    this.userService.createUser(this.name);
  }

  ngOnInit(): void {
    const query = this.userService.getEmptyGame();
    const unsubscribe = onSnapshot(query, (querySnapshot) => {
      const games: string[] = [];
      querySnapshot.forEach((doc) => {
        games.push();
      });

      if (games.length === 0) {
        console.log('No games found');
      } else {
        console.log('Games found: ', games.join(', '));
        updateDoc();
      }
    })
  }


}
