import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';

const COLLECTION_USERS = 'users';
const COLLECTION = 'game';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public firestore: Firestore) { }

  async createGame(name: string) {
    const docRef = await addDoc(collection(this.firestore, COLLECTION), {
      name: name
    });
  }

  getEmptyGame() {
    return query(collection(this.firestore, COLLECTION),
      where('player2', "==", 'null'));
  }


}
