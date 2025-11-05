import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, User, Mail, Phone, Calendar, Shield, Users, Eye, X, Crown } from 'lucide-react';

const AccountManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "erjhhY",
      email: "admin@gmail.com",
      password: "",
      phone: null,
      birthday: "29/11/1993",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      gender: true,
      role: "ADMIN",
    },
    {
      id: 45047,
      name: "Updated Name",
      email: "updated@example.com",
      password: "",
      phone: null,
      birthday: "12/02/2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
      gender: false,
      role: "USER",
    },
    {
      id: 45048,
      name: "hodydab",
      email: "qitosu@mailinator.com",
      password: "",
      phone: null,
      birthday: "05/02/2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
      gender: false,
      role: "ADMIN",
    },
    {
      id: 45049,
      name: "xudabor",
      email: "nekacipyp@mailinator.com",
      password: "",
      phone: null,
      birthday: "05/02/2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
      gender: true,
      role: "USER",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    birthday: '',
    gender: true,
    role: 'USER',
    password: ''
  });

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.phone && user.phone.includes(searchTerm));
    
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    
    return matchesSearch && matchesRole;
  });

  const handleDelete = (user) => {
    setUserToDelete(user);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    setUsers(users.filter(u => u.id !== userToDelete.id));
    setShowDeleteDialog(false);
    setUserToDelete(null);
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const user = {
        ...newUser,
        id: Math.max(...users.map(u => u.id), 0) + 1,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`
      };
      setUsers([...users, user]);
      setNewUser({
        name: '',
        email: '',
        phone: '',
        birthday: '',
        gender: true,
        role: 'USER',
        password: ''
      });
      setShowAddModal(false);
    }
  };

  const showUserDetail = (user) => {
    setSelectedUser(user);
    setShowDetailModal(true);
  };

  const getRoleBadge = (role) => {
    return role === 'ADMIN' 
      ? { bg: 'bg-purple-100', text: 'text-purple-800', icon: <Crown className="w-3 h-3" /> }
      : { bg: 'bg-blue-100', text: 'text-blue-800', icon: <User className="w-3 h-3" /> };
  };

  const getGenderLabel = (gender) => {
    return gender ? 'Nam' : 'Nữ';
  };

  const getGenderIcon = (gender) => {
    return gender ? '👨' : '👩';
  };

  const stats = {
    total: users.length,
    admin: users.filter(u => u.role === 'ADMIN').length,
    user: users.filter(u => u.role === 'USER').length,
    male: users.filter(u => u.gender === true).length,
    female: users.filter(u => u.gender === false).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">👤 Quản lý Tài Khoản</h1>
          <p className="text-slate-600">Quản lý thông tin tài khoản người dùng trong hệ thống</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Tổng tài khoản</p>
                <p className="text-3xl font-bold text-slate-800">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Admin</p>
                <p className="text-3xl font-bold text-purple-600">{stats.admin}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">User</p>
                <p className="text-3xl font-bold text-blue-600">{stats.user}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Nam</p>
                <p className="text-3xl font-bold text-cyan-600">{stats.male}</p>
              </div>
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👨</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Nữ</p>
                <p className="text-3xl font-bold text-pink-600">{stats.female}</p>
              </div>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👩</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-1 gap-4 w-full md:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên, email, số điện thoại..."
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              >
                <option value="all">Tất cả vai trò</option>
                <option value="ADMIN">Admin</option>
                <option value="USER">User</option>
              </select>
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
              <button 
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
                Thêm
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => {
              const roleBadge = getRoleBadge(user.role);
              
              return (
                <div key={user.id} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all overflow-hidden">
                  <div className="relative h-32 bg-gradient-to-r from-purple-500 to-indigo-600">
                    <div className="absolute -bottom-12 left-6">
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${roleBadge.bg} ${roleBadge.text}`}>
                        {roleBadge.icon}
                        {user.role}
                      </span>
                    </div>
                  </div>
                  <div className="pt-14 px-6 pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-800">{user.name}</h3>
                      <span className="text-lg">{getGenderIcon(user.gender)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                      <span>ID: {user.id}</span>
                      <span>•</span>
                      <span>{getGenderLabel(user.gender)}</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Mail className="w-4 h-4 text-slate-400" />
                        <span className="truncate">{user.email}</span>
                      </div>
                      {user.phone && (
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Phone className="w-4 h-4 text-slate-400" />
                          <span>{user.phone}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{user.birthday}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <button 
                        onClick={() => showUserDetail(user)}
                        className="text-sm text-purple-600 hover:underline font-medium"
                      >
                        Chi tiết
                      </button>
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(user)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Người dùng</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Email</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">SĐT</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Ngày sinh</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Vai trò</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredUsers.map((user) => {
                    const roleBadge = getRoleBadge(user.role);
                    
                    return (
                      <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img 
                              src={user.avatar} 
                              alt={user.name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div>
                              <div className="font-medium text-slate-900 flex items-center gap-2">
                                {user.name}
                                <span>{getGenderIcon(user.gender)}</span>
                              </div>
                              <div className="text-sm text-slate-500">ID: {user.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-900">{user.email}</td>
                        <td className="px-6 py-4 text-slate-900">{user.phone || '-'}</td>
                        <td className="px-6 py-4 text-slate-900">{user.birthday}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${roleBadge.bg} ${roleBadge.text}`}>
                            {roleBadge.icon}
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              onClick={() => showUserDetail(user)}
                              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDelete(user)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {showDetailModal && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
              <div className="relative h-32 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-t-xl">
                <button 
                  onClick={() => setShowDetailModal(false)}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="absolute -bottom-12 left-6">
                  <img 
                    src={selectedUser.avatar} 
                    alt={selectedUser.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
              </div>
              <div className="pt-16 px-6 pb-6">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-slate-800">{selectedUser.name}</h2>
                  <span>{getGenderIcon(selectedUser.gender)}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${getRoleBadge(selectedUser.role).bg} ${getRoleBadge(selectedUser.role).text}`}>
                    {getRoleBadge(selectedUser.role).icon}
                    {selectedUser.role}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-5 h-5 text-slate-600" />
                      <span className="text-sm text-slate-600">Email</span>
                    </div>
                    <div className="font-medium text-slate-800">{selectedUser.email}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-5 h-5 text-slate-600" />
                      <span className="text-sm text-slate-600">Điện thoại</span>
                    </div>
                    <div className="font-medium text-slate-800">{selectedUser.phone || 'Chưa có'}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-slate-600" />
                      <span className="text-sm text-slate-600">Ngày sinh</span>
                    </div>
                    <div className="font-medium text-slate-800">{selectedUser.birthday}</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-5 h-5 text-slate-600" />
                      <span className="text-sm text-slate-600">Giới tính</span>
                    </div>
                    <div className="font-medium text-slate-800">{getGenderLabel(selectedUser.gender)}</div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-purple-900 font-medium">Thông tin hệ thống</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-purple-800">ID: <span className="font-semibold">#{selectedUser.id}</span></div>
                    <div className="text-purple-800">Vai trò: <span className="font-semibold">{selectedUser.role}</span></div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Chỉnh sửa
                  </button>
                  <button 
                    onClick={() => {
                      setShowDetailModal(false);
                      handleDelete(selectedUser);
                    }}
                    className="px-4 py-2.5 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Thêm tài khoản mới</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Họ tên</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={newUser.name}
                    onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">SĐT</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={newUser.phone}
                    onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Ngày sinh</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={newUser.birthday}
                    onChange={(e) => setNewUser({...newUser, birthday: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Giới tính</label>
                  <select
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={newUser.gender}
                    onChange={(e) => setNewUser({...newUser, gender: e.target.value === 'true'})}
                  >
                    <option value="true">Nam</option>
                    <option value="false">Nữ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Vai trò</label>
                  <select
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                  >
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                  </select>
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
                  onClick={handleAddUser}
                  className="flex-1 px-4 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteDialog && userToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Xác nhận xóa</h2>
              <p className="text-slate-600 mb-6">
                Bạn có chắc muốn xóa tài khoản <strong>{userToDelete.name}</strong>?
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

export default AccountManagement;