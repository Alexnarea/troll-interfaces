import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadOneComponent } from './components/head-one/head-one.component';
import { HeadTwoComponent } from './components/head-two/head-two.component';
import { BodyOneComponent } from './components/body-one/body-one.component';
import { BodyTwoComponent } from './components/body-two/body-two.component';
import { FootOneComponent } from './components/foot-one/foot-one.component';
import { FootTwoComponent } from './components/foot-two/foot-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadOneComponent, HeadTwoComponent, BodyOneComponent, BodyTwoComponent, FootOneComponent,FootTwoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'troll-interfaces';
}
