import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const SENHA_URL = '123456';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss'],
  standalone: false
})
export class Admin {
  acessoLiberado = false;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      if (params['senha'] === SENHA_URL) {
        this.acessoLiberado = true;
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
