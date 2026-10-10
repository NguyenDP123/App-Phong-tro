import React from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, Maximize2, ShieldCheck } from "lucide-react";

export default function RoomCard({ room, isFavorite, onToggleFavorite }) {
  const formatPrice = (price) => {
    return (price / 1000000).toLocaleString("vi-VN", { maximumFractionDigits: 1 }) + " tr/tháng";
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Link to={`/room/${room.id}`} className="block w-full h-full">
          <img
            src={room.images?.[0] || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"}
            alt={room.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </Link>
        {room.verified && (
          <span className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur text-white text-[11px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Đã xác thực
          </span>
        )}
        <button
          type="button"
          onClick={() => onToggleFavorite(room.id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 shadow transition active:scale-90"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-rose-500 text-rose-500" : ""}`} />
        </button>
        <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur text-white text-[11px] px-2 py-0.5 rounded">
          {room.roomType}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <span className="text-lg font-bold text-blue-600">{formatPrice(room.price)}</span>
            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
              <Maximize2 className="w-3 h-3" /> {room.area} m²
            </span>
          </div>

          <Link to={`/room/${room.id}`}>
            <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 hover:text-blue-600 transition">
              {room.title}
            </h3>
          </Link>

          <p className="flex items-center gap-1 text-xs text-gray-500 mt-2 truncate">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
            {room.district}, {room.city}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 mt-3">
          {room.amenities?.slice(0, 3).map((item, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-600 text-[11px] px-2 py-0.5 rounded">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}