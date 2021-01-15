import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverName = '';

  getServiceStatus() {
    return this.serverStatus;
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
