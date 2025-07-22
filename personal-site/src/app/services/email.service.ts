import { Injectable } from '@angular/core';

import emailjs from 'emailjs-com';

import { environment } from '../../environments/environment';

export interface EmailData {
    name: string;
    email: string;
    message: string;
    [index: string]: string;
}

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    constructor() {
        emailjs.init(environment.emailServicePublicKey);
    }

    sendContactEmail(emailData: EmailData) {
        return emailjs.send(environment.emailServiceServiceId, environment.emailServiceTemplateId, emailData);
    }
}
