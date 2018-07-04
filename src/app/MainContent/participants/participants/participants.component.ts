import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  displayedColumns: string[] = ['img', 'name', 'age', 'applicationDate', 'status'];
  dataSource = new MatTableDataSource<Participant>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Participant {
  img: string;
  name: string;
  age: number;
  applicationDate: string;
  status: number;
}

const ELEMENT_DATA: Participant[] = [
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 1},
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 2},
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 0},
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 1},
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 2},
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 0},
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 1},
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 2},
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 0},
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 1},
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 2},
  {img: '../../../assets/imgs/avatar.png', name: 'Natalie Daisi Brooke', age: 27, applicationDate: '09 July 2018', status: 0}
];
