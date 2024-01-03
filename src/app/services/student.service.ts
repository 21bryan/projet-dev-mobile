import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private db: AngularFireDatabase) {}

  // Enregistrer un étudiant
  registerStudent(student: any) {
    return this.db.list('/students').push(student);
  }

  // Authentifier un étudiant
  authenticateStudent(matricule: string, password: string): Observable<any> {
    return this.db.list('/students', (ref) =>
      ref.orderByChild('matricule').equalTo(matricule).limitToFirst(1)
    ).valueChanges();
  }

  // Consulter les trajets des bus
  getBusTrips(): Observable<any[]> {
    return this.db.list('/trips').valueChanges();
  }

  // Consulter la vue détaillée d'un trajet
  getTripDetails(tripId: string): Observable<any> {
    return this.db.object(`/trips/${tripId}`).valueChanges();
  }

  // Consulter son QR Code pour l'entrée en bus
  getStudentQRCode(studentId: string): Observable<any> {
    return this.db.object(`/students/${studentId}/qrCode`).valueChanges();
  }

  // Calculer le temps mis pour joindre le bus
  calculateTimeToBus(studentLocation: any, busLocation: any): Observable<number> {
    //  logique de calcul du temps en fonction des positions
    
    return new Observable<number>((observer) => {
      // Implémentation de  la logique ici
      const time = 0; // Remplacez cela par votre logique de calcul du temps
      observer.next(time);
      observer.complete();
    });
  }
}
