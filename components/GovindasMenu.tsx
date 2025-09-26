'use client';
import React, { useState } from 'react';
import { Search, Filter, Star, Leaf, Shield } from 'lucide-react';

const GovindasMenu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTag, setFilterTag] = useState('all');
 
  //testing the release change
  const menuItems = [
    {
      id: 1,
      name: 'Classic Masala Dosa',
      price: '$12',
      description:
        'Think of a giant, crispy golden crepe made from fermented rice batter, filled with spiced potatoes and served with coconut chutney and tangy lentil soup for dipping',
      ingredients:
        'Rice flour, lentils, potatoes, turmeric, cumin, mustard seeds, curry leaves, coconut, ginger',
      tags: ['GF', 'Vegan'],
      allergies: ['None'],
      image: '🥞',
      category: 'mains',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Samosa Trio',
      price: '$8',
      description:
        'Crispy triangular pastries stuffed with seasoned potatoes and peas - like Indian empanadas but crunchier! Served with mint and tamarind chutneys',
      ingredients:
        'Wheat flour, potatoes, green peas, ginger, garlic, coriander, cumin, oil',
      tags: ['Vegan'],
      allergies: ['Gluten'],
      image: '🥟',
      category: 'appetizers',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Pani Puri Party Pack',
      price: '$10',
      description:
        "NYC's most Instagrammable snack! Crispy hollow shells you fill with spiced water, chutneys, and chickpeas. It's like edible bubble tea meets street food",
      ingredients:
        'Semolina, chickpeas, tamarind, mint, coriander, chaat masala, potatoes',
      tags: ['Vegan'],
      allergies: ['Gluten'],
      image: '🫧',
      category: 'street-food',
      rating: 4.9,
    },
    {
      id: 4,
      name: 'Mumbai Bhel Puri',
      price: '$9',
      description:
        "Crunchy snack mix that's like a healthy version of trail mix - puffed rice, sev noodles, vegetables, and tangy chutneys all tossed together",
      ingredients:
        'Puffed rice, sev, onions, tomatoes, coriander, tamarind chutney, mint chutney',
      tags: ['GF', 'Vegan'],
      allergies: ['None'],
      image: '🥗',
      category: 'street-food',
      rating: 4.6,
    },
    {
      id: 5,
      name: 'Coconut Rice Bowl',
      price: '$11',
      description:
        'Fragrant basmati rice cooked with coconut milk and curry leaves, topped with roasted cashews - comfort food that tastes like vacation',
      ingredients:
        'Basmati rice, coconut milk, curry leaves, mustard seeds, cashews, turmeric',
      tags: ['GF', 'Vegan'],
      allergies: ['Tree Nuts'],
      image: '🥥',
      category: 'mains',
      rating: 4.5,
    },
    {
      id: 6,
      name: 'Masala Chai Latte',
      price: '$5',
      description:
        'Not your coffee shop chai! Authentic spiced tea with cardamom, ginger, and cinnamon, made with oat milk - warming and energizing',
      ingredients:
        'Black tea, cardamom, ginger, cinnamon, cloves, oat milk, organic sugar',
      tags: ['GF', 'Vegan'],
      allergies: ['None'],
      image: '☕',
      category: 'beverages',
      rating: 4.7,
    },
    {
      id: 7,
      name: 'Mango Kulfi Popsicle',
      price: '$6',
      description:
        "Creamy frozen dessert that's like Indian gelato on a stick - rich mango flavor with cardamom and pistachios",
      ingredients:
        'Mango puree, coconut cream, cardamom, pistachios, organic sugar',
      tags: ['GF', 'Vegan'],
      allergies: ['Tree Nuts'],
      image: '🥭',
      category: 'desserts',
      rating: 4.8,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥟' },
    { id: 'mains', name: 'Mains', icon: '🍛' },
    { id: 'street-food', name: 'Street Food', icon: '🎪' },
    { id: 'beverages', name: 'Beverages', icon: '☕' },
    { id: 'desserts', name: 'Desserts', icon: '🍨' },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterTag === 'all' || item.category === filterTag;
    return matchesSearch && matchesFilter;
  });

  const TagBadge = ({ tag }: { tag: string }) => {
    const tagStyles: { [key: string]: string } = {
      GF: 'bg-green-100 text-green-800 border-green-200',
      Vegan: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium border ${
          tagStyles[tag] || 'bg-gray-100 text-gray-800'
        }`}
      >
        {tag === 'GF' && <Leaf className='w-3 h-3 inline mr-1' />}
        {tag === 'Vegan' && <Shield className='w-3 h-3 inline mr-1' />}
        {tag}
      </span>
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50'>
      {/* Header */}
      <header className='bg-white shadow-sm sticky top-0 z-50 border-b border-orange-100'>
        <div className='px-4 py-4'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold text-orange-900'>🕉️ Govindas</h1>
            <p className='text-sm text-orange-700 mt-1'>
              Authentic Indian • Vegandale Festival NYC
            </p>
            <div className='flex justify-center items-center mt-2 space-x-4 text-xs text-orange-600'>
              <span className='flex items-center'>
                <Star className='w-3 h-3 mr-1 fill-current' />
                4.7 Rating
              </span>
              <span>📍 Brooklyn, NY</span>
            </div>
          </div>
        </div>
      </header>

      <div className='px-4 py-6 max-w-md mx-auto'>
        {/* Search Bar */}
        <div className='relative mb-6'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
          <input
            type='text'
            placeholder='Search menu items...'
            className='w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-gray-400'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className='flex overflow-x-auto space-x-2 mb-6 pb-2'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilterTag(category.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filterTag === category.id
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-orange-50'
              }`}
            >
              <span className='mr-2'>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className='space-y-4'>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow'
            >
              <div className='p-5'>
                <div className='flex justify-between items-start mb-3'>
                  <div className='flex items-center space-x-3'>
                    <span className='text-2xl'>{item.image}</span>
                    <div>
                      <h3 className='font-bold text-gray-900 text-lg'>
                        {item.name}
                      </h3>
                      <div className='flex items-center space-x-1 mt-1'>
                        <Star className='w-3 h-3 text-yellow-400 fill-current' />
                        <span className='text-xs text-gray-600'>
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className='text-xl font-bold text-orange-600'>
                    {item.price}
                  </span>
                </div>

                <p className='text-gray-700 text-sm mb-4 leading-relaxed'>
                  {item.description}
                </p>

                <div className='space-y-3'>
                  <div className='flex flex-wrap gap-2'>
                    {item.tags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>

                  <div className='text-xs text-gray-600'>
                    <p>
                      <span className='font-medium'>Ingredients:</span>{' '}
                      {item.ingredients}
                    </p>
                  </div>

                  {item.allergies.length > 0 &&
                    item.allergies[0] !== 'None' && (
                      <div className='text-xs text-red-600 bg-red-50 p-2 rounded-lg'>
                        <span className='font-medium'>⚠️ Allergies:</span>{' '}
                        {item.allergies.join(', ')}
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg'>No items match your search</p>
            <p className='text-gray-400 text-sm mt-2'>
              Try a different search term or category
            </p>
          </div>
        )}

        {/* Footer */}
        <div className='mt-12 text-center py-8 border-t border-gray-200'>
          <p className='text-gray-600 text-sm mb-2'>
            🌱 100% Plant-Based • Made with Love
          </p>
          <p className='text-gray-500 text-xs'>
            Visit us at Vegandale Festival, Brooklyn
          </p>
        </div>
      </div>
    </div>
  );
};

export default GovindasMenu;
