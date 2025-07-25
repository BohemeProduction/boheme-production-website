import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectDate: string;
  venue: string;
  services: string[];
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Bohème Production <onboarding@resend.dev>',
      to: ['boheme.productionwedding@gmail.com'],
      subject: `Nouvelle demande de contact - ${formData.firstName} ${formData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #13182c; border-bottom: 2px solid #e8dcc7; padding-bottom: 10px;">
            Nouvelle demande de contact
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #13182c; margin-top: 0;">Informations du client</h3>
            <p><strong>Nom :</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email :</strong> ${formData.email}</p>
            <p><strong>Téléphone :</strong> ${formData.phone}</p>
            <p><strong>Date du projet :</strong> ${formData.projectDate || 'Non spécifiée'}</p>
            <p><strong>Lieu :</strong> ${formData.venue || 'Non spécifié'}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #13182c; margin-top: 0;">Services souhaités</h3>
            <ul style="margin: 0; padding-left: 20px;">
              ${formData.services.map(service => `<li>${service}</li>`).join('')}
            </ul>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #13182c; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; margin: 0;">${formData.message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e8dcc7;">
            <p style="color: #666; font-size: 14px;">
              Cet email a été envoyé depuis le formulaire de contact de Bohème Production
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }

    return { success: true, data };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
}; 