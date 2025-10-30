import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Home, Users, MapPin, Wifi, Tv, Wind, Car, UtensilsCrossed, WashingMachine, Waves, X } from 'lucide-react';

const RoomsManagement = () => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      tenPhong: "NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!",
      khach: 3,
      phongNgu: 1,
      giuong: 1,
      phongTam: 1,
      moTa: "Tự nhận phòng bằng khóa thông minh. Chủ nhà siêu cấp có kinh nghiệm cao.",
      giaTien: 28,
      mayGiat: true,
      banLa: true,
      tivi: true,
      dieuHoa: false,
      wifi: true,
      bep: false,
      doXe: true,
      hoBoi: true,
      banUi: true,
      maViTri: 1,
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg"
    },
    {
      id: 2,
      tenPhong: "STUDIO MỚI NETFLIX MIỄN PHÍ/ĐỖ XE MIỄN PHÍ",
      khach: 2,
      phongNgu: 1,
      giuong: 1,
      phongTam: 1,
      moTa: "Không gian riêng để làm việc. Tự nhận phòng bằng khóa thông minh.",
      giaTien: 21,
      mayGiat: true,
      banLa: true,
      tivi: true,
      dieuHoa: true,
      wifi: true,
      bep: true,
      doXe: false,
      hoBoi: false,
      banUi: false,
      maViTri: 1,
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/phong2.png"
    },
    {
      id: 3,
      tenPhong: "Căn hộ cao cấp gần trung tâm",
      khach: 4,
      phongNgu: 2,
      giuong: 2,
      phongTam: 2,
      moTa: "Căn hộ rộng rãi, hiện đại với đầy đủ tiện nghi. View đẹp.",
      giaTien: 45,
      mayGiat: true,
      banLa: true,
      tivi: true,
      dieuHoa: true,
      wifi: true,
      bep: true,
      doXe: true,
      hoBoi: true,
      banUi: true,
      maViTri: 2,
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/phong3.jpg"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const filteredRooms = rooms.filter(room => {
    return room.tenPhong.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDelete = (room) => {
    setRoomToDelete(room);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    setRooms(rooms.filter(r => r.id !== roomToDelete.id));
    setShowDeleteDialog(false);
    setRoomToDelete(null);
  };

  const getAmenities = (room) => {
    const amenities = [];
    if (room.wifi) amenities.push({ icon: <Wifi className="w-4 h-4" />, name: 'Wifi' });
    if (room.tivi) amenities.push({ icon: <Tv className="w-4 h-4" />, name: 'TV' });
    if (room.dieuHoa) amenities.push({ icon: <Wind className="w-4 h-4" />, name: 'Điều hòa' });
    if (room.bep) amenities.push({ icon: <UtensilsCrossed className="w-4 h-4" />, name: 'Bếp' });
    if (room.mayGiat) amenities.push({ icon: <WashingMachine className="w-4 h-4" />, name: 'Máy giặt' });
    if (room.doXe) amenities.push({ icon: <Car className="w-4 h-4" />, name: 'Đỗ xe' });
    if (room.hoBoi) amenities.push({ icon: <Waves className="w-4 h-4" />, name: 'Hồ bơi' });
    return amenities;
  };

  const countAmenities = (room) => {
    return [room.wifi, room.tivi, room.dieuHoa, room.bep, room.mayGiat, room.doXe, room.hoBoi, room.banLa, room.banUi].filter(Boolean).length;
  };

  const stats = {
    total: rooms.length,
    avgPrice: Math.round(rooms.reduce((sum, r) => sum + r.giaTien, 0) / rooms.length),
    maxGuests: Math.max(...rooms.map(r => r.khach)),
    totalBedrooms: rooms.reduce((sum, r) => sum + r.phongNgu, 0)
  };

  const showRoomDetail = (room) => {
    setSelectedRoom(room);
    setShowDetailModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">🏠 Quản lý Phòng</h1>
          <p className="text-slate-600">Quản lý thông tin phòng cho thuê và tiện nghi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Tổng số phòng</p>
                <p className="text-3xl font-bold text-slate-800">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Giá TB</p>
                <p className="text-3xl font-bold text-green-600">${stats.avgPrice}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Khách tối đa</p>
                <p className="text-3xl font-bold text-purple-600">{stats.maxGuests}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Tổng phòng ngủ</p>
                <p className="text-3xl font-bold text-orange-600">{stats.totalBedrooms}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🛏️</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên phòng..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <div className="flex bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-md transition-colors text-sm ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1.5 rounded-md transition-colors text-sm ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  List
                </button>
              </div>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                Thêm
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map((room) => (
              <div key={room.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-lg transition-all">
                <div className="relative h-52 overflow-hidden cursor-pointer" onClick={() => showRoomDetail(room)}>
                  <img 
                    src={room.hinhAnh} 
                    alt={room.tenPhong} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-lg font-bold text-blue-600">${room.giaTien}</span>
                    <span className="text-xs text-slate-600">/đêm</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 h-14">{room.tenPhong}</h3>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{room.khach}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🛏️</span>
                      <span>{room.phongNgu}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🚿</span>
                      <span>{room.phongTam}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4 text-sm text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span>Vị trí {room.maViTri}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {getAmenities(room).slice(0, 4).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded text-xs text-slate-700">
                        {amenity.icon}
                      </div>
                    ))}
                    {countAmenities(room) > 4 && (
                      <div className="px-2 py-1 bg-slate-200 rounded text-xs text-slate-700">
                        +{countAmenities(room) - 4}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                    <button 
                      onClick={() => showRoomDetail(room)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Chi tiết
                    </button>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(room);
                        }}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Phòng</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Khách</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">PN</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Giá</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Tiện nghi</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredRooms.map((room) => (
                    <tr key={room.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={room.hinhAnh} 
                            alt={room.tenPhong} 
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="max-w-xs">
                            <div className="font-medium text-slate-900 line-clamp-1">{room.tenPhong}</div>
                            <div className="text-sm text-slate-500">ID: {room.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-900">{room.khach}</td>
                      <td className="px-6 py-4 text-slate-900">{room.phongNgu}</td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-blue-600">${room.giaTien}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-1">
                          {getAmenities(room).slice(0, 3).map((amenity, idx) => (
                            <div key={idx} className="text-slate-700">
                              {amenity.icon}
                            </div>
                          ))}
                          {countAmenities(room) > 3 && (
                            <span className="text-xs text-slate-500">+{countAmenities(room) - 3}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(room)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {showDetailModal && selectedRoom && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">Chi tiết phòng</h2>
                <button 
                  onClick={() => setShowDetailModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <img 
                  src={selectedRoom.hinhAnh} 
                  alt={selectedRoom.tenPhong}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{selectedRoom.tenPhong}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-sm text-slate-600">Khách</div>
                    <div className="text-xl font-bold">{selectedRoom.khach}</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <span className="text-2xl mb-2 block">🛏️</span>
                    <div className="text-sm text-slate-600">Phòng ngủ</div>
                    <div className="text-xl font-bold">{selectedRoom.phongNgu}</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <span className="text-2xl mb-2 block">🛏️</span>
                    <div className="text-sm text-slate-600">Giường</div>
                    <div className="text-xl font-bold">{selectedRoom.giuong}</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <span className="text-2xl mb-2 block">🚿</span>
                    <div className="text-sm text-slate-600">Phòng tắm</div>
                    <div className="text-xl font-bold">{selectedRoom.phongTam}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Mô tả</h4>
                  <p className="text-slate-600 leading-relaxed">{selectedRoom.moTa}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">Tiện nghi</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {getAmenities(selectedRoom).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                        {amenity.icon}
                        <span className="text-sm text-slate-700">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-sm text-slate-600">Giá phòng</div>
                    <div className="text-3xl font-bold text-blue-600">${selectedRoom.giaTien}<span className="text-lg text-slate-600">/đêm</span></div>
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Đặt phòng ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showDeleteDialog && roomToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Xác nhận xóa</h2>
              <p className="text-slate-600 mb-6">
                Bạn có chắc chắn muốn xóa phòng <strong>{roomToDelete.tenPhong}</strong> không?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteDialog(false)}
                  className="flex-1 px-4 py-2.5 border border-slate-300 rounded-lg hover:bg-slate-50"
                >
                  Hủy
                </button>
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomsManagement;