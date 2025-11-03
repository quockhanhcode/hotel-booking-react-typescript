import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, MessageSquare, Star, User, Calendar, Filter, Download, X, ThumbsUp, Flag } from 'lucide-react';

const CommentsManagement = () => {
  const [comments, setComments] = useState([
    {
      id: 8237,
      ngayBinhLuan: "13/11/2024 09:43:33",
      noiDung: "Phòng tốt",
      saoBinhLuan: 5,
      tenNguoiBinhLuan: "erjhhY",
      avatar: "http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg"
    },
    {
      id: 10319,
      ngayBinhLuan: "2025-03-27T18:27:46.117Z",
      noiDung: "Okkk baybi",
      saoBinhLuan: 5,
      tenNguoiBinhLuan: "hoàng vũ",
      avatar: ""
    },
    {
      id: 11345,
      ngayBinhLuan: "2025-04-09T10:17:20.836Z",
      noiDung: "Ok",
      saoBinhLuan: 5,
      tenNguoiBinhLuan: "hoàng vũ",
      avatar: ""
    },
    {
      id: 11360,
      ngayBinhLuan: "2025-04-15T06:14:38.854Z",
      noiDung: "beautiful",
      saoBinhLuan: 4,
      tenNguoiBinhLuan: "john doe",
      avatar: ""
    },
    {
      id: 11361,
      ngayBinhLuan: "2025-01-10T14:20:00.000Z",
      noiDung: "Phòng rất sạch sẽ và tiện nghi",
      saoBinhLuan: 5,
      tenNguoiBinhLuan: "Minh Anh",
      avatar: ""
    },
    {
      id: 11362,
      ngayBinhLuan: "2024-12-25T08:30:00.000Z",
      noiDung: "Dịch vụ tốt nhưng giá hơi cao",
      saoBinhLuan: 3,
      tenNguoiBinhLuan: "Thanh Tùng",
      avatar: ""
    },
    {
      id: 11363,
      ngayBinhLuan: "2025-01-15T16:45:00.000Z",
      noiDung: "Không tốt lắm, cần cải thiện",
      saoBinhLuan: 2,
      tenNguoiBinhLuan: "Lan Hương",
      avatar: ""
    },
    {
      id: 11364,
      ngayBinhLuan: "2025-02-01T11:00:00.000Z",
      noiDung: "Perfect place! Highly recommended",
      saoBinhLuan: 5,
      tenNguoiBinhLuan: "Emma Watson",
      avatar: ""
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const formatDate = (dateString) => {
    try {
      if (dateString.includes('/')) {
        return dateString;
      }
      const date = new Date(dateString);
      return date.toLocaleString('vi-VN', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  const getDefaultAvatar = (name) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-orange-500', 'bg-teal-500'];
    const initial = name ? name.charAt(0).toUpperCase() : 'U';
    const colorIndex = name ? name.length % colors.length : 0;
    return { initial, color: colors[colorIndex] };
  };

  const getRatingColor = (rating) => {
    if (rating >= 4) return 'text-green-600';
    if (rating === 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRatingBadge = (rating) => {
    if (rating >= 4) return { bg: 'bg-green-100', text: 'text-green-800', label: 'Tích cực' };
    if (rating === 3) return { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Trung bình' };
    return { bg: 'bg-red-100', text: 'text-red-800', label: 'Tiêu cực' };
  };

  const filteredComments = comments.filter(comment => {
    const matchesSearch = 
      comment.noiDung.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.tenNguoiBinhLuan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.id.toString().includes(searchTerm);
    
    const matchesRating = filterRating === 'all' || comment.saoBinhLuan === parseInt(filterRating);
    
    return matchesSearch && matchesRating;
  });

  const handleDelete = (comment) => {
    setCommentToDelete(comment);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    setComments(comments.filter(c => c.id !== commentToDelete.id));
    setShowDeleteDialog(false);
    setCommentToDelete(null);
  };

  const showCommentDetail = (comment) => {
    setSelectedComment(comment);
    setShowDetailModal(true);
  };

  const stats = {
    total: comments.length,
    fiveStar: comments.filter(c => c.saoBinhLuan === 5).length,
    fourStar: comments.filter(c => c.saoBinhLuan === 4).length,
    threeStar: comments.filter(c => c.saoBinhLuan === 3).length,
    lowStar: comments.filter(c => c.saoBinhLuan <= 2).length,
    avgRating: (comments.reduce((sum, c) => sum + c.saoBinhLuan, 0) / comments.length).toFixed(1)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">💬 Quản lý Bình Luận</h1>
          <p className="text-slate-600">Quản lý và theo dõi đánh giá từ khách hàng</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Tổng bình luận</p>
                <p className="text-3xl font-bold text-slate-800">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Đánh giá TB</p>
                <p className="text-3xl font-bold text-amber-600">{stats.avgRating}</p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-amber-600 fill-amber-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">5 sao</p>
                <p className="text-3xl font-bold text-green-600">{stats.fiveStar}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">4-3 sao</p>
                <p className="text-3xl font-bold text-blue-600">{stats.fourStar + stats.threeStar}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ThumbsUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Dưới 3 sao</p>
                <p className="text-3xl font-bold text-red-600">{stats.lowStar}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Flag className="w-6 h-6 text-red-600" />
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
                  placeholder="Tìm kiếm theo nội dung, tên người dùng, ID..."
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
              >
                <option value="all">Tất cả đánh giá</option>
                <option value="5">5 sao</option>
                <option value="4">4 sao</option>
                <option value="3">3 sao</option>
                <option value="2">2 sao</option>
                <option value="1">1 sao</option>
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
              <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <Download className="w-4 h-4" />
                Xuất
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComments.map((comment) => {
              const avatar = getDefaultAvatar(comment.tenNguoiBinhLuan);
              const ratingBadge = getRatingBadge(comment.saoBinhLuan);
              
              return (
                <div key={comment.id} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {comment.avatar ? (
                        <img 
                          src={comment.avatar} 
                          alt={comment.tenNguoiBinhLuan}
                          className="w-12 h-12 rounded-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className={`w-12 h-12 rounded-full ${avatar.color} flex items-center justify-center text-white font-bold text-lg ${comment.avatar ? 'hidden' : ''}`}>
                        {avatar.initial}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">{comment.tenNguoiBinhLuan}</div>
                        <div className="text-xs text-slate-500">ID: {comment.id}</div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${ratingBadge.bg} ${ratingBadge.text}`}>
                      {ratingBadge.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < comment.saoBinhLuan ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
                      />
                    ))}
                    <span className={`ml-2 font-semibold ${getRatingColor(comment.saoBinhLuan)}`}>
                      {comment.saoBinhLuan}/5
                    </span>
                  </div>

                  <p className="text-slate-700 mb-4 line-clamp-3">{comment.noiDung}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(comment.ngayBinhLuan)}</span>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => showCommentDetail(comment)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(comment)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
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
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Nội dung</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Đánh giá</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Ngày</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredComments.map((comment) => {
                    const avatar = getDefaultAvatar(comment.tenNguoiBinhLuan);
                    const ratingBadge = getRatingBadge(comment.saoBinhLuan);
                    
                    return (
                      <tr key={comment.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {comment.avatar ? (
                              <img 
                                src={comment.avatar} 
                                alt={comment.tenNguoiBinhLuan}
                                className="w-10 h-10 rounded-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            <div className={`w-10 h-10 rounded-full ${avatar.color} flex items-center justify-center text-white font-bold ${comment.avatar ? 'hidden' : ''}`}>
                              {avatar.initial}
                            </div>
                            <div>
                              <div className="font-medium text-slate-900">{comment.tenNguoiBinhLuan}</div>
                              <div className="text-sm text-slate-500">ID: {comment.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 max-w-md">
                          <p className="text-slate-700 line-clamp-2">{comment.noiDung}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-3 h-3 ${i < comment.saoBinhLuan ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
                                />
                              ))}
                            </div>
                            <span className={`font-semibold ${getRatingColor(comment.saoBinhLuan)}`}>
                              {comment.saoBinhLuan}
                            </span>
                          </div>
                          <span className={`mt-1 inline-block px-2 py-1 rounded-full text-xs font-medium ${ratingBadge.bg} ${ratingBadge.text}`}>
                            {ratingBadge.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-600 text-sm">
                          {formatDate(comment.ngayBinhLuan)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              onClick={() => showCommentDetail(comment)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDelete(comment)}
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

        {showDetailModal && selectedComment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
              <div className="border-b border-slate-200 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">Chi tiết bình luận</h2>
                <button 
                  onClick={() => setShowDetailModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6 p-4 bg-slate-50 rounded-lg">
                  {selectedComment.avatar ? (
                    <img 
                      src={selectedComment.avatar} 
                      alt={selectedComment.tenNguoiBinhLuan}
                      className="w-16 h-16 rounded-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`w-16 h-16 rounded-full ${getDefaultAvatar(selectedComment.tenNguoiBinhLuan).color} flex items-center justify-center text-white font-bold text-2xl ${selectedComment.avatar ? 'hidden' : ''}`}>
                    {getDefaultAvatar(selectedComment.tenNguoiBinhLuan).initial}
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-bold text-slate-800">{selectedComment.tenNguoiBinhLuan}</div>
                    <div className="text-sm text-slate-500">ID: {selectedComment.id}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-slate-600 mb-2">Đánh giá</div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-6 h-6 ${i < selectedComment.saoBinhLuan ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
                        />
                      ))}
                    </div>
                    <span className={`text-2xl font-bold ${getRatingColor(selectedComment.saoBinhLuan)}`}>
                      {selectedComment.saoBinhLuan}/5
                    </span>
                    <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${getRatingBadge(selectedComment.saoBinhLuan).bg} ${getRatingBadge(selectedComment.saoBinhLuan).text}`}>
                      {getRatingBadge(selectedComment.saoBinhLuan).label}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-slate-600 mb-2">Nội dung</div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-slate-800 leading-relaxed">{selectedComment.noiDung}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-slate-600 mb-2">Thời gian</div>
                  <div className="flex items-center gap-2 text-slate-800">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{formatDate(selectedComment.ngayBinhLuan)}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <button className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Chỉnh sửa
                  </button>
                  <button 
                    onClick={() => {
                      setShowDetailModal(false);
                      handleDelete(selectedComment);
                    }}
                    className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Xóa bình luận
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showDeleteDialog && commentToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Xác nhận xóa</h2>
              <p className="text-slate-600 mb-6">
                Bạn có chắc muốn xóa bình luận của <strong>{commentToDelete.tenNguoiBinhLuan}</strong>?
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

export default CommentsManagement;