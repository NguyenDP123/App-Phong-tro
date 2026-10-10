import React from "react";
import { Search, MapPin, Tag, SlidersHorizontal, RotateCcw } from "lucide-react";

const ALL_AMENITIES = ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Wi-Fi", "Thang máy", "Gác xép"];

export default function FilterBar({ filters, setFilters, onReset }) {
  const toggleAmenity = (item) => {
    setFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(item)
        ? prev.amenities.filter((a) => a !== item)
        : [...prev.amenities, item]
    }));
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-sm mb-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm theo khu vực, tên đường..."
            value={filters.keyword}
            onChange={(e) => setFilters((p) => ({ ...p, keyword: e.target.value }))}
            className="w-full pl-9 pr-3 py-2 text-sm border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="relative">
          <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <select
            value={filters.city}
            onChange={(e) => setFilters((p) => ({ ...p, city: e.target.value }))}
            className="w-full pl-9 pr-3 py-2 text-sm border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="All">Tất cả thành phố</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
          </select>
        </div>

        <div className="relative">
          <Tag className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <select
            value={filters.roomType}
            onChange={(e) => setFilters((p) => ({ ...p, roomType: e.target.value }))}
            className="w-full pl-9 pr-3 py-2 text-sm border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="All">Tất cả loại phòng</option>
            <option value="Phòng trọ">Phòng trọ</option>
            <option value="Chung cư mini">Chung cư mini</option>
            <option value="Homestay">Homestay</option>
          </select>
        </div>

        <div className="relative">
          <SlidersHorizontal className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <select
            value={filters.maxPrice}
            onChange={(e) => setFilters((p) => ({ ...p, maxPrice: Number(e.target.value) }))}
            className="w-full pl-9 pr-3 py-2 text-sm border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value={99999999}>Mọi mức giá</option>
            <option value={3000000}>Dưới 3 triệu</option>
            <option value={5000000}>Dưới 5 triệu</option>
            <option value={8000000}>Dưới 8 triệu</option>
          </select>
        </div>
      </div>

      <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-gray-500 mr-2">Tiện ích:</span>
        {ALL_AMENITIES.map((item) => {
          const active = filters.amenities.includes(item);
          return (
            <button
              key={item}
              type="button"
              onClick={() => toggleAmenity(item)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                active ? "bg-blue-600 text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          );
        })}

        <button
          onClick={onReset}
          className="ml-auto inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 font-medium py-1 px-2"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Xóa bộ lọc
        </button>
      </div>
    </div>
  );
}