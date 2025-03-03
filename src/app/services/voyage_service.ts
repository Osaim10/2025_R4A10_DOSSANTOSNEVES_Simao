import { Injectable } from '@angular/core';
import { Voyage } from '../models/voyage_model';

@Injectable({
  providedIn: 'root',
})
export class VoyageService {
  private voyages: Voyage[] = [
    { id: '1', destination: 'Paris', description: 'Ville lumière', prix: 200 },
  ];

  getVoyages(): Voyage[] {
    return [...this.voyages];
  }

  getVoyageById(id: string): Voyage | undefined {
    return this.voyages.find((v) => v.id === id);
  }

  addVoyage(voyage: Voyage): void {
    this.voyages.push(voyage);
  }

  deleteVoyage(id: string): void {
    this.voyages = this.voyages.filter((v) => v.id !== id);
  }
}