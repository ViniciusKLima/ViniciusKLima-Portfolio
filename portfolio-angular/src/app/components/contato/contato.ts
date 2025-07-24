import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.html',
  styleUrls: ['./contato.scss'],
  standalone: false,
})
export class Contato {
  @Output() showNotification = new EventEmitter<void>();

  isSubmitting = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  async onSubmit(form: NgForm) {
    if (form.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      try {
        // Criar FormData para envio
        const formData = new FormData();
        formData.append('name', this.formData.name);
        formData.append('email', this.formData.email);
        formData.append('subject', this.formData.subject);
        formData.append('message', this.formData.message);
        formData.append('_captcha', 'false');

        // Enviar para FormSubmit
        const response = await fetch(
          'https://formsubmit.co/viniciuskls2006@gmail.com',
          {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
            },
          }
        );

        if (response.ok) {
          // Resetar formulário
          this.resetForm();
          form.resetForm();

          // Emitir evento para mostrar notificação
          this.showNotification.emit();

          console.log('Mensagem enviada com sucesso!');
        } else {
          throw new Error('Erro no envio');
        }
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        alert('Erro ao enviar mensagem. Tente novamente.');
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
