import { useState } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  MapPin,
  Globe,
  Map,
  Image,
  X,
} from "lucide-react";

export default function LocationsManagement() {
  const [locations, setLocations] = useState([
    {
      id: 1,
      tenViTri: "Quận 1",
      tinhThanh: "Hồ Chí Minh",
      quocGia: "Việt Nam",
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg",
    },
    {
      id: 2,
      tenViTri: "Cái Răng",
      tinhThanh: "Cần Thơ",
      quocGia: "Việt Nam",
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt2.jpg",
    },
    {
      id: 3,
      tenViTri: "Hòn Rùa",
      tinhThanh: "Nha Trang",
      quocGia: "Việt Nam",
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt3.jpg",
    },
    {
      id: 4,
      tenViTri: "Bãi Sau",
      tinhThanh: "Vũng Tàu",
      quocGia: "Việt Nam",
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt4.jpg",
    },
    {
      id: 5,
      tenViTri: "Hồ Hoàn Kiếm",
      tinhThanh: "Hà Nội",
      quocGia: "Việt Nam",
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt5.jpg",
    },
    {
      id: 6,
      tenViTri: "Phố Cổ",
      tinhThanh: "Hội An",
      quocGia: "Việt Nam",
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/vt6.jpg",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [locationToDelete, setLocationToDelete] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [newLocation, setNewLocation] = useState({
    tenViTri: "",
    tinhThanh: "",
    quocGia: "Việt Nam",
    hinhAnh: "",
  });

  const filteredLocations = locations.filter((location) => {
    return (
      location.tenViTri.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.tinhThanh.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.quocGia.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleDelete = (location) => {
    setLocationToDelete(location);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    setLocations(locations.filter((l) => l.id !== locationToDelete.id));
    setShowDeleteDialog(false);
    setLocationToDelete(null);
  };

  const handleAddLocation = () => {
    if (newLocation.tenViTri && newLocation.tinhThanh) {
      const location = {
        ...newLocation,
        id: Math.max(...locations.map((l) => l.id), 0) + 1,
      };
      setLocations([...locations, location]);
      setNewLocation({
        tenViTri: "",
        tinhThanh: "",
        quocGia: "Việt Nam",
        hinhAnh: "",
      });
      setShowAddModal(false);
    }
  };

  const showLocationDetail = (location) => {
    setSelectedLocation(location);
    setShowDetailModal(true);
  };

  const stats = {
    total: locations.length,
    cities: new Set(locations.map((l) => l.tinhThanh)).size,
    countries: new Set(locations.map((l) => l.quocGia)).size,
    withImages: locations.filter((l) => l.hinhAnh).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            🗺️ Quản lý Vị trí
          </h1>
          <p className="text-slate-600">
            Quản lý thông tin địa điểm và vị trí du lịch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Tổng vị trí</p>
                <p className="text-3xl font-bold text-slate-800">
                  {stats.total}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Tỉnh thành</p>
                <p className="text-3xl font-bold text-teal-600">
                  {stats.cities}
                </p>
              </div>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Map className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Quốc gia</p>
                <p className="text-3xl font-bold text-cyan-600">
                  {stats.countries}
                </p>
              </div>
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Có hình ảnh</p>
                <p className="text-3xl font-bold text-blue-600">
                  {stats.withImages}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Image className="w-6 h-6 text-blue-600" />
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
                placeholder="Tìm kiếm theo tên vị trí, tỉnh thành..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <div className="flex bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1.5 rounded-md transition-colors text-sm ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-3 py-1.5 rounded-md transition-colors text-sm ${viewMode === "list" ? "bg-white shadow-sm" : ""}`}
                >
                  List
                </button>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Thêm
              </button>
            </div>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 hover:shadow-lg transition-all group"
              >
                <div
                  className="relative h-56 overflow-hidden cursor-pointer"
                  onClick={() => showLocationDetail(location)}
                >
                  <img
                    src={location.hinhAnh}
                    alt={location.tenViTri}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {location.tinhThanh}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold">{location.tenViTri}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-4 text-slate-600">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm">{location.quocGia}</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                    <button
                      onClick={() => showLocationDetail(location)}
                      className="text-sm text-emerald-600 hover:underline font-medium"
                    >
                      Chi tiết
                    </button>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(location)}
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
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">
                      Vị trí
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">
                      Tỉnh thành
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">
                      Quốc gia
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">
                      Hình ảnh
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredLocations.map((location) => (
                    <tr
                      key={location.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">
                              {location.tenViTri}
                            </div>
                            <div className="text-sm text-slate-500">
                              ID: {location.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-900">
                        {location.tinhThanh}
                      </td>
                      <td className="px-6 py-4 text-slate-900">
                        {location.quocGia}
                      </td>
                      <td className="px-6 py-4">
                        <img
                          src={location.hinhAnh}
                          alt={location.tenViTri}
                          className="w-20 h-14 rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform"
                          onClick={() => showLocationDetail(location)}
                        />
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(location)}
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

        {showDetailModal && selectedLocation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">
                  Chi tiết vị trí
                </h2>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="relative h-80 rounded-xl overflow-hidden mb-6">
                  <img
                    src={selectedLocation.hinhAnh}
                    alt={selectedLocation.tenViTri}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">
                      {selectedLocation.tenViTri}
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Map className="w-5 h-5" />
                        <span>{selectedLocation.tinhThanh}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        <span>{selectedLocation.quocGia}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                      <div>
                        <div className="text-xs text-slate-600">Vị trí</div>
                        <div className="font-semibold text-slate-800">
                          {selectedLocation.tenViTri}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Map className="w-6 h-6 text-teal-600" />
                      <div>
                        <div className="text-xs text-slate-600">Tỉnh thành</div>
                        <div className="font-semibold text-slate-800">
                          {selectedLocation.tinhThanh}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-cyan-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-cyan-600" />
                      <div>
                        <div className="text-xs text-slate-600">Quốc gia</div>
                        <div className="font-semibold text-slate-800">
                          {selectedLocation.quocGia}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-1">ID vị trí</div>
                  <div className="text-lg font-bold text-slate-800">
                    #{selectedLocation.id}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Thêm vị trí mới
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tên vị trí
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={newLocation.tenViTri}
                    onChange={(e) =>
                      setNewLocation({
                        ...newLocation,
                        tenViTri: e.target.value,
                      })
                    }
                    placeholder="Ví dụ: Bãi Trước"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tỉnh thành
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={newLocation.tinhThanh}
                    onChange={(e) =>
                      setNewLocation({
                        ...newLocation,
                        tinhThanh: e.target.value,
                      })
                    }
                    placeholder="Ví dụ: Đà Nẵng"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Quốc gia
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={newLocation.quocGia}
                    onChange={(e) =>
                      setNewLocation({
                        ...newLocation,
                        quocGia: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    URL hình ảnh
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={newLocation.hinhAnh}
                    onChange={(e) =>
                      setNewLocation({
                        ...newLocation,
                        hinhAnh: e.target.value,
                      })
                    }
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2.5 border border-slate-300 rounded-lg hover:bg-slate-50"
                >
                  Hủy
                </button>
                <button
                  onClick={handleAddLocation}
                  className="flex-1 px-4 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteDialog && locationToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Xác nhận xóa
              </h2>
              <p className="text-slate-600 mb-6">
                Bạn có chắc muốn xóa vị trí{" "}
                <strong>{locationToDelete.tenViTri}</strong>?
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
}
