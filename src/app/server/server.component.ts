import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  styles: [`
  .online {
    color:white;
  }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverName = '';
  serverName3 = 'trying';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServiceStatus() {
    return this.serverStatus;
  }

  CreatingServer() {
    this.serverName3 = 'Server was created! Server is named: ' +  this.serverName;
    this.serverName = '';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
