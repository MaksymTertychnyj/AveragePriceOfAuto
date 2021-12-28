import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelData } from '../models/modelData';
import { ResponseAVG } from '../models/modelResponseAVG';
import { GetDataService } from 'src/app/services/get-data.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [GetDataService]
})
export class SelectComponent implements OnInit {
  
  sublink:string = "";
  response: ResponseAVG;
  resp: ModelData;

  typeTransport: ModelData[];
  selectedTypeTransport: string = "";
  markTransport: ModelData[] = [new ModelData("first choose type of transport", "0")];
  selectedMark: string = "";
  modelTransport: ModelData[] = [new ModelData("first choose mark of transport", "0")];
  selectedModel: string = "";
  region: ModelData[];
  selectedRegion: string = "";
  city: ModelData[] = [new ModelData("first choose region", "0")];
  selectedCity: string = "";
  fuelType: ModelData[];
  selectedFuel: string = "";
  KPPtype: ModelData[] = [new ModelData("first choose type transport", "0")];
  selectedKPP: string = "";

  yearsFirst:string[];
  yearsSecond: string[];
  selectedMinYear: string = "";
  selectedMaxYear: string = "";
  mileages:string[];
  selectedCarMileage: string = "";
  index: number;

  constructor(private dataService: GetDataService, private router: Router) {
    this.dataService.key = history.state.key;

    this.yearsFirst = ["1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];
    this.yearsSecond = ["first choose min years"];

    this.mileages = ["20","50","80","100","150","180","200","230","250","300","350","400"];
  }

  ngOnInit() {
    this.dataService.getTypeTransport().subscribe((data:ModelData[])=>this.typeTransport = data);
    this.dataService.getRegion().subscribe((data:ModelData[])=>this.region = data);
    this.dataService.getFuelType().subscribe((data:ModelData[])=>this.fuelType = data);
  }

  OnChangeTypeTransport(){
    this.dataService.getMarkTransport(this.selectedTypeTransport).subscribe((data:ModelData[])=>this.markTransport = data);
    this.modelTransport = [new ModelData("first choose mark of transport", "0")];
    this.dataService.getKPPtype(this.selectedTypeTransport).subscribe((data:ModelData[])=>this.KPPtype = data);
  }

  OnChangeMarkTransport(){
    this.dataService.getModelTransport(this.selectedTypeTransport, this.selectedMark).subscribe((data:ModelData[])=>this.modelTransport = data);
  }
  
  OnChangeRegion(){
    this.dataService.getCities(this.selectedRegion).subscribe((data:ModelData[])=>this.city = data);
  }

  OnChangeMinYear(){
    this.index = this.yearsFirst.indexOf(this.selectedMinYear);
    this.yearsSecond = [];

    for(let i = this.index; i < this.yearsFirst.length; i++)
    {
      this.yearsSecond.push(this.yearsFirst[i]);
    }
  }

  AveragePrice(){
    if((this.selectedMark!="")&&(this.selectedModel!=""))
    {
      this.sublink += "&marka_id=" + this.selectedMark + "&model_id=" + this.selectedModel;

      if(this.selectedMinYear!="")
      {
        this.sublink += "& yers=" + this.selectedMinYear;
      }
      if(this.selectedMaxYear!="")
      {
        this.sublink += "& yers=" + this.selectedMaxYear;
      }
      if(this.selectedFuel!="")
      {
        this.sublink += "&fuel_id=" + this.selectedFuel;
      }
      if(this.selectedKPP!="")
      {
        this.sublink += "&gear_id=" + this.selectedKPP;
      }
      if(this.selectedRegion!="")
      {
        this.sublink += "&region_id=" + this.selectedRegion;
      }
      if(this.selectedCity!="")
      {
        this.sublink += "&city_id=" + this.selectedCity;
      }
      if(this.selectedCarMileage!="")
      {
        this.sublink += "&raceInt=" + "0" + "&raceInt=" + this.selectedCarMileage;
      }
    }
    this.router.navigate(['result-avg'], {state: {data: this.sublink, key: this.dataService.key}});
  }
  
}


