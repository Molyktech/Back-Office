import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  constructor() {}
  // push new toast to array with content options
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    return this.toasts.push({ textOrTpl, ...options });
  }

  // Callback method to remove Toast DOM element from view
  remove(toast) {
    return (this.toasts = this.toasts.filter(t => t !== toast));
  }
}
