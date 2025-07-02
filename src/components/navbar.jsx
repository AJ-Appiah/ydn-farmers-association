import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    {
      name: 'About Us',
      dropdown: [
        { name: 'Key Team Members', to: '/about/key-team' },
        { name: 'Subteam Members', to: '/about/subteam' },
        { name: 'Board Members', to: '/about/board' },
      ],
    },
    {
      name: 'Projects',
      dropdown: [
        { name: 'Our Farmers', to: '/projects/farmers' },
        { name: 'Our Demo Farm(s)', to: '/projects/demo-farm' },
        { name: 'Impact / Traction / Testimonials', to: '/projects/impact' },
      ],
    },
    { name: 'News', to: '/news' },
    { name: 'Gallery', to: '/gallery' },
    {
      name: 'Partners',
      dropdown: [
        { name: 'Partner With Us', to: '/partners/partner-with-us' },
        { name: 'Our Partners', to: '/partners/our-partners' },
        { name: 'Donate', to: '/partners/donate' },
      ],
    },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50 pl-80">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <Menu as="div" className="relative inline-block text-left" key={idx}>
                <Menu.Button className="flex items-center gap-1 hover:text-ydn-green font-medium">
                  {link.name}
                  <ChevronDownIcon className="w-4 h-4" />
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="absolute z-10 mt-2 w-56 bg-white border rounded shadow-lg">
                    {link.dropdown.map((item, i) => (
                      <Menu.Item key={i}>
                        {({ active }) => (
                          <NavLink
                            to={item.to}
                            className={clsx(
                              'block px-4 py-2 text-sm',
                              active ? 'bg-gray-100 text-ydn-green' : 'text-gray-700'
                            )}
                          >
                            {item.name}
                          </NavLink>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <NavLink
                key={idx}
                to={link.to}
                className={({ isActive }) =>
                  clsx('hover:text-ydn-green font-medium', isActive && 'text-ydn-green')
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-800">
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navLinks.map((link, idx) =>
            link.dropdown ? (
              <div key={idx}>
                <span className="block font-medium text-gray-700">{link.name}</span>
                <div className="pl-4 space-y-1">
                  {link.dropdown.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.to}
                      className="block text-sm text-gray-600 hover:text-ydn-green"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={idx}
                to={link.to}
                className="block text-gray-700 hover:text-ydn-green"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
