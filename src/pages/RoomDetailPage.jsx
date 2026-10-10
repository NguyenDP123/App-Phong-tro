import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { roomApi } from "../api/roomApi";
import { ArrowLeft, Phone, MapPin, Maximize2, ShieldCheck, Calendar, CheckCircle2 } from "lucide-react";

export default function RoomDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [bookingDate, setBookingDate] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    setLoading(true);
    roomApi
      .getRoomById(id)
      .then((res) => setRoom(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!bookingDate) return;
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 3000);
  };

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Đang tải thông tin phòng...</div>;
  }

  if (error || !room) {
    return (
      <div className="text-center py-20 space-y-4">
        <p className="text-rose-600 font-semibold">{error || "Phòng không tồn tại"}</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm"
        >
          Quay lại trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-blue-600"
      >
        <ArrowLeft className="w-4 h-4" /> Quay lại
      </button>

      <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="relative aspect-[16/9] w-full bg-gray-100">
          <img src={room.images?.[0]} alt={room.title} className="w-full h-full object-cover" />
          {room.verified && (
            <span className="absolute bottom-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-md flex items-center gap-1 shadow">
              <ShieldCheck className="w-4 h-4" /> Đã kiểm duyệt thực tế
            </span>
          )}
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
              <span>{room.roomType}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5" /> {room.area} m²
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">{room.title}</h1>
            <p className="flex items-center gap-1 text-sm text-gray-500 mt-2">
              <MapPin className="w-4 h-4 text-gray-400" /> {room.address}, {room.district}, {room.city}
            </p>
            <p className="text-3xl font-extrabold text-blue-600 mt-4">
              {(room.price / 1000000).toLocaleString("vi-VN")} triệu / tháng
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Mô tả phòng</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{room.description}</p>
          </div>

          <div>
            <h2 className="text-base font-bold text-gray-900 mb-3">Tiện nghi sẵn có</h2>
            <div className="flex flex-wrap gap-2">
              {room.amenities?.map((item) => (
                <span key={item} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg">
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Liên hệ & Hẹn xem phòng */}
          <div className="pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-xs text-gray-400">Chủ trọ</p>
              <h3 className="font-bold text-gray-800 text-lg">{room.landlord?.name}</h3>
              <p className="text-sm text-gray-600 mt-1">SĐT: {room.landlord?.phone}</p>
              <a
                href={`tel:${room.landlord?.phone}`}
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold"
              >
                <Phone className="w-4 h-4" /> Gọi ngay
              </a>
            </div>

            <form onSubmit={handleBooking} className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-semibold text-gray-800 text-sm mb-2">Đặt lịch xem phòng</h3>
              <div className="flex gap-2">
                <input
                  type="date"
                  required
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-xl text-xs bg-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1"
                >
                  <Calendar className="w-4 h-4" /> Đặt hẹn
                </button>
              </div>
              {bookingSuccess && (
                <p className="text-emerald-600 text-xs mt-2 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Đã gửi yêu cầu hẹn chủ nhà thành công!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}