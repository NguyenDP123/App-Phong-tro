import React from "react";
import RoomCard from "../components/RoomCard";
import { Link } from "react-router-dom";

export default function FavoritesPage({ rooms, favorites, onToggleFavorite }) {
  const favoriteRooms = rooms.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Danh sách phòng đã lưu ({favoriteRooms.length})
      </h1>

      {favoriteRooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
          {favoriteRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 space-y-3">
          <p className="text-gray-500">Bạn chưa lưu phòng trọ nào vào danh sách yêu thích.</p>
          <Link to="/" className="inline-block text-sm font-semibold text-blue-600 hover:underline">
            Khám phá phòng trọ ngay
          </Link>
        </div>
      )}
    </div>
  );
}