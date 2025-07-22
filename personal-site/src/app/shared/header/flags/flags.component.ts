import { Component, input, signal, effect } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule, AsyncPipe } from '@angular/common';

@Component({
    standalone: true,
    imports: [CommonModule, AsyncPipe],
    selector: 'app-flag',
    template: `
<span class="flag-icon" [innerHTML]="flagSvg() | async"></span>
`,
})
export class FlagComponent {
    countryCode = input.required<string>();
    private flags: Record<string, Promise<SafeHtml>> = {};
    flagSvg = signal<Promise<SafeHtml> | null>(null);


    constructor(private sanitizer: DomSanitizer) {
        console.log("brFlag", '/assets/flags/br.svg')
        // Process SVGs synchronously since Angular CLI handles the imports
        this.flags = {
            'br': this.fetchSvg('/assets/flags/br.svg'),
            'en': this.fetchSvg('/assets/flags/us.svg'),
            'en-ga': this.fetchSvg('https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Galicia.svg/512px-Flag_of_Galicia.svg.png?20060226234755')
        };

        // Update when input changes
        effect(() => {
            const code = this.countryCode();
            this.flagSvg.set(this.flags[code] || this.flags['en']);
        });
    }

    private async fetchSvg(svgPath: string): Promise<SafeHtml> {
        const response = await fetch(svgPath);
        const svgContent = await response.text();
        return this.processSvg(svgContent);
    }

    private processSvg(svgContent: string): SafeHtml {
        if (svgContent.startsWith('data:image/svg+xml,')) {
            const cleanedSvg = svgContent.replace(/^data:image\/svg\+xml,/, '');
            const decodedSvg = decodeURIComponent(cleanedSvg);
            return this.sanitizer.bypassSecurityTrustHtml(decodedSvg);
        }
        return this.sanitizer.bypassSecurityTrustHtml(svgContent);
    }
}
