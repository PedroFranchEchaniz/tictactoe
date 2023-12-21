import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
} from '@angular/fire/firestore';

const COLLECTION_USERS = 'users';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public firestore: Firestore) { }

  async createUser(name: string) {
    const docRef = await addDoc(collection(this.firestore, COLLECTION_USERS), {
      name: name
    });
  }


}
