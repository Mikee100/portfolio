import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation()
  const activeSection = location.pathname === '/' ? 'home' : location.pathname.slice(1)
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', id: 'home', icon: '🏠' },
    { path: '/about', label: 'About', id: 'about', icon: '👨‍💻' },
    { path: '/skills', label: 'Skills', id: 'skills', icon: '⚡' },
    { path: '/projects', label: 'Projects', id: 'projects', icon: '🚀' },
    { path: '/contact', label: 'Contact', id: 'contact', icon: '📧' }
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-[#e5e7eb] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-3xl font-bold text-[#2563eb] hover:text-[#a78bfa] transition-all duration-300 drop-shadow-lg"
              onClick={() => setMobileOpen(false)}
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-3 py-2 rounded-none text-xs font-semibold transition-all duration-300 relative group overflow-hidden border-b-2 ${
                    activeSection === item.id
                      ? 'text-[#2563eb] bg-[#f1f5f9] border-[#2563eb]'
                      : 'text-[#1e293b] border-transparent hover:bg-[#f1f5f9] hover:border-[#a78bfa]'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-3 rounded-xl bg-[#f1f5f9] text-[#1e293b] hover:text-white hover:bg-[#2563eb] transition-all duration-300 border border-[#e5e7eb] shadow-lg"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Open navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Dropdown */}
        {mobileOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            />
            <div className="md:hidden absolute top-14 left-0 w-full bg-white border-b border-[#e5e7eb] shadow-xl animate-fade-in z-50">
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`px-6 py-4 text-base font-semibold border-b border-[#f1f5f9] transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-[#2563eb] bg-[#f1f5f9]'
                        : 'text-[#1e293b] hover:bg-[#f1f5f9] hover:text-[#2563eb]'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navigation 