import React from 'react';
import { X, ArrowLeft } from 'lucide-react';

interface LegalPagesProps {
  currentPage: 'mentions' | 'privacy' | null;
  onClose: () => void;
}

const LegalPages: React.FC<LegalPagesProps> = ({ currentPage, onClose }) => {
  if (!currentPage) return null;

  const renderMentionsLegales = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#13182c] mb-6">Mentions Légales</h1>
        <p className="text-gray-600 mb-8">
          Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 
          pour la Confiance dans l'économie numérique, dite L.C.E.N.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Informations légales</h2>
        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-[#13182c] mb-2">Raison sociale</h3>
            <p className="text-gray-700">Bohème Production</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#13182c] mb-2">Forme juridique</h3>
            <p className="text-gray-700">Micro-entreprise</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#13182c] mb-2">Gérants</h3>
            <p className="text-gray-700">Gary Beaujoin & Kilian Abisror</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#13182c] mb-2">Adresse</h3>
            <p className="text-gray-700">Marseille & Provence</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#13182c] mb-2">Email</h3>
            <p className="text-gray-700">boheme.productionwedding@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#13182c] mb-2">Téléphone</h3>
            <p className="text-gray-700">Kilian Abisror : 06 11 07 86 07<br/>Gary Beaujoin : 06 08 77 40 23</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Hébergement</h2>
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-gray-700 mb-2">
            Ce site est hébergé par Vercel, Inc.
          </p>
          <p className="text-gray-700">
            340 S Lemon Ave #4133<br/>
            Walnut, CA 91789<br/>
            États-Unis
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Propriété intellectuelle</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
            et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
            les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
            formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Responsabilité</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
            à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
          </p>
          <p>
            Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien 
            vouloir le signaler par email, à l'adresse boheme.productionwedding@gmail.com, en décrivant le problème 
            de la façon la plus précise possible.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Liens hypertextes</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Les sites internet peuvent offrir des liens vers d'autres sites internet ou d'autres ressources 
            disponibles sur Internet. Bohème Production ne dispose d'aucun moyen pour contrôler les sites 
            en connexion avec ses sites internet.
          </p>
          <p>
            Bohème Production ne répond pas de la disponibilité de tels sites et sources externes, ni ne la 
            garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, 
            résultant du contenu de ces sites ou sources externes.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Droit applicable</h2>
        <div className="text-gray-700">
          <p>
            Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit 
            français, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après l'échec 
            de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents 
            pour connaître de ce litige.
          </p>
        </div>
      </section>
    </div>
  );

  const renderPolitiqueConfidentialite = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#13182c] mb-6">Politique de Confidentialité</h1>
        <p className="text-gray-600 mb-8">
          Cette politique de confidentialité décrit comment Bohème Production collecte, utilise et protège 
          vos informations personnelles lorsque vous utilisez notre site web.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Collecte des informations</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Nous collectons des informations lorsque vous nous contactez via notre formulaire de contact, 
            par email ou par téléphone. Ces informations peuvent inclure :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Date de mariage</li>
            <li>Lieu de réception</li>
            <li>Nombre d'invités</li>
            <li>Budget envisagé</li>
            <li>Détails de votre projet</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Utilisation des informations</h2>
        <div className="space-y-4 text-gray-700">
          <p>Les informations que nous collectons sont utilisées pour :</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Répondre à vos demandes de renseignements</li>
            <li>Établir des devis personnalisés</li>
            <li>Organiser et planifier vos prestations</li>
            <li>Vous tenir informé de nos services</li>
            <li>Améliorer notre site web et nos services</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Protection des données</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Nous mettons en œuvre diverses mesures de sécurité pour protéger vos informations personnelles :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Chiffrement des données sensibles</li>
            <li>Accès restreint aux informations personnelles</li>
            <li>Stockage sécurisé des données</li>
            <li>Suppression régulière des données obsolètes</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Partage des informations</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles à des tiers, 
            sauf dans les cas suivants :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Avec votre consentement explicite</li>
            <li>Pour respecter une obligation légale</li>
            <li>Avec nos prestataires de services (hébergement, galeries photos) sous contrat de confidentialité</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Cookies</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont 
            de petits fichiers qu'un site ou son prestataire de services transfère sur le disque dur de 
            votre ordinateur par l'intermédiaire de votre navigateur Web.
          </p>
          <p>
            Vous pouvez choisir de désactiver les cookies dans les paramètres de votre navigateur, mais 
            cela peut affecter le fonctionnement de certaines parties du site.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Vos droits</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à l'adresse : boheme.productionwedding@gmail.com
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Conservation des données</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités 
            pour lesquelles elles ont été collectées :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Données de contact : 3 ans après le dernier contact</li>
            <li>Données contractuelles : 10 ans après la fin du contrat</li>
            <li>Photos et vidéos : selon les termes du contrat de prestation</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Modifications</h2>
        <div className="text-gray-700">
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
            Les modifications seront publiées sur cette page avec une date de mise à jour. Nous vous 
            encourageons à consulter régulièrement cette page.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#13182c] mb-4">Contact</h2>
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-gray-700 mb-4">
            Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter :
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email :</strong> boheme.productionwedding@gmail.com</p>
            <p><strong>Téléphone :</strong> Kilian Abisror : 06 11 07 86 07<br/>Gary Beaujoin : 06 08 77 40 23</p>
            <p><strong>Adresse :</strong> Marseille & Provence</p>
          </div>
        </div>
      </section>

      <div className="text-sm text-gray-500 pt-8 border-t border-gray-200">
        <p>Dernière mise à jour : 1er janvier 2025</p>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#13182c] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour</span>
          </button>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {currentPage === 'mentions' && renderMentionsLegales()}
          {currentPage === 'privacy' && renderPolitiqueConfidentialite()}
        </div>
      </div>
    </div>
  );
};

export default LegalPages;