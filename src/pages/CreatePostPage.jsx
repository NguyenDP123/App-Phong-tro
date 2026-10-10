import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { roomApi } from "../api/roomApi";

export default function CreatePostPage({ onCreated }) {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "",
    address: "",
    price: "",
    area: "",
    description: "",
    landlordName: "",
    landlordPhone: ""
  });

  // Errors State
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Validate function
  const validate = () => {
    const errs = {};
    if (!formData.title.trim()) {
      errs.title = "Tiêu đề không được để trống";
    } else if (formData.title.trim().length < 10) {
      errs.title = "Tiêu đề phải có ít nhất 10 ký tự";
    }

    if (!formData.district.trim()) {
      errs.district = "Vui lòng nhập quận/huyện";
    }

    if (!formData.address.trim()) {
      errs.address = "Vui lòng nhập địa chỉ chi tiết";
    }

    const priceNum = Number(formData.price);
    if (!formData.price) {
      errs.price = "Vui lòng nhập giá phòng";
    } else if (isNaN(priceNum) || priceNum <= 100000) {
      errs.price = "Giá phòng phải lớn hơn 100.000 VNĐ";
    }

    const areaNum = Number(formData.area);
    if (!formData.area) {
      errs.area = "Vui lòng nhập diện tích";
    } else if (isNaN(areaNum) || areaNum < 5 || areaNum > 500) {
      errs.area = "Diện tích phải hợp lệ (từ 5m² đến 500m²)";
    }

    if (!formData.landlordName.trim()) {
      errs.landlordName = "Vui lòng nhập tên người liên hệ";
    }

    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!formData.landlordPhone.trim()) {
      errs.landlordPhone = "Vui lòng nhập số điện thoại";
    } else if (!phoneRegex.test(formData.landlordPhone)) {
      errs.landlordPhone = "Số điện thoại Việt Nam không đúng định dạng";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Xóa lỗi ngay khi người dùng gõ
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);
      await roomApi.createRoom({
        title: formData.title,
        roomType: formData.roomType,
        city: formData.city,
        district: formData.district,
        address: formData.address,
        price: Number(formData.price),
        area: Number(formData.area),
        description: formData.description || "Phòng đẹp, tiện nghi, an ninh đảm bảo.",
        amenities: ["Điều hòa", "Nóng lạnh", "Wi-Fi"],
        images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"],
        verified: false,
        landlord: {
          name: formData.landlordName,
          phone: formData.landlordPhone
        }
      });
      onCreated(); // Gọi hook reload lại dữ liệu
      navigate("/");
    } catch {
      alert("Đăng tin thất bại, vui lòng thử lại!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Đăng tin phòng trọ mới</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Tiêu đề bài đăng *</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="VD: Phòng khép kín sạch đẹp gần trường ĐH..."
            className={`w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
              errors.title ? "border-rose-500 focus:ring-rose-200" : "focus:ring-blue-500"
            }`}
          />
          {errors.title && <p className="text-rose-500 text-xs mt-1">{errors.title}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Loại hình</label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Phòng trọ">Phòng trọ</option>
              <option value="Chung cư mini">Chung cư mini</option>
              <option value="Homestay">Homestay</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Thành phố</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Hà Nội">Hà Nội</option>
              <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Quận / Huyện *</label>
            <input
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="VD: Quận Cầu Giấy"
              className={`w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                errors.district ? "border-rose-500 focus:ring-rose-200" : "focus:ring-blue-500"
              }`}
            />
            {errors.district && <p className="text-rose-500 text-xs mt-1">{errors.district}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Địa chỉ chi tiết *</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="VD: Số 20 ngõ 82 Cầu Giấy"
              className={`w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                errors.address ? "border-rose-500 focus:ring-rose-200" : "focus:ring-blue-500"
              }`}
            />
            {errors.address && <p className="text-rose-500 text-xs mt-1">{errors.address}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Giá thuê (VNĐ/tháng) *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="VD: 3500000"
              className={`w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                errors.price ? "border-rose-500 focus:ring-rose-200" : "focus:ring-blue-500"
              }`}
            />
            {errors.price && <p className="text-rose-500 text-xs mt-1">{errors.price}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Diện tích (m²) *</label>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="VD: 25"
              className={`w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                errors.area ? "border-rose-500 focus:ring-rose-200" : "focus:ring-blue-500"
              }`}
            />
            {errors.area && <p className="text-rose-500 text-xs mt-1">{errors.area}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Họ tên chủ nhà *</label>
            <input
              name="landlordName"
              value={formData.landlordName}
              onChange={handleChange}
              placeholder="VD: Nguyễn Văn A"
              className={`w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                errors.landlordName ? "border-rose-500 focus:ring-rose-200" : "focus:ring-blue-500"
              }`}
            />
            {errors.landlordName && <p className="text-rose-500 text-xs mt-1">{errors.landlordName}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Số điện thoại *</label>
            <input
              name="landlordPhone"
              value={formData.landlordPhone}
              onChange={handleChange}
              placeholder="VD: 0987654321"
              className={`w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 ${
                errors.landlordPhone ? "border-rose-500 focus:ring-rose-200" : "focus:ring-blue-500"
              }`}
            />
            {errors.landlordPhone && <p className="text-rose-500 text-xs mt-1">{errors.landlordPhone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Mô tả thêm</label>
          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            placeholder="Mô tả về giờ giấc, tiện ích xung quanh..."
            className="w-full px-3 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-xl transition shadow active:scale-[0.99] mt-2"
        >
          {submitting ? "Đang xử lý..." : "Đăng tin ngay"}
        </button>
      </form>
    </div>
  );
}