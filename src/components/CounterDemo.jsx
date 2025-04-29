import React, { useState, useEffect } from 'react';

const CounterDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  return (
    <div id='counter'>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Counter Demo</h1>
            <p className="text-4xl mb-6 text-gray-800 dark:text-gray-200">{count}</p>
            <div className="flex space-x-4">
                <button
                onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                >
                -
                </button>
                <button
                onClick={() => setCount(0)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
                >
                Reset
                </button>
                <button
                onClick={() => setCount(prev => prev + 1)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
                >
                +
                </button>
            </div>
        </div>
    </div>
  );
};

export default CounterDemo;
