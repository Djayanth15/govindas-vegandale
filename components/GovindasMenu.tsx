// 'use client';
// import React from 'react';
// import { Star, Leaf, Shield } from 'lucide-react';

// const GovindasMenu = () => {
//   const menuItems = [
//     {
//       id: 1,
//       name: 'Dosa',
//       price: '$14.99',
//       description:
//         'Crispy golden dosa, tangy and savory, paired with Sauces that burst with flavor.',
//       fillings: 'Choose your filling - Mysore Masala, Masala, Tofu',
//       tags: ['NF', 'GF'],
//       image: '🥞',
//       category: 'mains',
//       rating: 4.9,
//     },
//     {
//       id: 2,
//       name: 'Khichdi',
//       price: '$14.99',
//       description:
//         'A wholesome blend of lentils, rice, and mild spices — light, nourishing, and deliciously comforting.',
//       subtitle: 'Yogic healthy stew',
//       tags: ['NF', 'GF'],
//       image: '🍲',
//       category: 'mains',
//       rating: 4.7,
//     },
//     {
//       id: 3,
//       name: 'Pav Bhaji',
//       price: '$11.99',
//       description:
//         'Soft pav, sizzling butter, and a rich, Spices-loaded bhaji that melts in your mouth',
//       deal: '$3 for extra Pav (bread)',
//       tags: ['NF'],
//       image: '🍞',
//       category: 'street-food',
//       rating: 4.8,
//     },
//     {
//       id: 4,
//       name: 'Pani Puri',
//       price: '$9.99',
//       description:
//         'A crunch filled with zesty, spicy, and sweet flavors — the magic of pani puri.',
//       deal: '8 pieces per serving',
//       tags: ['NF'],
//       image: '🫧',
//       category: 'street-food',
//       rating: 4.9,
//     },
//     {
//       id: 5,
//       name: 'Samosa',
//       price: '$6.99',
//       description:
//         'Crispy golden pastry stuffed with spicy, flavorful potatoes — the classic samosa delight.',
//       deal: 'Get 2 for $12.99',
//       tags: ['NF'],
//       image: '🥟',
//       category: 'appetizers',
//       rating: 4.6,
//     },
//     {
//       id: 6,
//       name: 'Sprouts',
//       price: '$2.99',
//       description:
//         "Fresh, crunchy sprouted legumes tossed with vibrant chutneys and spices. The perfect guilt-free snack that'll make your body thank you - clean eating never tasted this good!",
//       tags: ['NF', 'GF'],
//       image: '🌱',
//       category: 'healthy',
//       rating: 4.5,
//     },
//   ];

//   const TagBadge = ({ tag }: { tag: string }) => {
//     const tagStyles: { [key: string]: string } = {
//       NF: 'bg-blue-100 text-blue-800 border-blue-200',
//       GF: 'bg-green-100 text-green-800 border-green-200',
//     };

//     const tagNames: { [key: string]: string } = {
//       NF: 'Nut Free',
//       GF: 'Gluten Free',
//     };

//     return (
//       <span
//         className={`px-2 py-1 rounded-full text-xs font-medium border ${
//           tagStyles[tag] || 'bg-gray-100 text-gray-800'
//         }`}
//       >
//         {tag === 'GF' && <Leaf className='w-3 h-3 inline mr-1' />}
//         {tag === 'NF' && <Shield className='w-3 h-3 inline mr-1' />}
//         {tagNames[tag] || tag}
//       </span>
//     );
//   };

