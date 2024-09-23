import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">Logo</div>
      <nav>
        <ul className="flex space-x-6">
          {['Services', 'About', 'Team', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#00BFFF] transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
