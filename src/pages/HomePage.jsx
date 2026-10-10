import React, { useState, useMemo } from "react";
import FilterBar from "../components/FilterBar";
import RoomCard from "../components/RoomCard";
import LoadingSkeleton from "../components/LoadingSkeleton";

const DEFAULT_FILTERS = {
  keyword: "",
  city: "All",
  roomType: "All",
  maxPrice: 99999999,
  amenities: []
};

export default function HomePage({ rooms, loading, favorites, onToggleFavorite }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  // useMemo xử lý lọc phòng
  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      if (filters.city !== "All" && room.city !== filters.city) return false;
      if (filters.roomType !== "All" && room.roomType !== filters.roomType) return false;
      if (room.price > filters.maxPrice) return false;

      if (filters.keyword.trim() !== "") {
        const kw = filters.keyword.toLowerCase();
        const matchTitle = room.title.toLowerCase().includes(kw);
        const matchAddress = room.address.toLowerCase().includes(kw);
        const matchDistrict = room.district.toLowerCase().includes(kw);
        if (!matchTitle && !matchAddress && !matchDistrict) return false;
      }

      if (filters.amenities.length > 0) {
        const hasAll = filters.amenities.every((a) => room.amenities?.includes(a));
        if (!hasAll) return false;
      }

      return true;
    });
  }, [rooms, filters]);

  return (
    <div>
      {/* Hero Banner full-width */}
      <div className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-10 text-white shadow-md">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Tìm phòng trọ sinh viên & người đi làm
        </h1>
        <p className="text-blue-100 text-sm sm:text-base">
          Cập nhật hàng giờ • Xác thực chính chủ • Đặt lịch xem phòng miễn phí.
        </p>
      </div>

      <FilterBar
        filters={filters}
        setFilters={setFilters}
        onReset={() => setFilters(DEFAULT_FILTERS)}
      />

      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-gray-800 text-lg sm:text-xl">
          Danh sách phòng trọ
          <span className="ml-2 text-sm font-normal text-gray-500">
            ({filteredRooms.length} kết quả)
          </span>
        </h2>
      </div>

      {loading ? (
        <LoadingSkeleton />
      ) : filteredRooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              isFavorite={favorites.includes(room.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
          <p className="text-gray-500">Không tìm thấy phòng trọ phù hợp với tiêu chí lọc.</p>
        </div>
      )}
    </div>
  );
}