//   return (
//     <div className='min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50'>
//       {/* Header */}
//       <header className='bg-white shadow-sm sticky top-0 z-50 border-b border-orange-100'>
//         <div className='px-4 py-6'>
//           <div className='text-center'>
//             <h1 className='text-3xl font-bold text-orange-900 mb-2'>
//               Govinda's Canteen
//             </h1>
//             <h2 className='text-xl font-semibold text-orange-700 mb-2'>
//               Vegandale Menu
//             </h2>
//             <p className='text-sm text-orange-600 mb-3'>
//               Authentic Indian • 100% Plant-Based
//             </p>
//             <div className='flex justify-center items-center space-x-4 text-xs text-orange-600'>
//               <span className='flex items-center'>
//                 <Star className='w-3 h-3 mr-1 fill-current' />
//                 4.7 Rating
//               </span>
//               <a
//                 href="https://www.google.com/maps/place/Govinda's+Vegetarian+Lunch/@40.68765,-73.9847445,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25bb2daca439f:0xa940a13ce745c5ff!8m2!3d40.687646!4d-73.9821696!16s%2Fg%2F11bc713nvq?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 className='flex items-center text-blue-600 hover:text-blue-800 transition-all duration-200 font-medium no-underline'
//               >
//                 <span className='mr-1'>📍</span>
//                 <span className='underline decoration-dotted underline-offset-2 hover:decoration-solid'>
//                   Brooklyn, NY
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className='px-4 py-6 max-w-md mx-auto'>
//         {/* Menu Items */}
//         <div className='space-y-5'>
//           {menuItems.map((item) => (
//             <div
//               key={item.id}
//               className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow'
//             >
//               <div className='p-5'>
//                 <div className='flex justify-between items-start mb-3'>
//                   <div className='flex items-center space-x-3'>
//                     <span className='text-3xl'>{item.image}</span>
//                     <div>
//                       <h3 className='font-bold text-gray-900 text-xl'>
//                         {item.name}
//                       </h3>
//                       <div className='flex items-center space-x-1 mt-1'>
//                         <Star className='w-3 h-3 text-yellow-400 fill-current' />
//                         <span className='text-xs text-gray-600'>
//                           {item.rating}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <span className='text-2xl font-bold text-orange-600'>
//                     {item.price}
//                   </span>
//                 </div>

//                 {item.subtitle && (
//                   <p className='text-orange-600 text-sm font-medium mb-2 italic'>
//                     {item.subtitle}
//                   </p>
//                 )}

//                 <p className='text-gray-700 text-sm mb-3 leading-relaxed'>
//                   {item.description}
//                 </p>

//                 {item.fillings && (
//                   <div className='bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 p-3 rounded-r-lg mb-3'>
//                     <p className='text-purple-800 text-sm font-medium flex items-center'>
//                       <span className='text-purple-500 mr-2'>🌟</span>
//                       {item.fillings}
//                     </p>
//                   </div>
//                 )}

//                 {item.deal && (
//                   <div className='bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-3 rounded-r-lg mb-3'>
//                     <p className='text-green-800 text-sm font-medium flex items-center'>
//                       <span className='text-green-500 mr-2'>🎉</span>
//                       {item.deal}
//                     </p>
//                   </div>
//                 )}

//                 <div className='flex flex-wrap gap-2 mt-4'>
//                   {item.tags.map((tag) => (
//                     <TagBadge key={tag} tag={tag} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className='mt-12 text-center py-8 border-t border-gray-200'>
//           <p className='text-gray-600 text-sm mb-2'>
//             🌱 100% Plant-Based • Made with Love
//           </p>
//           <p className='text-gray-500 text-xs mb-4'>
//             NF - Nut Free, GF - Gluten Free
//           </p>

//           {/* Contact & Services */}
//           <div className='space-y-4 mb-6'>
//             <div className='bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 border border-pink-200'>
//               <p className='text-gray-700 text-sm font-medium mb-2'>
//                 📱 Follow us on Instagram
//               </p>
//               <a
//                 href='https://www.instagram.com/govindas_canteen?utm_source=ig_web_button_share_sheet&igsh=a3MycnJ0ZmdoeWZm'
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 className='text-pink-600 hover:text-pink-800 transition-colors font-medium text-sm underline decoration-dotted hover:decoration-solid'
//               >
//                 @govindascanteen
//               </a>
//             </div>

//             <div className='bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200'>
//               <p className='text-gray-700 text-sm font-medium mb-2'>
//                 🎉 Catering Available
//               </p>
//               <p className='text-gray-600 text-xs mb-2'>
//                 Perfect for parties, events & gatherings
//               </p>
//               <a
//                 href='tel:+16465080961'
//                 className='text-orange-600 hover:text-orange-800 transition-colors font-medium text-sm'
//               >
//                 📞 +1 (646) 508-0961
//               </a>
//             </div>

//             <div className='bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200'>
//               <p className='text-gray-700 text-sm font-medium mb-2'>
//                 🚚 Daily Delivery Available
//               </p>
//               <p className='text-gray-600 text-xs mb-2'>
//                 Order fresh meals delivered daily
//               </p>
//               <a
//                 href='https://chat.whatsapp.com/LgPCqbPpdeg5OoJ3nLjFer?mode=ems_wa_t'
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 className='text-green-600 hover:text-green-800 transition-colors font-medium text-sm underline decoration-dotted hover:decoration-solid'
//               >
//                 💬 Order on WhatsApp
//               </a>
//             </div>
//           </div>

