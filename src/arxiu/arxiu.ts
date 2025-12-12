import { Component } from '@angular/core';
import {yellowSubmarine} from './yellowsubmarine';

@Component({
  selector: 'app-arxiu',
  imports: [],
  templateUrl: './arxiu.html',
  styleUrl: './arxiu.css',
})
export class Arxiu {

  url = window.location.href;

  ngOnInit() {
    yellowSubmarine('patata')
  }

}
