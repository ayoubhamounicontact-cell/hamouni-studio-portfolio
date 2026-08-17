/* ============================================================
   TARIFS.JS — Fichier unique de configuration des prix
   Pour modifier un prix ou une question : change UNIQUEMENT ici.
   Ne touche pas devis.html, il lit automatiquement ce fichier.
   ============================================================ */

const TARIFS = {

    disclaimer: "Cette estimation est indicative et ne constitue pas un devis définitif. Chaque projet étant unique, le devis final sera confirmé personnellement après étude de votre demande.",

    emailDestination: "ayoubhamouni.contact@gmail.com",

    googleSheetWebhook: "REMPLACER_PAR_TON_URL_APPS_SCRIPT",

    categories: {

      mariage_video: {
              label: "Mariage — Vidéo",
              basePrice: 900,
              minPrice: 900,
              fields: [
                { id: "date", label: "Date du mariage", type: "date" },
                { id: "lieu", label: "Ville / lieu", type: "text" },
                { id: "invites", label: "Nombre approximatif d'invités", type: "number" },
                { id: "heure_debut", label: "Heure de début", type: "time" },
                { id: "heure_fin", label: "Heure de fin", type: "time" },
                {
                            id: "duree", label: "Durée de présence souhaitée", type: "select-priced",
                            options: [
                              { label: "4h", price: 900 },
                              { label: "6h", price: 1200 },
                              { label: "8h", price: 1500 },
                              { label: "10h", price: 1800 },
                              { label: "12h", price: 2100 }
                                        ]
                },
                {
                            id: "moments", label: "Moments à couvrir", type: "checkbox-group",
                            options: ["Préparatifs", "Cérémonie", "Cocktail", "Réception", "Soirée"]
                },
                {
                            id: "options", label: "Options vidéo", type: "checkbox-group-priced",
                            options: [
                              { label: "Teaser", price: 250 },
                              { label: "Highlight cinématique", price: 350 },
                              { label: "Film long", price: 700 },
                              { label: "Drone", price: 200 },
                              { label: "Deuxième vidéaste", price: 450 },
                              { label: "Séance couple / pré-wedding", price: 300 },
                              { label: "Livraison express", price: 300 }
                                        ]
                }
                      ]
      },

          mariage_photo: {
                  label: "Mariage — Photographie",
                  basePrice: 700,
                  minPrice: 700,
                  fields: [
                    { id: "date", label: "Date du mariage", type: "date" },
                    { id: "lieu", label: "Ville / lieu", type: "text" },
                    { id: "invites", label: "Nombre approximatif d'invités", type: "number" },
                    {
                                id: "duree", label: "Nombre d'heures de présence", type: "select-priced",
                                options: [
                                  { label: "4h", price: 700 },
                                  { label: "6h", price: 950 },
                                  { label: "8h", price: 1200 },
                                  { label: "10h", price: 1450 }
                                            ]
                    },
                    {
                                id: "moments", label: "Moments à couvrir", type: "checkbox-group",
                                options: ["Préparatifs", "Cérémonie", "Cocktail", "Réception", "Soirée"]
                    },
                    {
                                id: "options", label: "Options photo", type: "checkbox-group-priced",
                                options: [
                                  { label: "Séance couple", price: 250 },
                                  { label: "Deuxième photographe", price: 400 },
                                  { label: "Album photo", price: 350 },
                                  { label: "Tirages", price: 150 },
                                  { label: "Livraison express", price: 250 }
                                            ]
                    }
                          ]
          },

          mariage_photo_video: {
                  label: "Mariage — Photo + Vidéo",
                  basePrice: 1400,
                  minPrice: 1400,
                  fields: [
                    { id: "date", label: "Date du mariage", type: "date" },
                    { id: "lieu", label: "Ville / lieu", type: "text" },
                    { id: "invites", label: "Nombre approximatif d'invités", type: "number" },
                    {
                                id: "duree", label: "Durée de présence souhaitée", type: "select-priced",
                                options: [
                                  { label: "6h", price: 1400 },
                                  { label: "8h", price: 1800 },
                                  { label: "10h", price: 2200 },
                                  { label: "12h", price: 2600 }
                                            ]
                    },
                    {
                                id: "moments", label: "Moments à couvrir", type: "checkbox-group",
                                options: ["Préparatifs", "Cérémonie", "Cocktail", "Réception", "Soirée"]
                    },
                    {
                                id: "options", label: "Options", type: "checkbox-group-priced",
                                options: [
                                  { label: "Teaser vidéo", price: 250 },
                                  { label: "Film long", price: 700 },
                                  { label: "Drone", price: 200 },
                                  { label: "Deuxième opérateur", price: 450 },
                                  { label: "Séance couple", price: 300 },
                                  { label: "Album photo", price: 350 },
                                  { label: "Livraison express", price: 350 }
                                            ]
                    }
                          ]
          },

          evenement: {
                  label: "Événement",
                  basePrice: 600,
                  minPrice: 600,
                  fields: [
                    {
                                id: "type_evenement", label: "Type d'événement", type: "select",
                                options: ["Gala", "Dîner", "Conférence", "Séminaire", "Anniversaire", "Lancement de produit", "Événement corporate", "Festival", "Soirée privée", "Autre"]
                    },
                    { id: "date", label: "Date", type: "date" },
                    { id: "lieu", label: "Lieu", type: "text" },
                    {
                                id: "duree", label: "Durée", type: "select-priced",
                                options: [
                                  { label: "2h", price: 600 },
                                  { label: "4h", price: 950 },
                                  { label: "6h", price: 1300 },
                                  { label: "Journée complète", price: 1800 }
                                            ]
                    },
                    { id: "participants", label: "Nombre approximatif de participants", type: "number" },
                    {
                                id: "prestation", label: "Prestation souhaitée", type: "select",
                                options: ["Photo", "Vidéo", "Photo + vidéo"]
                    },
                    {
                                id: "options", label: "Options", type: "checkbox-group-priced",
                                options: [
                                  { label: "Aftermovie", price: 400 },
                                  { label: "Interviews", price: 300 },
                                  { label: "Reels / contenus courts", price: 250 },
                                  { label: "Drone", price: 200 },
                                  { label: "Deuxième opérateur", price: 400 },
                                  { label: "Livraison express", price: 300 }
                                            ]
                    },
                    { id: "nb_interviews", label: "Si interviews : nombre approximatif", type: "number", optional: true },
                    { id: "nb_contenus_courts", label: "Si contenus courts : nombre de vidéos souhaitées", type: "number", optional: true }
                          ]
          },

          contenu_mensuel: {
                  label: "Création de contenu mensuelle",
                  basePrice: 800,
                  minPrice: 800,
                  isSubscription: true,
                  fields: [
                    {
                                id: "nb_videos", label: "Nombre de vidéos par mois", type: "select-priced",
                                options: [
                                  { label: "4", price: 800 },
                                  { label: "8", price: 1400 },
                                  { label: "12", price: 2000 },
                                  { label: "16", price: 2600 },
                                  { label: "20+", price: 3200 }
                                            ]
                    },
                    {
                                id: "jours_tournage", label: "Nombre de journées de tournage", type: "select",
                                options: ["1", "2", "3", "4+"]
                    },
                    {
                                id: "types_contenu", label: "Types de contenu", type: "checkbox-group",
                                options: ["Reels", "TikTok", "Vidéo produit", "Gastronomie", "Restaurant", "Interview", "UGC", "Lifestyle", "Storytelling", "Vidéo cinématique", "Publicité", "Behind the scenes"]
                    },
                    {
                                id: "options", label: "Options", type: "checkbox-group-priced",
                                options: [
                                  { label: "Photographie", price: 300 },
                                  { label: "Stories", price: 150 },
                                  { label: "Gestion Instagram", price: 400 },
                                  { label: "Gestion TikTok", price: 350 },
                                  { label: "Sous-titres", price: 100 },
                                  { label: "Motion design", price: 300 },
                                  { label: "Direction artistique", price: 350 },
                                  { label: "Scénario", price: 250 },
                                  { label: "Voice-over", price: 150 },
                                  { label: "Drone", price: 200 },
                                  { label: "Publication des contenus", price: 250 }
                                            ]
                    },
                    { id: "nb_lieux", label: "Nombre de lieux", type: "number" },
                    { id: "nb_produits", label: "Nombre de produits", type: "number" },
                    { id: "nb_personnes", label: "Nombre de personnes", type: "number" },
                    {
                                id: "engagement", label: "Durée de l'engagement", type: "select",
                                options: ["Ponctuel", "3 mois", "6 mois", "12 mois"]
                    }
                          ]
          },

          film_marque: {
                  label: "Vidéo cinématique / Film de marque",
                  basePrice: 1500,
                  minPrice: 1500,
                  needsCustomQuote: true,
                  fields: [
                    {
                                id: "objectif", label: "Objectif", type: "select",
                                options: ["Présenter une marque", "Présenter un produit", "Raconter une histoire", "Lancement", "Publicité", "Film institutionnel", "Réseaux sociaux", "Autre"]
                    },
                    {
                                id: "duree_finale", label: "Durée finale souhaitée", type: "select",
                                options: ["30 secondes", "60 secondes", "90 secondes", "2 minutes", "3 minutes", "Plus de 3 minutes"]
                    },
                    {
                                id: "production", label: "Production", type: "select-priced",
                                options: [
                                  { label: "Demi-journée", price: 1500 },
                                  { label: "Journée complète", price: 2400 },
                                  { label: "Plusieurs jours", price: 4000 }
                                            ]
                    },
                    { id: "nb_lieux", label: "Nombre de lieux", type: "number" },
                    { id: "nb_personnes", label: "Nombre de personnes", type: "number" },
                    {
                                id: "options", label: "Options", type: "checkbox-group-priced",
                                options: [
                                  { label: "Direction artistique", price: 350 },
                                  { label: "Scénario", price: 300 },
                                  { label: "Storyboard", price: 250 },
                                  { label: "Interview", price: 300 },
                                  { label: "Voice-over", price: 150 },
                                  { label: "Motion design", price: 350 },
                                  { label: "Drone", price: 200 },
                                  { label: "Acteur / modèle", price: 400 },
                                  { label: "Studio", price: 500 },
                                  { label: "Recherche de lieu", price: 200 },
                                  { label: "Sound design avancé", price: 300 },
                                  { label: "Musique premium", price: 150 }
                                            ]
                    }
                          ]
          },

          montage_video: {
                  label: "Montage vidéo",
                  basePrice: 300,
                  minPrice: 300,
                  fields: [
                    {
                                id: "type_montage", label: "Type", type: "select",
                                options: ["Reel", "TikTok", "YouTube", "Aftermovie", "Publicité", "Corporate", "Wedding film", "Film cinématique", "Interview", "Autre"]
                    },
                    {
                                id: "duree_finale", label: "Durée finale", type: "select-priced",
                                options: [
                                  { label: "30 sec", price: 300 },
                                  { label: "60 sec", price: 350 },
                                  { label: "2 min", price: 450 },
                                  { label: "5 min", price: 650 },
                                  { label: "10 min", price: 900 },
                                  { label: "20 min", price: 1300 },
                                  { label: "30 min", price: 1700 },
                                  { label: "45 min", price: 2200 },
                                  { label: "60 min", price: 2700 }
                                            ]
                    },
                    {
                                id: "quantite_rushes", label: "Quantité de rushes", type: "select",
                                options: ["Moins de 30 minutes", "30 min à 1h", "1 à 3h", "3 à 5h", "5 à 10h", "Plus de 10h"]
                    },
                    { id: "fournit_rushes", label: "Vous fournissez les rushes ?", type: "select", options: ["Oui", "Non"] },
                    {
                                id: "options", label: "Options", type: "checkbox-group-priced",
                                options: [
                                  { label: "Color grading", price: 150 },
                                  { label: "Sound design", price: 150 },
                                  { label: "Sous-titres", price: 80 },
                                  { label: "Motion design", price: 250 },
                                  { label: "Transitions avancées", price: 100 },
                                  { label: "Recherche musicale", price: 80 },
                                  { label: "Nettoyage audio", price: 100 },
                                  { label: "Voice-over", price: 150 },
                                  { label: "Livraison express", price: 200 }
                                            ]
                    }
                          ]
          },

          photographie: {
                  label: "Photographie",
                  basePrice: 350,
                  minPrice: 350,
                  fields: [
                    {
                                id: "type_photo", label: "Type", type: "select",
                                options: ["Produit", "Restaurant", "Gastronomie", "Corporate", "Portrait", "Événement", "Mode", "Immobilier", "Réseaux sociaux", "Autre"]
                    },
                    {
                                id: "duree", label: "Durée", type: "select-priced",
                                options: [
                                  { label: "1h", price: 350 },
                                  { label: "2h", price: 550 },
                                  { label: "Demi-journée", price: 800 },
                                  { label: "Journée complète", price: 1400 }
                                            ]
                    },
                    { id: "nb_produits", label: "Nombre de produits", type: "number", optional: true },
                    { id: "nb_personnes", label: "Nombre de personnes", type: "number", optional: true },
                    { id: "nb_photos_finales", label: "Nombre de photos finales souhaitées", type: "number" },
                    { id: "nb_lieux", label: "Nombre de lieux", type: "number" },
                    {
                                id: "options", label: "Options", type: "checkbox-group-priced",
                                options: [
                                  { label: "Retouches avancées", price: 150 },
                                  { label: "Photos supplémentaires", price: 100 },
                                  { label: "Livraison express", price: 150 }
                                            ]
                    }
                          ]
          },

          site_vitrine: {
                  label: "Site internet vitrine",
                  basePrice: 1200,
                  minPrice: 1200,
                  fields: [
                    {
                                id: "formule", label: "Formule", type: "select-priced",
                                options: [
                                  { label: "Essential", price: 1200 },
                                  { label: "Signature", price: 1800 }
                                            ]
                    },
                    { id: "nb_pages", label: "Nombre de pages", type: "number" },
                    {
                                id: "type_site", label: "Type de site", type: "select",
                                options: ["Portfolio", "Vitrine entreprise", "Blog", "Landing page", "Autre"]
                    },
                    {
                                id: "design", label: "Design", type: "select-priced",
                                options: [
                                  { label: "Standard", price: 0 },
                                  { label: "Personnalisé", price: 400 }
                                            ]
                    },
                    {
                                id: "options", label: "Fonctionnalités", type: "checkbox-group-priced",
                                options: [
                                  { label: "Galerie / Portfolio", price: 150 },
                                  { label: "Formulaire de contact", price: 100 },
                                  { label: "Réservation en ligne", price: 300 },
                                  { label: "Blog", price: 250 },
                                  { label: "Multilingue", price: 350 },
                                  { label: "SEO avancé", price: 300 },
                                  { label: "Animations", price: 200 },
                                  { label: "Intégration réseaux sociaux", price: 100 },
                                  { label: "Copywriting / rédaction", price: 300 },
                                  { label: "Nom de domaine + hébergement", price: 100 },
                                  { label: "Urgence / livraison rapide", price: 250 }
                                            ]
                    }
                          ]
          },

          shopify: {
                  label: "Boutique Shopify",
                  basePrice: 2500,
                  minPrice: 2500,
                  fields: [
                    {
                                id: "formule", label: "Formule", type: "select-priced",
                                options: [
                                  { label: "Starter", price: 2500 },
                                  { label: "Premium", price: 4000 }
                                            ]
                    },
                    { id: "nb_produits", label: "Nombre de produits", type: "number" },
                    { id: "nb_collections", label: "Nombre de collections", type: "number" },
                    {
                                id: "design", label: "Design", type: "select-priced",
                                options: [
                                  { label: "Thème Shopify standard", price: 0 },
                                  { label: "Design personnalisé", price: 700 },
                                  { label: "Personnalisation avancée", price: 1200 }
                                            ]
                    },
                    {
                                id: "options", label: "Options", type: "checkbox-group-priced",
                                options: [
                                  { label: "Migration d'une ancienne boutique", price: 500 },
                                  { label: "Applications spécifiques", price: 250 },
                                  { label: "Filtres avancés", price: 200 },
                                  { label: "Multilingue", price: 400 },
                                  { label: "Création des fiches produits", price: 300 },
                                  { label: "SEO", price: 300 },
                                  { label: "Fonctionnalités e-commerce avancées", price: 500 }
                                            ]
                    }
                          ]
          },

          autre: {
                  label: "Autre projet",
                  basePrice: 0,
                  minPrice: 0,
                  needsCustomQuote: true,
                  fields: [
                    { id: "description_type", label: "En quelques mots, de quoi s'agit-il ?", type: "text" }
                          ]
          }
    }
};
