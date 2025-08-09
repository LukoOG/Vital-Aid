import React from 'react';

type Props = {
  onSelect: (id: string) => void;
};

const serviceCards = [
  {
    id: 'police-report',
    title: 'Police Report',
  },
  {
    id: 'first-aid',
    title: 'First Aid',
  },
  {
    id: 'suitable-hospital',
    title: 'Suitable Hospital',
  },
  {
    id: 'emergency-driver',
    title: 'Emergency Driver',
  },
];

const Home: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="p-4 font-roboto">
      <h2 className="text-[18px] font-semibold text-gray-800 mb-6 mt-6 leading-[100%] tracking-[0]">
        How can we be of aid?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {serviceCards.map((card) => (
          <div
            key={card.id}
            className="border-gradient w-[160px] h-[140px]"
          >
            <button
              onClick={() => onSelect(card.id)}
              className="
                inner
                px-[27px] py-[34px]
                flex items-center justify-center text-center
                transition-all duration-200
                hover:scale-105 hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              "
            >
              <span className="text-gray-700 font-medium text-sm font-roboto">
                {card.title}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
