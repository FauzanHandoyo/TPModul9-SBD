import React from 'react';

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500?random=1",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500?random=2",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500?random=3",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500?random=4",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500?random=5",
    },
  ],
};

const CardGrid = () => {
  return (
    <div id='cards'>
        <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">📝 Post Gallery</h1>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {response.results.map((item) => (
                <div
                    key={item.id}
                    className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                >
                    <div className="relative">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h2 className="text-white text-lg font-semibold line-clamp-2">{item.title}</h2>
                    </div>
                    </div>
                    <div className="p-4">
                    <p className="text-gray-700 dark:text-gray-300 text-sm whitespace-pre-line line-clamp-4">
                        {item.body}
                    </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default CardGrid;