//           <p className='text-gray-500 text-xs mb-3'>
//             Visit us at Vegandale Festival, Brooklyn
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GovindasMenu;

'use client';
import React from 'react';
import {
  Star,
  Leaf,
  Shield,
  MapPin,
  Instagram,
  Phone,
  MessageCircle,
} from 'lucide-react';

const GovindasMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Dosa',
      price: '$10',
      description:
        'Crispy golden dosa, tangy and savory, paired with sauces that burst with flavor.',
      fillings: 'Filling - Masala Potato',
      tags: ['NF', 'GF'],
      image: '🥞',
      category: 'mains',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Yogic Khichdi',
      price: '$5',
      description:
        'A wholesome blend of lentils, rice, and mild spices — light, nourishing, and deliciously comforting.',
      tags: ['NF', 'GF'],
      image: '🍲',
      category: 'mains',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Pav Bhaji',
      price: '$10',
      description:
        'Soft pav, sizzling butter, and a rich, spices-loaded bhaji that melts in your mouth',
      deal: '$3 for extra Pav (bread)',
      tags: ['NF'],
      image: '🍞',
      category: 'street-food',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Pani Puri',
      price: '$8',
      description:
        'A crunch filled with zesty, spicy, and sweet flavors — the magic of pani puri.',
      deal: '8 pieces per serving',
      tags: ['NF'],
      image: '🫧',
      category: 'street-food',
      rating: 4.9,
    },
    {
      id: 5,
      name: 'Samosa',
      price: '$5',
      description:
        'Crispy golden pastry stuffed with spicy, flavorful potatoes — the classic samosa delight.',
      tags: ['NF'],
      deal: 'Get 2 for $9',
      image: '🥟',
      category: 'appetizers',
      rating: 4.6,
    },
    {
      id: 6,
      name: 'Sprouts',
      price: '$3',
      description:
        "Fresh, crunchy sprouted legumes tossed with vibrant chutneys and spices. The perfect guilt-free snack that'll make your body thank you.",
      tags: ['NF', 'GF'],
      image: '🌱',
      category: 'healthy',
      rating: 4.5,
    },
  ];

  const TagBadge = ({ tag }: { tag: string }) => {
    const tagStyles: { [key: string]: string } = {
      NF: 'bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm',
      GF: 'bg-blue-50 text-blue-700 border-blue-200 shadow-sm',
    };

    const tagNames: { [key: string]: string } = {
      NF: 'Nut Free',
      GF: 'Gluten Free',
    };

    return (
      <span
        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${
          tagStyles[tag] || 'bg-gray-50 text-gray-700 border-gray-200'
        }`}
      >
        {tag === 'GF' && <Leaf className='w-3 h-3 mr-1.5' />}
        {tag === 'NF' && <Shield className='w-3 h-3 mr-1.5' />}
        {tagNames[tag] || tag}
      </span>
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50'>
      {/* Header */}
      <header className='bg-white/80 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-orange-100/50'>
        <div className='px-6 py-8'>
          <div className='max-w-lg mx-auto text-center'>
            {/* Logo/Brand */}
            <div className='mb-6'>
              <h1 className='text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2'>
                Govinda's Canteen
              </h1>
              <h2 className='text-xl font-semibold text-orange-800 mb-2'>
                Vegandale Menu
              </h2>
              <p className='text-orange-700 font-medium'>
                Authentic Indian • 100% Plant-Based
              </p>
            </div>

            {/* Stats */}
            <div className='flex justify-center items-center space-x-6 text-sm'>
              <div className='flex items-center bg-yellow-50 px-3 py-2 rounded-full border border-yellow-200'>
                <Star className='w-4 h-4 mr-1.5 text-yellow-500 fill-current' />
                <span className='font-semibold text-yellow-800'>4.7</span>
              </div>
              <a
                href="https://www.google.com/maps/place/Govinda's+Vegetarian+Lunch/@40.68765,-73.9847445,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25bb2daca439f:0xa940a13ce745c5ff!8m2!3d40.687646!4d-73.9821696!16s%2Fg%2F11bc713nvq?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center bg-blue-50 px-3 py-2 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors group'
              >
                <MapPin className='w-4 h-4 mr-1.5 text-blue-600' />
                <span className='font-semibold text-blue-800 group-hover:text-blue-900'>
                  Brooklyn, NY
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className='px-6 py-8 max-w-lg mx-auto'>
        {/* Menu Items */}
        <div className='space-y-6'>
          {menuItems.map((item) => (
            <div
              key={item.id}
              className='bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300'
            >
              <div className='p-6'>
                {/* Header */}
                <div className='flex justify-between items-start mb-4'>
                  <div className='flex items-start space-x-4'>
                    <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center border border-orange-200/50'>
                      <span className='text-2xl'>{item.image}</span>
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h3 className='text-xl font-bold text-gray-900 mb-1'>
                        {item.name}
                      </h3>
                      <div className='flex items-center space-x-2'>
                        <div className='flex items-center'>
                          <Star className='w-3.5 h-3.5 text-yellow-400 fill-current mr-1' />
                          <span className='text-sm font-medium text-gray-600'>
                            {item.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-right'>
                    <span className='text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent'>
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className='text-gray-700 leading-relaxed mb-4'>
                  {item.description}
                </p>

                {/* Fillings */}
                {item.fillings && (
                  <div className='bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200/50 rounded-2xl p-4 mb-4'>
                    <div className='flex items-start'>
                      <p className='text-violet-800 font-medium text-sm'>
                        {item.fillings}
                      </p>
                    </div>
                  </div>
                )}

                {/* Deals */}
                {item.deal && (
                  <div className='bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/50 rounded-2xl p-4 mb-4'>
                    <div className='flex items-start'>
                      <p className='text-emerald-800 font-medium text-sm'>
                        {item.deal}
                      </p>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                  {item.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className='mt-16 text-center'>
          {/* Brand Message */}
          <div className='mb-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl border border-orange-200/50'>
            <h3 className='text-lg font-bold text-gray-800 mb-2'>
              🌱 Made with Love
            </h3>
            <p className='text-gray-600 text-sm'>
              100% Plant-Based • Authentic Indian Flavors
            </p>
            <p className='text-gray-500 text-xs mt-2'>
              NF - Nut Free • GF - Gluten Free
            </p>
          </div>

          {/* Contact Cards */}
          <div className='grid gap-4 mb-8'>
            {/* Instagram */}
            <a
              href='https://www.instagram.com/govindas_canteen?utm_source=ig_web_button_share_sheet&igsh=a3MycnJ0ZmdoeWZm'
              target='_blank'
              rel='noopener noreferrer'
              className='block bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-4 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:scale-[1.02] shadow-lg'
            >
              <div className='flex items-center justify-center space-x-3'>
                <Instagram className='w-5 h-5' />
                <div className='text-left'>
                  <p className='font-semibold'>Follow us on Instagram</p>
                  <p className='text-pink-100 text-sm'>@govindas_canteen</p>
                </div>
              </div>
            </a>

            {/* Catering */}
            <a
              href='tel:+16465080961'
              className='block bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-4 hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-[1.02] shadow-lg'
            >
              <div className='flex items-center justify-center space-x-3'>
                <Phone className='w-5 h-5' />
                <div className='text-left'>
                  <p className='font-semibold'>Catering Available</p>
                  <p className='text-orange-100 text-sm'>+1 (646) 508-0961</p>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href='https://chat.whatsapp.com/LgPCqbPpdeg5OoJ3nLjFer?mode=ems_wa_t'
              target='_blank'
              rel='noopener noreferrer'
              className='block bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-4 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-[1.02] shadow-lg'
            >
              <div className='flex items-center justify-center space-x-3'>
                <MessageCircle className='w-5 h-5' />
                <div className='text-left'>
                  <p className='font-semibold'>Daily Delivery</p>
                  <p className='text-green-100 text-sm'>Order on WhatsApp</p>
                </div>
              </div>
            </a>
          </div>

          {/* Location */}
          <p className='text-gray-500 text-sm mb-4'>
            📍 Vegandale Festival, Brooklyn
          </p>

          {/* Copyright */}
          <p className='text-gray-500 text-xs'>
            &copy; {new Date().getFullYear()} Govindas Canteen. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default GovindasMenu;
