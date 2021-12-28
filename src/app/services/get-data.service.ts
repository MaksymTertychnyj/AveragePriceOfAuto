import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseAVG } from '../models/modelResponseAVG';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
 
  
 
public key: string;
private link: string;
private response: ResponseAVG;


  constructor(private http: HttpClient) {
   }

   getResponseAdvertisement(selectedPosition: string) {
    return this.http.get("https://developers.ria.com/auto/info?api_key=" + this.key + "&auto_id=" + selectedPosition);
  }

   setResponse(data: ResponseAVG)
  {
    this.response = data;
  }

  getResponse(){
    return this.response;
  }

  getRequestAVG(sublink: string) {
    this.link = "https://developers.ria.com/auto/average_price?api_key=" + this.key + sublink;
      return this.http.get(this.link);
   }

  getTypeTransport() {
    return this.http.get("https://developers.ria.com/auto/categories/?api_key=" + this.key);
  }

  getMarkTransport(type:string){
    if(type!=null)
    {
      return this.http.get("https://developers.ria.com/auto/categories/" + type +"/marks?api_key=" + this.key);
    }
  }     
    getModelTransport(type:string, mark:string) {
      if(mark!="0")
      {
        return this.http.get("http://api.auto.ria.com/categories/" + type + "/marks/" + mark + "/models?api_key=" + this.key);
      }
    }
    
    getRegion(){
      return this.http.get("https://developers.ria.com/auto/states?api_key=" + this.key);
    }

    getCities(region:string){
      if(region!=null)
      {
      return this.http.get("https://developers.ria.com/auto/states/" + region + "/cities?api_key=" + this.key);
      }
    }

    getFuelType(){
      return this.http.get("https://developers.ria.com/auto/type?api_key=" + this.key);
    }

    getKPPtype(type:string)
    {
      if(type!=null)
      {
        return this.http.get("https://developers.ria.com/auto/categories/" + type + "/gearboxes?api_key=" + this.key);
      }
    }
  }





