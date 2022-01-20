import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  // Recebendo os métodos

  // Aqui recebendo um usuário para fazer o login
  login(user: any) {
    return new Promise((resolve) => {
      // Aqui estou simulando o HTTP
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    })
  }

  // Criação de conta
  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    })
  }
}
