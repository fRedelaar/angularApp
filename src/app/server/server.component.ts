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
  serverName3 = 'trying';

  getServiceStatus() {
    return this.serverStatus;
  }

  CreatingServer() {
    this.serverName3 = 'Server was created! Server is named: ' +  this.serverName;
  }
}
