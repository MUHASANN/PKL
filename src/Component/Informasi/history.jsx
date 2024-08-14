import React from 'react';

// Sample card data
const cardData = [
    {
        id: 1,
        image: 'https://via.placeholder.com/150',
        name: 'Item One',
        description: 'This is a description for item one.'
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150',
        name: 'Item Two',
        description: 'This is a description for item two.'
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/150',
        name: 'Item Three',
        description: 'This is a description for item three.'
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/150',
        name: 'Item Four',
        description: 'This is a description for item four.'
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/150',
        name: 'Item Five',
        description: 'This is a description for item five.'
    },
];

const History = () => {
    return (
        <div className="w-full h-[40em] bg-gray p-4">
            <div className='w-full bg-white py-3 mb-6 flex justify-between items-center rounded-lg'>
                <h1 className="text-2xl font-bold px-8">Histori</h1>
                <div className="flex space-x-2 px-8">
                    <div className="w-8 h-8 bg-blue-300 rounded-full flex justify-center items-center">
                        {/* Add icon or content here */}
                    </div>
                    <div className="w-8 h-8 bg-yellow-300 rounded-full flex justify-center items-center">
                        {/* Add icon or content here */}
                    </div>
                    <div className="w-8 h-8 bg-green-300 rounded-full flex justify-center items-center">
                        {/* Add icon or content here */}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {cardData.map(item => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
