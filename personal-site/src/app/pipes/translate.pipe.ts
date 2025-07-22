import { Pipe, PipeTransform } from '@angular/core';
import { Content, LanguageService } from '../services/language.service';


@Pipe({
    name: 'translate', pure: false
})
export class TranslatePipe implements PipeTransform {
    constructor(private languageService: LanguageService) { }

    transform(content: Content): string {
        return content[this.languageService.getLanguage()] || content['en'];
    }

}
