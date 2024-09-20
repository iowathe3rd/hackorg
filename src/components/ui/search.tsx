// import React, { useState } from 'react';

// const SearchBar: React.FC = () => {
//   const [query, setQuery] = useState('');

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Здесь можно добавить логику поиска
//     console.log('Searching for:', query);
//   };

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <form onSubmit={handleSearch} className="w-full max-w-md">
//         <div className="flex items-center border-b border-teal-500 py-2">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Поиск..."
//             className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="flex-shrink-0 rounded bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-700"
//           >
//             Поиск
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
