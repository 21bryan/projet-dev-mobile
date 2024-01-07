import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrajetbusService {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.itemsCollection = this.firestore.collection<any>('/trajets');
    // 'votreCollection' est le nom de votre collection Firestore, remplacez-le par le nom réel.

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getItems(): Observable<any[]> {
    return this.items;
  }

  getItemById(itemId: string): Observable<any> {
    return this.itemsCollection.doc<any>(itemId).valueChanges();
  }
}