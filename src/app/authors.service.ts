import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ["Edgar Allan Poe", "Lovecraft", "William Gibson"];
  }

}
