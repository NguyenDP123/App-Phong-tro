import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RoomDetailPage from "./pages/RoomDetailPage";
import CreatePostPage from "./pages/CreatePostPage";
import FavoritesPage from "./pages/FavoritesPage";
import { useRooms } from "./hooks/useRooms";

const USERS_KEY = "trotot_users";
const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || JSON.stringify([{id:1,name:"Quản trị viên",username:"admin",password:"admin123",role:"admin"}]));

function AccountPage({ onLogin }) {
  const [mode,setMode]=useState("login"); const [name,setName]=useState(""); const [username,setUsername]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const navigate=useNavigate();
  const submit=(e)=>{e.preventDefault();setError("");let users=getUsers();
    if(mode==="register") { if(users.some(u=>u.username===username)){setError("Tên đăng nhập đã tồn tại.");return;} const user={id:Date.now(),name,username,password,role:"user"}; users.push(user);localStorage.setItem(USERS_KEY,JSON.stringify(users));onLogin(user);navigate("/"); }
    else {const user=users.find(u=>u.username===username&&u.password===password);if(!user){setError("Sai tên đăng nhập hoặc mật khẩu.");return;}onLogin(user);navigate(user.role==="admin"?"/admin":"/");}
  };
  return <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border"><h1 className="text-2xl font-bold mb-2">{mode==="login"?"Đăng nhập":"Tạo tài khoản"}</h1><p className="text-sm text-gray-500 mb-6">Tài khoản người dùng và quản trị viên TroTot</p><form onSubmit={submit} className="space-y-4">{mode==="register"&&<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Họ và tên" className="w-full border rounded-xl p-3"/>}<input required value={username} onChange={e=>setUsername(e.target.value)} placeholder="Tên đăng nhập" className="w-full border rounded-xl p-3"/><input required type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Mật khẩu" className="w-full border rounded-xl p-3"/>{error&&<p className="text-red-600 text-sm">{error}</p>}<button className="w-full bg-blue-600 text-white rounded-xl p-3 font-semibold">{mode==="login"?"Đăng nhập":"Đăng ký"}</button></form><button onClick={()=>{setMode(mode==="login"?"register":"login");setError("")}} className="mt-4 text-blue-600 text-sm">{mode==="login"?"Chưa có tài khoản? Đăng ký":"Đã có tài khoản? Đăng nhập"}</button><p className="text-xs text-gray-500 mt-5">Demo admin: <b>admin</b> / <b>admin123</b></p></div>;
}
function AdminPage(){const users=getUsers();return <section className="max-w-4xl mx-auto bg-white rounded-2xl border p-6"><h1 className="text-2xl font-bold mb-5">Quản lý tài khoản</h1><p className="mb-4 text-gray-500">Danh sách tài khoản đã đăng ký trên trình duyệt này.</p><div className="overflow-x-auto"><table className="w-full text-left"><thead><tr className="border-b"><th className="p-3">Họ tên</th><th className="p-3">Tên đăng nhập</th><th className="p-3">Vai trò</th></tr></thead><tbody>{users.map(u=><tr key={u.id} className="border-b"><td className="p-3">{u.name}</td><td className="p-3">{u.username}</td><td className="p-3">{u.role==="admin"?"Admin":"Người dùng"}</td></tr>)}</tbody></table></div></section>}
export default function App() {
  const { rooms, loading, reload } = useRooms(); const [favorites,setFavorites]=useState([]); const [account,setAccount]=useState(()=>JSON.parse(sessionStorage.getItem("trotot_session")||"null"));
  const login=(user)=>{const safe={id:user.id,name:user.name,username:user.username,role:user.role};sessionStorage.setItem("trotot_session",JSON.stringify(safe));setAccount(safe)};
  const logout=()=>{sessionStorage.removeItem("trotot_session");setAccount(null)};
  const toggleFavorite=(id)=>setFavorites(prev=>prev.includes(id)?prev.filter(item=>item!==id):[...prev,id]);
  return <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col font-sans"><Navbar favoritesCount={favorites.length} account={account} onLogout={logout}/><main className="flex-1 w-full px-4 sm:px-8 lg:px-12 py-8"><Routes><Route path="/" element={<HomePage rooms={rooms} loading={loading} favorites={favorites} onToggleFavorite={toggleFavorite}/>}/><Route path="/room/:id" element={<RoomDetailPage/>}/><Route path="/post-room" element={account?<CreatePostPage onCreated={reload}/>:<Navigate to="/account"/>}/><Route path="/favorites" element={<FavoritesPage rooms={rooms} favorites={favorites} onToggleFavorite={toggleFavorite}/>}/><Route path="/account" element={<AccountPage onLogin={login}/>}/><Route path="/admin" element={account?.role==="admin"?<AdminPage/>:<Navigate to="/account"/>}/></Routes></main></div>;
}
