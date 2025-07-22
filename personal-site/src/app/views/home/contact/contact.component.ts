import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Content, EmptyContent } from '../../../services/language.service';
import { EmailService } from '../../../services/email.service';
import { TranslatePipe } from '../../../pipes/translate.pipe';

interface FormFormat {
    name: Content
    email: Content
    message: Content
}

@Component({
    standalone: true,
    selector: 'app-home-contact',
    imports: [TranslatePipe, ReactiveFormsModule, CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    empty = EmptyContent;
    title: Content = {
        'en': 'Let\'s Create Together!',
        'pt': 'Vamos Criar Juntos!'
    }

    cta: Content = {
        'en': 'Have an exciting idea? Need a skilled developer for your next project? I\'d love to hear from you!',
        'pt': 'Tem uma ideia empolgante? Precisa de um desenvolvedor para seu próximo projeto? Eu vou adorar ouvir de você!'
    }

    submitText: Content = {
        'en': 'Send Your Idea',
        'pt': 'Envie sua Ideia'
    }

    formPlaceholders: FormFormat = {
        name: { 'en': 'Your Name', 'pt': 'Seu Nome' },
        email: { 'en': 'Your Email', 'pt': 'Seu Email' },
        message: { 'en': 'Your Idea', 'pt': 'Sua ideia' }
    }

    validationMessages = {
        name: {
            required: { 'en': 'Name is required', 'pt': 'Nome é obrigatório' }
        },
        email: {
            required: { 'en': 'Email is required', 'pt': 'Email é obrigatório' },
            email: { 'en': 'Please enter a valid email', 'pt': 'Por favor insira um email válido' }
        },
        message: {
            required: { 'en': 'Message is required', 'pt': 'Mensagem é obrigatória' }
        }
    };

    inputClasses = 'w-full p-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 transition '
        + 'placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 duration-300'

    contactForm: FormGroup;
    isSubmitting = false;
    showError = false;
    currentError: Content = EmptyContent;
    successMessage: Content = EmptyContent;
    showSuccess = false

    constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required]
        })
    }

    onSubmit() {
        this.contactForm.markAllAsTouched();

        if (this.contactForm.invalid) {
            this.showFormValidationErrors();
            return;
        }

        if (this.isSubmitting) {
            return;
        }

        this.isSubmitting = true;
        this.showError = false;

        this.emailService.sendContactEmail(this.contactForm.value)
            .then(() => {
                this.showSuccess = true;
                this.contactForm.reset();
                this.isSubmitting = false;
                setTimeout(() => this.showSuccess = false, 5000);
            }, (error) => {
                console.log(error);
                this.showError = true;
                this.currentError = {
                    'en': 'Server error. Please try again later.',
                    'pt': 'Erro no servidor. Por favor tente novamente mais tarde.'
                };
                this.isSubmitting = false;
                setTimeout(() => {
                    this.showError = false;
                    this.currentError = EmptyContent;
                }, 5000);
            })

    }

    private showFormValidationErrors() {
        const controls = this.contactForm.controls;
        for (const controlName in controls) {
            if (controls[controlName].errors) {
                const errors = controls[controlName].errors;
                if (errors?.['required']) {
                    const validationMessages = this.validationMessages
                    this.currentError = validationMessages[controlName as keyof typeof validationMessages].required;
                } else if (errors?.['email']) {
                    this.currentError = this.validationMessages.email.email;
                }
                this.showError = true;
                setTimeout(() => this.showError = false, 5000);
                break;
            }
        }
    }

    getControlErrors(controlName: string) {
        const control = this.contactForm.get(controlName);
        if (!control || !control.errors || !control.touched) {
            return EmptyContent;
        }

        if (control.errors['required']) {
            return this.validationMessages[controlName as keyof typeof this.validationMessages].required;
        }

        if (controlName === 'email' && control.errors['email']) {
            return this.validationMessages.email.email;
        }

        return EmptyContent;
    }


}
