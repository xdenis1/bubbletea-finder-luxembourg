import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const BubbleTeaCard = ({ cafe }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`inline ${index < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={cafe.image}
        alt={cafe.name}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle className="text-xl font-bold text-purple-800">
          {cafe.name}
        </CardTitle>
        <div className="flex items-center gap-1 mt-2">
          {renderStars(cafe.rating)}
          <span className="ml-2 text-sm text-gray-600">
            {cafe.rating}/5
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          {cafe.description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} />
            <span className="text-sm">{cafe.address}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} />
            <span className="text-sm">{cafe.distance}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BubbleTeaCard;