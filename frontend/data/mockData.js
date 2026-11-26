
// ==================================================
// DONNÉES TEMPORAIRES - LIVRABLE 2
// Ces données seront remplacées par les API.
// ==================================================


// 1. CATÉGORIES MUSICALES

export const categories = [
  { id: 1, name: 'Hip-Hop', color: '#BA5D07' },
  { id: 2, name: 'Pop', color: '#E13300' },
  { id: 3, name: 'R&B', color: '#8D67AB' },
  { id: 4, name: 'Afrobeats', color: '#148A08' },
  { id: 5, name: 'Rap', color: '#1E3264' },
  { id: 6, name: 'Reggae', color: '#E8115B' },
  { id: 7, name: 'Électronique', color: '#477D95' },
  { id: 8, name: 'Jazz', color: '#B49BC8' },
];


// 2. ARTISTES

export const artists = [
  {
    id: 1,
    name: 'Drake',
    image: null,
  },
  {
    id: 2,
    name: 'The Weeknd',
    image: null,
  },
  {
    id: 3,
    name: 'Travis Scott',
    image: null,
  },
  {
    id: 4,
    name: 'Burna Boy',
    image: null,
  },
  {
    id: 5,
    name: 'SZA',
    image: null,
  },
  {
    id: 6,
    name: 'Kendrick Lamar',
    image: null,
  },
];


// 3. CHANSONS

export const songs = [
  {
    id: 1,
    title: 'One Dance',
    artistId: 1,
    artist: 'Drake',
    album: 'Views',
    categoryId: 4,
    duration: 174,
    image: null,
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Blinding Lights',
    artistId: 2,
    artist: 'The Weeknd',
    album: 'After Hours',
    categoryId: 2,
    duration: 200,
    image: null,
    isFavorite: false,
  },
  {
    id: 3,
    title: 'SICKO MODE',
    artistId: 3,
    artist: 'Travis Scott',
    album: 'ASTROWORLD',
    categoryId: 1,
    duration: 312,
    image: null,
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Last Last',
    artistId: 4,
    artist: 'Burna Boy',
    album: 'Love, Damini',
    categoryId: 4,
    duration: 172,
    image: null,
    isFavorite: true,
  },
  {
    id: 5,
    title: 'Kill Bill',
    artistId: 5,
    artist: 'SZA',
    album: 'SOS',
    categoryId: 3,
    duration: 153,
    image: null,
    isFavorite: false,
  },
  {
    id: 6,
    title: 'HUMBLE.',
    artistId: 6,
    artist: 'Kendrick Lamar',
    album: 'DAMN.',
    categoryId: 5,
    duration: 177,
    image: null,
    isFavorite: true,
  },
  {
    id: 7,
    title: 'Starboy',
    artistId: 2,
    artist: 'The Weeknd',
    album: 'Starboy',
    categoryId: 2,
    duration: 230,
    image: null,
    isFavorite: false,
  },
  {
    id: 8,
    title: 'God’s Plan',
    artistId: 1,
    artist: 'Drake',
    album: 'Scorpion',
    categoryId: 1,
    duration: 198,
    image: null,
    isFavorite: false,
  },
];


// 4. PLAYLISTS

export const playlists = [
  {
    id: 1,
    name: 'Mes favoris',
    description: 'Mes chansons préférées',
    image: null,
    color: '#6339B8',
    songIds: [1, 4, 6],
  },
  {
    id: 2,
    name: 'Chill Vibes',
    description: 'Pour se détendre',
    image: null,
    color: '#477D95',
    songIds: [1, 5, 7],
  },
  {
    id: 3,
    name: 'Workout',
    description: 'De la motivation pour le sport',
    image: null,
    color: '#BA5D07',
    songIds: [3, 6, 8],
  },
  {
    id: 4,
    name: 'Top Hits',
    description: 'Les incontournables',
    image: null,
    color: '#148A08',
    songIds: [1, 2, 3, 4, 5],
  },
];


// 5. PROFILS UTILISATEURS

export const profiles = [
  {
    id: 1,
    name: 'Utilisateur',
    role: 'user',
    image: null,
  },
  {
    id: 2,
    name: 'Administrateur',
    role: 'admin',
    image: null,
  },
];


// 6. HISTORIQUE D'ÉCOUTE TEMPORAIRE

export const history = [
  {
    id: 1,
    songId: 1,
    listenedAt: '2026-11-25T10:30:00',
  },
  {
    id: 2,
    songId: 4,
    listenedAt: '2026-11-25T09:15:00',
  },
  {
    id: 3,
    songId: 2,
    listenedAt: '2026-11-24T18:45:00',
  },
];


// 7. STATISTIQUES TEMPORAIRES

export const statistics = {
  totalSongs: 42,
  listeningMinutes: 185,
  favoriteArtist: 'Drake',
  favoriteCategory: 'Hip-Hop',
  totalPlaylists: 4,
  totalFavorites: 3,
};
