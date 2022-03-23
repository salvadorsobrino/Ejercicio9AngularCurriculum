import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenteCurriculum',
  templateUrl: './componenteCurriculum.component.html',
  styleUrls: ['./componenteCurriculum.component.css']
})
export class ComponenteCurriculumComponent implements OnInit {
  nombre = "Salvador Sobrino Solórzano";
  cumpleanios = "23 de Noviembre del 2000";
  correo = "salvador.sobrino.solorzano.1p@gmail.com";
  telefono = "+34 666666666";
  linkedin="https://es.linkedin.com/in/salvador-sobrino-9501421a7";
  estudioActual = "Ingeniería de Sistemas de la Información";
  centroActual = "Universidad Politécnica. Alcalá de Henares";
  trabajoActual = "BABEL Sistemas de Información.";
  constructor() { }

  ngOnInit() {
  }

}
