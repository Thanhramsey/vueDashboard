// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
	drawer: null,
	drawerImage: false,
	mini: false,
	// 13/0/2021 Update left menu content
	menuItems: [
		{
			title: 'Thống kê phiếu thu',
			icon: 'mdi-view-dashboard',
			to: '/',
		},
		{
			title: 'Báo cáo',
			icon: 'mdi-account',
			to: '/components/profile/',
		},
		{
			title: 'Nghiệp vụ',
			icon: 'mdi-cog',
			//   to: '/tables/regular/',
			items: [
				{
					title: 'Phân tuyến thu',
					icon: 'mdi-arrow-all',
					to: '/tables/regular/',
				},
				{
					title: 'Xác nhận phiếu khách hàng',
					icon: 'mdi-checkbox-marked',
					to: '',
				},
				{
					title: 'Xác nhận phiếu',
					icon: 'mdi-checkbox-marked-outline',
					to: '',
				},
				{
					title: 'Phiếu thu',
					icon: 'mdi-book-edit',
					to: '',
				},
				{
					title: 'Tạo Phiếu thu',
					icon: 'mdi-digital-ocean',
					to: '',
				}
			],
		},
		{
			title: 'Hóa đơn điện tử',
			icon: 'mdi-card-account-details',
			//   to: '/components/typography/',
			items: [
				{
					title: 'Tọa hóa đơn',
					icon: 'mdi-cart-minus',
					to: '/components/typography/',
				},
				{
					title: 'Cấu hình',
					icon: ' mdi-format-list-bulleted',
					to: '',
				},
				{
					title: 'Danh sách hóa đơn',
					icon: 'mdi-book-edit',
					to: '',
				},
				{
					title: 'Hóa đơn điều chỉnh',
					icon: 'mdi-format-list-bulleted',
					to: '',
				},
				{
					title: 'Hóa đơn thay thế',
					icon: 'mdi-alien',
					to: '',
				},
				{
					title: 'Log thao tác',
					icon: 'mdi-camera-timer',
					to: '',
				},
				{
					title: 'Mẫu hóa đơn',
					icon: 'mdi-card-account-details-outline',
					to: '',
				}
			],
		},
		{
			title: 'Danh mục',
			icon: 'mdi-chart-bar',
			//   to: '/components/icons/',
			items: [
				{
					title: 'Khách hàng',
					icon: 'mdi-book',
					to: '/components/icons/',
				},
				{
					title: 'Nhân viên',
					icon: 'mdi-account',
					to: '',
				},
				{
					title: 'Mức phí',
					icon: 'mdi-cash-100',
					to: '',
				},
				{
					title: 'Loại khách hàng',
					icon: 'mdi-card-account-details',
					to: '',
				},
				{
					title: 'Nhóm khách hàng',
					icon: 'mdi-account-group',
					to: '',
				},
			],
		},
		{
			title: 'Hệ thống',
			icon: 'mdi-cog',
			//   to: '/maps/google/',
			items: [
				{
					title: 'Hướng dẫn',
					icon: 'mdi-book-variant',
					to: '/maps/google/',
				},
				{
					title: 'Phân quyền',
					icon: 'mdi-hand',
					to: '',
				},
				{
					title: 'Menu',
					icon: 'mdi-menu',
					to: '',
				},
				{
					title: 'Thông báo',
					icon: 'mdi-chat-processing',
					to: '',
				},
				{
					title: 'Chức năng',
					icon: 'mdi-wrench',
					to: '',
				},
				{
					title: 'Cấu hình',
					icon: 'mdi-cogs',
					to: '',
				},
			],
		},
		{
			title: 'Đơn vị hành chính',
			icon: 'mdi-bank',
			//   to: '/components/notifications/',
			items: [
				{
					title: 'Danh sách tỉnh/thành phố',
					icon: 'mdi-city',
					to: '',
				},
				{
					title: 'Quận/Huyện',
					icon: 'mdi-home-city',
					to: '',
				},
				{
					title: 'Phường(Xã)',
					icon: 'mdi-home-city-outline',
					to: '',
				},
				{
					title: 'Khu vực',
					icon: 'mdi-wan',
					to: '',
				},
				{
					title: 'Tuyến đường',
					icon: 'mdi-road-variant',
					to: '',
				},
			],
		},
		{
			title: 'Hướng dẫn sử dụng',
			icon: 'mdi-exclamation-thick',
			to: '/components/notifications/',
		},
		{
			title: 'Đăng xuất',
			icon: 'mdi-logout',
			to: "",
		},
	],
}

const mutations = make.mutations(state)

const actions = {
	...make.actions(state),
	init: async ({ dispatch }) => {
		//
	},
}

const getters = {}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
}
