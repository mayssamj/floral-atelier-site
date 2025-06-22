export interface Project {
  slug: string;
  title: string;
  cover: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'lobby-sculpture',
    title: 'Lobby Floral Sculpture',
    cover: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
    description: 'A 12‑ft cascading installation for a corporate HQ entrance.',
    tags: ['corporate', 'art', 'installation'],
  },
  {
    slug: 'restaurant-canopy',
    title: 'Restaurant Canopy',
    cover: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    description: 'Seasonal canopy of fresh blooms for fine‑dining ambience.',
    tags: ['hospitality', 'seasonal', 'decor'],
  },
];
