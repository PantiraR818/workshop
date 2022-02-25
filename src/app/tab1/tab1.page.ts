import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  content = [{
    avatar : "https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1645507305~hmac=9a38018834926aa7c43e17bab760f6bd",
    img : "https://cdn-icons.flaticon.com/png/128/3046/premium/3046948.png?token=exp=1645506593~hmac=7b3fc5b8f95faae8f7a4b8dd605f7382",
    name : "Ployly"
  },
  {
    avatar : "https://cdn-icons.flaticon.com/png/128/4140/premium/4140047.png?token=exp=1645507142~hmac=d5b899be537224efb4b891ef7eb9725a",
    img : "https://cdn-icons.flaticon.com/png/128/1048/premium/1048315.png?token=exp=1645506659~hmac=d7243b53117f3c379b2e48081b79211e",
    name : "MuchMhee"
   
  },
  {
    avatar : "https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1645507305~hmac=9a38018834926aa7c43e17bab760f6bd",
    img : "https://cdn-icons.flaticon.com/png/128/3414/premium/3414885.png?token=exp=1645506716~hmac=b37116afd8bb9f012009c2ea4a92ffaf",
    name : "MildMild"
  
  },
  {
    avatar : "https://cdn-icons.flaticon.com/png/128/4140/premium/4140047.png?token=exp=1645507142~hmac=d5b899be537224efb4b891ef7eb9725a",
    img : "https://cdn-icons.flaticon.com/png/128/1048/premium/1048325.png?token=exp=1645506771~hmac=cdedb84b41904989c398df14accce4bc",
    name : "FahFah"
  },
  {
    avatar : "https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1645507305~hmac=9a38018834926aa7c43e17bab760f6bd",
    img : "https://cdn-icons.flaticon.com/png/128/551/premium/551239.png?token=exp=1645506849~hmac=98a9a51a7a69592eb15146af64943b2f",
    name : "Elle"
  },
  {
    avatar : "https://cdn-icons.flaticon.com/png/128/4140/premium/4140047.png?token=exp=1645507142~hmac=d5b899be537224efb4b891ef7eb9725a",
    img : "https://cdn-icons-png.flaticon.com/128/3094/3094972.png",
    name : "Somsom"
  }
  ]
  constructor() {}
  
}
