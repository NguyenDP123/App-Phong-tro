import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Heart, PlusCircle } from "lucide-react";

export default function Navbar({ favoritesCount, account, onLogout }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="w-full px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow">
            <Home className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Tro<span className="text-blue-600">Tot</span>
            </span>
            <span className="text-xs text-gray-400 font-medium block">Kênh thuê trọ số 1</span>
          </div>
        </Link>

        {/* Action navigation */}
        <nav className="flex items-center gap-3">
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition border ${
                isActive
                  ? "bg-rose-50 text-rose-600 border-rose-200"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
              }`
            }
          >
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>Yêu thích ({favoritesCount})</span>
          </NavLink>

          <Link
            to="/post-room"
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-sm transition active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Đăng tin</span>
          </Link>
          {account?.role === "admin" && <Link to="/admin" className="text-sm font-semibold text-purple-700">Quản trị</Link>}
          {account ? <button onClick={onLogout} className="text-sm font-semibold text-gray-600">Thoát ({account.name})</button> : <Link to="/account" className="text-sm font-semibold text-blue-600">Tài khoản</Link>}
        </nav>
      </div>
    </header>
  );
}