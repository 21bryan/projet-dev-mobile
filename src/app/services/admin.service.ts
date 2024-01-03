import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private db: AngularFireDatabase) {}

  // Enregistrer un étudiant
  addStudent(student: any) {
    return this.db.list('/students').push(student);
  }

  // Valider/Suspendre le passe d'un étudiant
  toggleStudentStatus(studentId: string, isActive: boolean) {
    return this.db.object(`/students/${studentId}`).update({ isActive });
  }

  // Enregistrer un chauffeur
  addDriver(driver: any) {
    return this.db.list('/drivers').push(driver);
  }

  // Enregistrer les informations sur un bus
  addBus(bus: any) {
    return this.db.list('/buses').push(bus);
  }

  // Enregistrer un trajet
  addTrip(trip: any) {
    return this.db.list('/trips').push(trip);
  }

  // Récupérer la liste des étudiants
  getStudents(): Observable<any[]> {
    return this.db.list('/students').valueChanges();
  }

  // Récupérer la liste des chauffeurs
  getDrivers(): Observable<any[]> {
    return this.db.list('/drivers').valueChanges();
  }

  // Récupérer la liste des bus
  getBuses(): Observable<any[]> {
    return this.db.list('/buses').valueChanges();
  }

  // Récupérer la liste des trajets
  getTrips(): Observable<any[]> {
    return this.db.list('/trips').valueChanges();
  }
}
