import { Component } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.html',
  styleUrl: './series-list.css',
})
export class SeriesList {

  series: Array<Serie> = [];
  averageSeasons: number = 0
  selectedSerie?: Serie;

  constructor(private serieService: SerieService) {}

    getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.calculateAverage();
    });
  }

    calculateAverage(): void {
    let totalSeasons: number = 0;
    this.series.forEach((serie) => totalSeasons += serie.seasons);
    this.averageSeasons = totalSeasons / this.series.length;
  }

  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }

}
