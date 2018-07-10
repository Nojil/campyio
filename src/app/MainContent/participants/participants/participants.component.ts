import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  constructor(private router: Router) {}
  displayedColumns: string[] = ['id', 'img', 'name', 'age', 'applicationDate', 'status'];
  dataSource = new MatTableDataSource<Participant>(ELEMENT_DATA);

  private navigate(product) {
    this.router.navigate(['/participant', product]);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}



export interface Participant {
  id: number;
  img: string;
  name: string;
  age: number;
  applicationDate: string;
  status: number;
}

const ELEMENT_DATA: Participant[] = [
  {id: 1, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 1},
  {id: 2, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 2},
  {id: 3, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 0},
  {id: 4, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 1},
  {id: 5, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 2},
  {id: 6, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 0},
  {id: 7, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 1},
  {id: 8, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 2},
  {id: 9, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 0},
  {id: 10, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 1},
  {id: 11, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 2},
  {id: 12, img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 0}
];
