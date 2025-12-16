import { Component } from '@angular/core';
import {yellowSubmarine} from './yellowsubmarine';
import {changesize} from './changesize';
import {count} from 'rxjs';
import {countwords} from './countwords';
import {imatge} from './imatge';
import {Lecturadetext, mostrartext} from './Lecturadetext';
import {crearLlibre} from './serveillibre';
import {mostrarLlibre} from './serveillibre';

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
    imatge('imatge')
    Lecturadetext('textOrigen');
    mostrartext('textDesti')
    crearLlibre();
    mostrarLlibre('infoLlibre');
  }


  protected readonly countwords = countwords;
}
