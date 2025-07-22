import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Content {
    pt: string;
    en: string;
    [index: string]: string;
}

export const EmptyContent: Content = { 'en': '', 'pt': '' }


@Injectable({ providedIn: 'root' })
export class LanguageService {
    private currentLanguage = new BehaviorSubject<string>('en');

    language$ = this.currentLanguage.asObservable();

    getLanguage(): string {
        return this.currentLanguage.value;
    }

    setLanguage(lang: string): void {
        this.currentLanguage.next(lang);
        localStorage.setItem('userLanguage', lang);
    }

    constructor() {
        const savedLang = localStorage.getItem('userLanguage');
        if (savedLang) {
            this.currentLanguage.next(savedLang);
        }
    }
}
