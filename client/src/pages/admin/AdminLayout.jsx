import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AppContext';

const nav = [
  { to: '/admin', label: 'Overview', end: true },
  { to: '/admin/blog', label: 'Blog' },
  { to: '/admin/case-studies', label: 'Case Studies' },
  { to: '/admin/services', label: 'Services' },
  { to: '/admin/contacts', label: 'Contact Submissions' },
  { to: '/admin/users', label: 'Users' },
  { to: '/admin/settings', label: 'Settings' },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex">
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-[#0B1C2D] border-r border-white/5 flex flex-col transition-all duration-300`}
      >
        <div className="p-4 flex items-center justify-between border-b border-white/5">
          <Link to="/admin" className="font-bold text-white truncate">
            {sidebarOpen ? 'Intelera Admin' : 'IA'}
          </Link>
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg text-neutral-400 hover:text-white"
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              end={item.end}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white transition"
            >
              <span className="w-5 text-center">•</span>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/5">
          <div className={sidebarOpen ? 'flex items-center gap-2 text-sm text-neutral-400' : 'text-center'}>
            <span className="truncate">{user?.email}</span>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="mt-2 w-full py-2 rounded-lg text-sm text-red-400 hover:bg-red-400/10"
          >
            {sidebarOpen ? 'Log out' : 'Out'}
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
