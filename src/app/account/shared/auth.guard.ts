import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

// Aqui autoriza entrar na estrutura ou não.
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // Redirecionando para a tela de login.
  constructor(private router: Router) { }

  // Função para que entre para a tela Home ou é direcionado para tela de login.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = window.localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
