import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Users, Heart, Send, CheckCircle, AlertCircle } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectDate: '',
    venue: '',
    services: [],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // Appel de l'API route Vercel au lieu de Resend directement
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de l\'email');
      }

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          projectDate: '',
          venue: '',
          services: [],
          message: ''
        });
      } else {
        throw new Error(result.error || 'Erreur lors de l\'envoi de l\'email');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement.');
      console.error('Erreur lors de l\'envoi du formulaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Kilian Abisror",
      content: "06 11 07 86 07",
      link: "tel:+33611078607"
    },
    {
      icon: Phone,
      title: "Gary Beaujoin", 
      content: "06 08 77 40 23",
      link: "tel:+33608774023"
    },
    {
      icon: Mail,
      title: "Email",
      content: "boheme.productionwedding@gmail.com",
      link: "mailto:boheme.productionwedding@gmail.com"
    },
    {
      icon: MapPin,
      title: "Localisation",
      content: "Marseille & Provence",
      link: null
    }
  ];

  const serviceOptions = [
    "Mariage",
    "Événements Pro", 
    "Événements Privés",
    "Corporate"
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 fade-in-section">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#13182c] mb-6 font-elegant">
            Parlons de Votre
            <span className="block text-[#13182c] font-script font-medium">Projet</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Chaque projet est unique. Partagez-nous vos rêves et nous créerons 
            ensemble une proposition sur-mesure qui vous ressemble.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-16">
          {/* Contact Form - Mobile First, Desktop Second Column */}
          <div className="lg:col-span-2 lg:order-2 slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Names */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#13182c] mb-2 text-subtitle">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e8dcc7] focus:border-transparent transition-all duration-300 hover:border-[#e8dcc7]/50"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#13182c] mb-2 text-subtitle">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e8dcc7] focus:border-transparent transition-all duration-300 hover:border-[#e8dcc7]/50"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#13182c] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e8dcc7] focus:border-transparent transition-all duration-300 hover:border-[#e8dcc7]/50"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#13182c] mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e8dcc7] focus:border-transparent transition-all duration-300 hover:border-[#e8dcc7]/50"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              {/* Wedding Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#13182c] mb-2">
                    Date du projet
                  </label>
                  <input
                    type="date"
                    name="projectDate"
                    value={formData.projectDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e8dcc7] focus:border-transparent transition-all duration-300 hover:border-[#e8dcc7]/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#13182c] mb-2">
                    Lieu
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e8dcc7] focus:border-transparent transition-all duration-300 hover:border-[#e8dcc7]/50"
                    placeholder="Lieu de l'événement ou ville"
                  />
                </div>
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium text-[#13182c] mb-4">
                  Services souhaités *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg border border-gray-200 hover:border-[#e8dcc7] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="rounded border-gray-300 text-[#e8dcc7] focus:ring-[#e8dcc7]"
                      />
                      <span className="text-gray-700 text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#13182c] mb-2">
                  Parlez-nous de votre projet
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e8dcc7] focus:border-transparent transition-all duration-300 resize-none hover:border-[#e8dcc7]/50"
                  placeholder="Décrivez-nous votre projet, vos attentes, le style souhaité..."
                />
              </div>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <div className={`p-4 rounded-xl flex items-center space-x-3 ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  )}
                  <span className="text-sm font-medium">{submitMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl group ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-[#13182c] text-white hover:bg-[#e8dcc7] hover:text-[#13182c] hover:scale-105 hover:shadow-2xl hover-glow'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Envoyer ma demande</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information - Mobile Second, Desktop First Column */}
          <div className="lg:col-span-1 lg:order-1 space-y-8 slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-[#13182c] mb-6">
                Contactez-nous
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = info.link ? (
                    <a href={info.link} className="text-[#e8dcc7] hover:text-[#13182c] transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    <span className="text-gray-600">{info.content}</span>
                  );

                  return (
                    <div key={index} className={`flex items-start space-x-4 hover-scale animate-fade-in-up stagger-${index + 1}`}>
                      <div className="flex-shrink-0 w-12 h-12 bg-[#e8dcc7]/20 rounded-xl flex items-center justify-center hover:bg-[#e8dcc7] hover:rotate-12 transition-all duration-300">
                        <Icon className="h-6 w-6 text-[#13182c]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#13182c] mb-1 text-subtitle">{info.title}</h4>
                        {content}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability Section */}
            <div className="bg-[#13182c] rounded-3xl p-6 text-white hover-lift animate-fade-in-up stagger-4">
              <Calendar className="h-8 w-8 text-[#e8dcc7] mb-4" />
              <h4 className="text-lg font-bold mb-2 text-subtitle">Disponibilités</h4>
              <p className="text-white/90 text-sm font-medium">
                Nous acceptons un nombre limité de projets par mois pour garantir 
                une attention personnalisée à chaque couple.
              </p>
            </div>

            {/* Response Time */}
            <div className="bg-[#13182c] rounded-3xl p-6 text-white hover-lift animate-fade-in-up stagger-5">
              <Heart className="h-8 w-8 text-[#e8dcc7] mb-4" />
              <h4 className="text-lg font-bold mb-2 text-subtitle">Réponse Garantie</h4>
              <p className="text-white/90 text-sm font-medium">
                Nous nous engageons à vous répondre sous 24h 
                avec une proposition personnalisée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;