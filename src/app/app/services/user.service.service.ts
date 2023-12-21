import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  updateDoc,
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

  async createGameIfNotExists(name: string) {
    const emptyGameQuery = query(collection(this.firestore, COLLECTION), where('player2', '==', null));
    const emptyGameSnapshot = await getDocs(emptyGameQuery);

    if (emptyGameSnapshot.empty) {

      await addDoc(collection(this.firestore, COLLECTION), {
        player1: name,
        player2: null,
        winner: null
      });
    } else {

      emptyGameSnapshot.forEach((doc) => {
        const gameId = doc.id;
        updateDoc(doc.ref, { player2: name });
      });
    }
  }



  getEmptyGame() {
    return query(collection(this.firestore, COLLECTION),
      where('player2', "==", 'null'));
  }


}
