import { Component } from '@angular/core';
import {yellowSubmarine} from './yellowsubmarine';
import {changesize} from './changesize';
import {count} from 'rxjs';
import {countwords} from './countwords';

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
    changesize('pepsicola')
    countwords('lorem')
  }

  protected readonly countwords = countwords;
}
