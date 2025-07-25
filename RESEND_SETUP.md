# Configuration Resend pour Bohème Production

## Étapes de configuration

### 1. Créer un compte Resend
1. Allez sur [resend.com](https://resend.com)
2. Créez un compte gratuit
3. Vérifiez votre domaine ou utilisez un domaine de test

### 2. Obtenir la clé API
1. Dans votre dashboard Resend, allez dans "API Keys"
2. Créez une nouvelle clé API
3. Copiez la clé API

### 3. Configurer les variables d'environnement
1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez votre clé API :
```
VITE_RESEND_API_KEY=re_ZDgwUbJ5_GGJhdBT2Mjh6WMckTBaMT2R6
```

### 4. Vérifier le domaine d'envoi
Dans le fichier `src/lib/resend.ts`, modifiez l'adresse d'envoi :
```typescript
from: 'Bohème Production <votre-domaine@votre-domaine.com>',
```

### 5. Tester l'envoi
1. Lancez le projet : `npm run dev`
2. Testez le formulaire de contact
3. Vérifiez que l'email arrive bien à `boheme.productionwedding@gmail.com`

## Fonctionnalités

- ✅ Envoi automatique des formulaires de contact
- ✅ Template HTML professionnel
- ✅ Gestion des erreurs
- ✅ Messages de succès/erreur
- ✅ Validation des données
- ✅ Reset automatique du formulaire après envoi

## Sécurité

- La clé API est stockée dans les variables d'environnement
- Validation côté client et serveur
- Protection contre les envois multiples
- Gestion des erreurs sécurisée 