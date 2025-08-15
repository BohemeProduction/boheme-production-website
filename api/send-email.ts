import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Types pour le formulaire de contact
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectDate: string;
  venue: string;
  services: string[];
  message: string;
}

// Configuration Resend
const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Vérifier que c'est une requête POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData: ContactFormData = req.body;

    // Validation des données
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      return res.status(400).json({ error: 'Données manquantes' });
    }

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Boheme Production <contact@bohemeprod.com>',
      to: ['boheme.productionwedding@gmail.com'],
      subject: `Nouveau projet - ${formData.firstName} ${formData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #13182c; border-bottom: 2px solid #e8dcc7; padding-bottom: 10px;">
            Nouveau projet reçu
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #13182c; margin-top: 0;">Informations du contact</h3>
            <p><strong>Nom :</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email :</strong> ${formData.email}</p>
            <p><strong>Téléphone :</strong> ${formData.phone}</p>
            ${formData.projectDate ? `<p><strong>Date du projet :</strong> ${formData.projectDate}</p>` : ''}
            ${formData.venue ? `<p><strong>Lieu :</strong> ${formData.venue}</p>` : ''}
          </div>
          
          ${formData.services.length > 0 ? `
            <div style="background: #e8dcc7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #13182c; margin-top: 0;">Services souhaités</h4>
              <ul style="margin: 0; padding-left: 20px;">
                ${formData.services.map(service => `<li>${service}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          
          <div style="background: #fff; padding: 20px; border: 1px solid #e8dcc7; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #13182c; margin-top: 0;">Message</h4>
            <p style="line-height: 1.6; color: #333;">${formData.message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e8dcc7;">
            <p style="color: #666; font-size: 14px;">
              Cet email a été envoyé depuis le formulaire de contact de bohemeprod.com
            </p>
          </div>
        </div>
      `,
      replyTo: formData.email,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
    }

    console.log('Email envoyé avec succès:', data);
    return res.status(200).json({ success: true, message: 'Email envoyé avec succès' });

  } catch (error) {
    console.error('Erreur serveur:', error);
    return res.status(500).json({ error: 'Erreur serveur interne' });
  }
}
