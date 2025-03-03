import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoyageService } from '../../services/voyage_service';
import { Voyage } from '../../models/voyage_model';

@Component({
  selector: 'app-generate-voyage',
  templateUrl: './generate-voyage.component.html',
  styleUrls: ['./generate-voyage.component.scss']
})
export class GenerateVoyageComponent {
  generatedVoyage?: Voyage;

  destinations = ['Paris', 'Tokyo', 'New York', 'Londres', 'Rome'];
  descriptions = ['Magnifique', 'Inoubliable', 'Aventureux', 'Luxueux'];
  prixMin = 100;
  prixMax = 1000;

  constructor(private voyageService: VoyageService, private router: Router) {}

  genererVoyage() {
    const id = Math.random().toString().replace('.', '');
    const destination = this.destinations[Math.floor(Math.random() * this.destinations.length)];
    const description = this.descriptions[Math.floor(Math.random() * this.descriptions.length)];
    const prix = Math.floor(Math.random() * (this.prixMax - this.prixMin)) + this.prixMin;

    this.generatedVoyage = { id, destination, description, prix };
  }

  validerVoyage() {
    if (this.generatedVoyage) {
      this.voyageService.addVoyage(this.generatedVoyage);
      this.router.navigate(['/voyage', this.generatedVoyage.id]);
    }
  }
}