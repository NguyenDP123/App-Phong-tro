const STORAGE_KEY = "trotot_rooms_data";

const DEFAULT_DATA = [
  {
    id: "1",
    title: "Phòng khép kín full nội thất gần ĐH Bách Khoa",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Hai Bà Trưng",
    address: "Số 15 Ngõ 40 Tạ Quang Bửu, P. Bách Khoa",
    price: 3800000,
    area: 25,
    images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Wi-Fi"],
    description: "Phòng mới sửa sang đẹp, ban công thoáng gió, giờ giấc tự do không chung chủ, có camera an ninh 24/7.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "2",
    title: "Căn hộ dịch vụ studio sang trọng Thảo Điền",
    roomType: "Chung cư mini",
    city: "TP. Hồ Chí Minh",
    district: "TP. Thủ Đức",
    address: "Đường Xuân Thủy, P. Thảo Điền",
    price: 7500000,
    area: 38,
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Thang máy", "Gác xép", "Wi-Fi"],
    description: "Căn hộ studio cao cấp, ban công view thoáng mát, bảo vệ 24/24, khu dân trí cao.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "3",
    title: "Phòng trọ giá rẻ có gác lửng gần Cầu Giấy",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Cầu Giấy",
    address: "Ngõ 165 Cầu Giấy, P. Dịch Vọng",
    price: 2500000,
    area: 18,
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"],
    verified: false,
    amenities: ["Điều hòa", "Nóng lạnh", "Wi-Fi"],
    description: "Phòng sạch sẽ, có gác xép để ngủ rộng rãi, gần trạm xe buýt và chợ sinh viên.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "4",
    title: "Chung cư mini ban công view Landmark 81 Bình Thạnh",
    roomType: "Chung cư mini",
    city: "TP. Hồ Chí Minh",
    district: "Quận Bình Thạnh",
    address: "Số 48 Điện Biên Phủ, Phường 25",
    price: 6000000,
    area: 32,
    images: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Thang máy", "Wi-Fi"],
    description: "Tòa nhà thang máy mới xây, khóa vân tay thẻ từ, view thoáng mát nhìn ra Landmark 81.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "5",
    title: "Homestay bao trọn gói chi phí trung tâm Quận 1",
    roomType: "Homestay",
    city: "TP. Hồ Chí Minh",
    district: "Quận 1",
    address: "Hẻm 18A Nguyễn Thị Minh Khai, P. Đa Kao",
    price: 4500000,
    area: 22,
    images: ["https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Wi-Fi"],
    description: "Phòng decor phong cách vintage, đã bao gồm toàn bộ điện, nước, internet tốc độ cao.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "6",
    title: "Phòng trọ sinh viên tiện nghi gần ĐH Kinh tế Quốc Dân",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Hai Bà Trưng",
    address: "Ngõ Trại Cá, Đường Trần Đại Nghĩa",
    price: 2800000,
    area: 20,
    images: ["https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"],
    verified: false,
    amenities: ["Điều hòa", "Nóng lạnh", "Wi-Fi"],
    description: "Vị trí đắc địa cách NEU chỉ 300m, không chung chủ, đi lại tự do 24/7.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "7",
    title: "Studio duplex cao cấp gần ngã tư Hàng Xanh",
    roomType: "Chung cư mini",
    city: "TP. Hồ Chí Minh",
    district: "Quận Bình Thạnh",
    address: "Bạch Đằng, Phường 24",
    price: 5800000,
    area: 30,
    images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Gác xép", "Wi-Fi"],
    description: "Căn hộ duplex gác cao đứng không chạm đầu, bếp từ đôi hiện đại, có bãi xe riêng tầng trệt.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "8",
    title: "Phòng trọ khép kín có bếp riêng gần ĐH Quốc Gia HN",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Cầu Giấy",
    address: "Ngõ 336 Xuân Thủy, P. Dịch Vọng Hậu",
    price: 3200000,
    area: 24,
    images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Wi-Fi"],
    description: "Phòng thoáng mát, có khu vực nấu nướng riêng biệt không lo ám mùi vào phòng ngủ.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "9",
    title: "Căn hộ dịch vụ full nội thất Quận 7 gần Crescent Mall",
    roomType: "Chung cư mini",
    city: "TP. Hồ Chí Minh",
    district: "Quận 7",
    address: "Đường số 10, P. Tân Quy",
    price: 7000000,
    area: 40,
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Thang máy", "Wi-Fi"],
    description: "Khu vực yên tĩnh, dân trí cao, dọn phòng 2 lần/tuần miễn phí, phù hợp người đi làm văn phòng.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "10",
    title: "Homestay dorm giường tầng dành cho sinh viên Quận 10",
    roomType: "Homestay",
    city: "TP. Hồ Chí Minh",
    district: "Quận 10",
    address: "Sư Vạn Hạnh, Phường 12",
    price: 1800000,
    area: 16,
    images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"],
    verified: false,
    amenities: ["Điều hòa", "Máy giặt", "Wi-Fi"],
    description: "Mô hình giường kén riêng tư, có rèm che, đèn học và ổ cắm từng giường. Bao trọn chi phí sinh hoạt.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "11",
    title: "Phòng trọ ban công rộng phố Chùa Láng",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Đống Đa",
    address: "Ngõ 80 Chùa Láng, P. Láng Thượng",
    price: 3900000,
    area: 26,
    images: ["https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Wi-Fi"],
    description: "Gần ĐH Ngoại Thương và Học viện Ngoại Giao, ngõ rộng ô tô vào được, cửa sổ đón nắng.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "12",
    title: "Chung cư mini cao cấp Ngã Tư Sở",
    roomType: "Chung cư mini",
    city: "Hà Nội",
    district: "Quận Thanh Xuân",
    address: "Khương Trung, P. Khương Trung",
    price: 5200000,
    area: 30,
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Thang máy", "Wi-Fi"],
    description: "Tòa nhà 8 tầng thang máy, camera an ninh từng tầng, giờ giấc tự do, khóa cửa vân tay bảo mật.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "13",
    title: "Phòng trọ có ban công phơi đồ riêng Phú Nhuận",
    roomType: "Phòng trọ",
    city: "TP. Hồ Chí Minh",
    district: "Quận Phú Nhuận",
    address: "Phan Xích Long, Phường 2",
    price: 4200000,
    area: 23,
    images: ["https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Tủ lạnh", "Wi-Fi"],
    description: "Khu phố ẩm thực Phan Xích Long sầm uất, thuận tiện di chuyển sang Quận 1 và sân bay Tân Sơn Nhất.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "14",
    title: "Phòng trọ giá sinh viên gần ĐH Thương Mại",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Nam Từ Liêm",
    address: "Đường Hồ Tùng Mậu, P. Mai Dịch",
    price: 2200000,
    area: 17,
    images: ["https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"],
    verified: false,
    amenities: ["Nóng lạnh", "Wi-Fi"],
    description: "Phòng khép kín sạch sẽ, đồng hồ điện nước riêng biệt theo công tơ nhà nước.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "15",
    title: "Căn hộ 1 phòng ngủ tách biệt gần Landmark Tân Bình",
    roomType: "Chung cư mini",
    city: "TP. Hồ Chí Minh",
    district: "Quận Tân Bình",
    address: "Đường Cộng Hòa, Phường 13",
    price: 6200000,
    area: 36,
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Thang máy", "Wi-Fi"],
    description: "Căn hộ 1 phòng khách 1 phòng ngủ riêng biệt, bếp chữ L rộng rãi đầy đủ hút mùi.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "16",
    title: "Phòng trọ mới xây ngõ thông Nguyễn Trãi",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Thanh Xuân",
    address: "Ngõ 190 Nguyễn Trãi, P. Thượng Đình",
    price: 3400000,
    area: 22,
    images: ["https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Wi-Fi", "Gác xép"],
    description: "Cách ga tàu điện trên cao 200m, tiện đi lại tới các trường ĐH Khoa học Xã hội và Tự nhiên.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "17",
    title: "Studio duplex có cửa sổ giếng trời Tân Phú",
    roomType: "Chung cư mini",
    city: "TP. Hồ Chí Minh",
    district: "Quận Tân Phú",
    address: "Đường Lê Trọng Tấn, P. Tây Thạnh",
    price: 4300000,
    area: 28,
    images: ["https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80"],
    verified: false,
    amenities: ["Điều hòa", "Nóng lạnh", "Gác xép", "Wi-Fi"],
    description: "Gần trường ĐH Công Thương (HUIT), phòng mới 100%, bảo vệ trực 24/7.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "18",
    title: "Phòng trọ tiện nghi phố Trần Duy Hưng",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Cầu Giấy",
    address: "Ngõ 110 Trần Duy Hưng, P. Trung Hòa",
    price: 4000000,
    area: 25,
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Wi-Fi"],
    description: "Khu vực sầm uất ngay trung tâm Cầu Giấy, gần BigC Thăng Long và các tòa nhà văn phòng.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "19",
    title: "Homestay phòng riêng cho nữ thuê Quận 3",
    roomType: "Homestay",
    city: "TP. Hồ Chí Minh",
    district: "Quận 3",
    address: "Hẻm Nguyễn Đình Chiểu, Phường 5",
    price: 3500000,
    area: 20,
    images: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Wi-Fi"],
    description: "Nhà toàn nữ, an ninh tuyệt đối, khu vực trung tâm tiện đi lại tất cả các quận 1, 5, 10.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "20",
    title: "Căn hộ dịch vụ tiện nghi ngõ Tây Sơn Đống Đa",
    roomType: "Chung cư mini",
    city: "Hà Nội",
    district: "Quận Đống Đa",
    address: "Số 252 Tây Sơn, P. Trung Liệt",
    price: 5500000,
    area: 32,
    images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Thang máy", "Wi-Fi"],
    description: "Đối diện trường ĐH Thủy Lợi, gần ĐH Công Đoàn. Nội thất phong cách hiện đại.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "21",
    title: "Phòng trọ khép kín giá rẻ Quận 8 gần cầu Chánh Hưng",
    roomType: "Phòng trọ",
    city: "TP. Hồ Chí Minh",
    district: "Quận 8",
    address: "Đường Phạm Hùng, Phường 4",
    price: 2600000,
    area: 20,
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"],
    verified: false,
    amenities: ["Nóng lạnh", "Gác xép", "Wi-Fi"],
    description: "Chỉ 5 phút qua Quận 5, thuận tiện cho sinh viên ĐH Y Dược, Sư Phạm, KHTN.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "22",
    title: "Phòng studio gác lửng cao Hoàng Mai",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Hoàng Mai",
    address: "Đường Định Công Thượng, P. Định Công",
    price: 3000000,
    area: 24,
    images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"],
    verified: false,
    amenities: ["Điều hòa", "Nóng lạnh", "Gác xép", "Wi-Fi"],
    description: "Phòng có gác lửng đúc chắc chắn, kệ bếp đá hoa cương sạch đẹp, có chỗ để máy giặt riêng.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "23",
    title: "Căn hộ mini 2 phòng ngủ Quận Gò Vấp",
    roomType: "Chung cư mini",
    city: "TP. Hồ Chí Minh",
    district: "Quận Gò Vấp",
    address: "Đường Phan Văn Trị, Phường 10",
    price: 6800000,
    area: 45,
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Thang máy", "Wi-Fi"],
    description: "Thích hợp cho nhóm bạn 3-4 người hoặc gia đình nhỏ, gần siêu thị Emart và chợ Gò Vấp.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "24",
    title: "Phòng khép kín đầy đủ đồ gần Hồ Tây",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Tây Hồ",
    address: "Ngõ 124 Thụy Khuê, P. Thụy Khuê",
    price: 4600000,
    area: 28,
    images: ["https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Wi-Fi"],
    description: "Cách ven hồ Tây chỉ 100m, không khí mát mẻ thoáng đãng, ngõ rộng rãi yên tĩnh.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "25",
    title: "Studio cửa sổ trời ban công lộng gió Bình Tân",
    roomType: "Chung cư mini",
    city: "TP. Hồ Chí Minh",
    district: "Quận Bình Tân",
    address: "Tên Lửa, P. Bình Trị Đông B",
    price: 4200000,
    area: 29,
    images: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"],
    verified: false,
    amenities: ["Điều hòa", "Nóng lạnh", "Thang máy", "Wi-Fi"],
    description: "Khu vực dân cư Aeon Mall Bình Tân, an ninh cao, hầm để xe rộng có bảo vệ.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "26",
    title: "Phòng trọ sinh viên gần Học viện Bưu Chính (PTIT)",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Hà Đông",
    address: "Ngõ 2 Ao Sen, P. Mộ Lao",
    price: 2700000,
    area: 21,
    images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Wi-Fi"],
    description: "Khu phố ẩm thực sinh viên Ao Sen đông đúc, gần PTIT, ĐH Kiến Trúc, ĐH Hà Nội.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "27",
    title: "Homestay trải nghiệm phong cách Indochine Quận 5",
    roomType: "Homestay",
    city: "TP. Hồ Chí Minh",
    district: "Quận 5",
    address: "Trần Hưng Đạo, Phường 2",
    price: 5000000,
    area: 26,
    images: ["https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Wi-Fi"],
    description: "Nội thất phong cách Đông Dương cổ điển, bếp chung sang trọng, có sân thượng BBQ.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "28",
    title: "Phòng trọ giá tốt khu vực Nam Từ Liêm",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Nam Từ Liêm",
    address: "Làng Phú Mỹ, P. Mỹ Đình 2",
    price: 2400000,
    area: 19,
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"],
    verified: false,
    amenities: ["Nóng lạnh", "Wi-Fi"],
    description: "Gần bến xe Mỹ Đình và sân vận động, đi lại xe buýt rất thuận tiện, giá điện nước bình dân.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "29",
    title: "Căn hộ studio full tiện nghi sát công viên Gia Định",
    roomType: "Chung cư mini",
    city: "TP. Hồ Chí Minh",
    district: "Quận Phú Nhuận",
    address: "Hoàng Minh Giám, Phường 9",
    price: 5900000,
    area: 31,
    images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Thang máy", "Wi-Fi"],
    description: "Liền kề công viên Gia Định nhiều cây xanh, không khí trong lành, tòa nhà vận hành chuyên nghiệp.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  },
  {
    id: "30",
    title: "Phòng trọ cao cấp ban công riêng gần ĐH Thủy Lợi",
    roomType: "Phòng trọ",
    city: "Hà Nội",
    district: "Quận Đống Đa",
    address: "Ngõ 167 Tây Sơn, P. Quang Trung",
    price: 3700000,
    area: 24,
    images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"],
    verified: true,
    amenities: ["Điều hòa", "Nóng lạnh", "Máy giặt", "Tủ lạnh", "Wi-Fi"],
    description: "Phòng thoáng mát có ban công phơi đồ riêng, máy giặt dùng chung tầng thượng, khu dân trí cao.",
    landlord: { name: "Tiến Đạt", phone: "098472045" }
  }
];

export const roomApi = {
  // Lấy toàn bộ danh sách phòng
  getAllRooms: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_DATA));
          resolve([...DEFAULT_DATA]);
        } else {
          resolve(JSON.parse(stored));
        }
      }, 500); // delay 0.5s mô phỏng độ trễ mạng
    });
  },

  // Lấy chi tiết phòng theo id
  getRoomById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        const list = stored ? JSON.parse(stored) : DEFAULT_DATA;
        const item = list.find((r) => r.id === String(id));
        if (item) resolve(item);
        else reject(new Error("Không tìm thấy phòng trọ này!"));
      }, 400);
    });
  },

  // Đăng tin mới
  createRoom: (newRoom) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        const list = stored ? JSON.parse(stored) : DEFAULT_DATA;
        const record = { ...newRoom, id: String(Date.now()) };
        const updated = [record, ...list];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        resolve(record);
      }, 500);
    });
  }
};