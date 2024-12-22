import React from 'react';
import BubbleTeaCard from '../components/BubbleTeaCard';

const Home = () => {
  const cafes = [
    {
      name: 'LUX BOBA',
      address: 'Belval Plaza, 7 Avenue du Rock\'n\'Roll, Esch-Belval',
      rating: 4.7,
      image: '/api/placeholder/600/400',
      description: 'Situé dans le centre commercial Belval Plaza, LUX BOBA vous propose une large sélection de bubble teas dans une ambiance moderne et accueillante.',
      distance: '2.5 km du centre'
    },
    {
      name: 'Moonbo Belval',
      address: '7 Avenue du Rock\'n\'Roll, Esch-Belval',
      rating: 3.8,
      image: '/api/placeholder/600/400',
      description: 'Une pâtisserie-salon de thé qui combine délicieuses pâtisseries et bubble teas rafraîchissants.',
      distance: '2.5 km du centre'
    },
    {
      name: 'A-tea',
      address: '9 Avenue du Swing, Esch-Belval',
      rating: 5.0,
      image: '/api/placeholder/600/400',
      description: 'Un établissement hautement noté offrant une expérience authentique du bubble tea dans un cadre contemporain.',
      distance: '2.7 km du centre'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-purple-800">
            Bubble Tea à Esch-sur-Alzette
          </h1>
          <p className="text-lg text-gray-600">
            Découvrez les meilleurs endroits pour déguster du bubble tea près de chez vous
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cafes.map((cafe) => (
            <BubbleTeaCard key={cafe.name} cafe={cafe} />
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-600">
          <p className="text-sm">
            Les notations sont basées sur les avis Google Maps
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;