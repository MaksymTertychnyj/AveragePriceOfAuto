import { Component, OnInit } from '@angular/core';
import { ModelAdvertisement } from 'src/app/models/modelAdvertisement/modelAdvertisement';
import { ResponseAVG } from 'src/app/models/modelResponseAVG';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-result-avg',
  templateUrl: './result-avg.component.html',
  styleUrls: ['./result-avg.component.css']
})
export class ResultAVGComponent implements OnInit {

  response: ResponseAVG;
  sublink: string;
  selectedPosition: string;
  responseAdvertisement: ModelAdvertisement;
  linkImage: string;

  constructor(private dataService: GetDataService) {
    this.dataService.key = history.state.key;
    this.sublink = history.state.data;
   }

  ngOnInit() {
    this.dataService.getRequestAVG(this.sublink).subscribe((data: ResponseAVG) =>
    this.response = data);
    this.sublink = "";
  }

  OnChangeID(){
    this.dataService.getResponseAdvertisement(this.selectedPosition).
    subscribe((data:ModelAdvertisement)=>this.responseAdvertisement = data);
  }

  



}
