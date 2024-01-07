import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
})
export class InfosPage implements OnInit {
  items: any[];
  chauffeurs:any[];

  constructor(private student: StudentService, private driver: DriverService) { }

  ngOnInit() {
    this.student.getItems().subscribe(data => {
      this.items = data;
    });

    this.driver.getItems().subscribe(data => {
      this.chauffeurs = data;
    });
  }

}
