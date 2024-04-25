import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ClientInfoService {
  constructor() {}

  public getTimeZone() {
    console.log('Timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
}
