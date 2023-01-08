import axios from 'axios';

interface TokenResponse {
  access_token: string;
}

// Fonction d'authentification
async function authenticate(username: string, password: string): Promise<void> {
  try {
    // Envoie une requête POST à l'API avec les données d'authentification
    const response = await axios.post<TokenResponse>('http://localhost:5000/user/', {
      username,
      password,
    });

    // Si la réponse est réussie, enregistre le jeton d'accès dans le stockage local
    localStorage.setItem('access_token', response.data.access_token);
  } catch (error) {
    // Si la réponse a échoué, affiche l'erreur
    console.error(error);
  }
}

// Fonction de déconnexion
function logout(): void {
  // Supprime le jeton d'accès du stockage local
  localStorage.removeItem('access_token');
}

// Fonction pour vérifier si l'utilisateur est authentifié
function isAuthenticated(): boolean {
  // Vérifie s'il y a un jeton d'accès dans le stockage local
  return localStorage.getItem('access_token') !== null;
}

export default {
  authenticate,
  logout,
  isAuthenticated,
};
