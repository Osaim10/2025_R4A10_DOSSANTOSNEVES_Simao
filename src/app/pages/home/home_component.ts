import { Component } from '@angular/core';
import { VoyageService } from '../../services/voyage_service';
import { Voyage } from '../../models/voyage_model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  voyages: Voyage[];

  constructor(private voyageService: VoyageService) {
    this.voyages = this.voyageService.getVoyages();
  }

  supprimerVoyage(id: string) {
    if (confirm('Voulez-vous vraiment supprimer ce voyage ?')) {
      this.voyageService.deleteVoyage(id);
      this.voyages = this.voyageService.getVoyages();
    }
  }
}