import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../../services/voyage_service';
import { Voyage } from '../../models/voyage_model';

@Component({
  selector: 'app-voyage-details',
  templateUrl: './voyage-details.component.html',
  styleUrls: ['./voyage-details.component.scss']
})
export class VoyageDetailsComponent {
  voyage?: Voyage;

  constructor(
    private route: ActivatedRoute,
    private voyageService: VoyageService,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.voyage = this.voyageService.getVoyageById(id);
    }
  }

  supprimerVoyage() {
    if (this.voyage && confirm('Supprimer ce voyage ?')) {
      this.voyageService.deleteVoyage(this.voyage.id);
      this.router.navigate(['/home']);
    }
  }
}