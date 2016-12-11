import componentList from '../routers/componentList'

/**
 * STORETREE : 左侧栏的admin的数据结构
 * @type {{menu: {admin: {navList: Array}}, router: Array}}
 */

const STORETREE = {
	menu  : {
		admin: {
			navList: []
		}
	},
	router: []
};

/**
 *
 * addRouter: 增加Router 参数(path:地址,component:组件)
 *
 * addMenuInfoArray: 增加左边栏权限菜单 参数({name:菜单名字,icon:图标,path:地址},component:组件)
 *
 * addSubMenuInfoArray: 增加左边栏下拉菜单 参数(name:菜单名字,icon:图标,subArray[name:菜单名字, path:地址,component:组件])
 */
const CONFIG = {
	addRouter: function (path, component) {
		STORETREE.router.push({
			path,
			component,
		});
	},

	addMenuInfoArray: function (obj = {
		name: '',
		icon: '',
		path: ''
	}, component = '') {
		STORETREE.menu.admin.navList.push(obj);
		this.addRouter(obj.path, component);
	},

	addSubMenuInfoArray: function (obj = {
		name   : '',
		icon   : '',
		submenu: [
			{
				name     : '',
				path     : '',
				component: '',
			}
		]
	}) {
		STORETREE.menu.admin.navList.push(obj);
		obj.submenu && obj.submenu.map((v) => {
			return (
				this.addRouter(v.path, v.component)
			)
		})
	},

	init: function () {
		return {
			menu  : STORETREE.menu,
			router: STORETREE.router
		}
	},
};

CONFIG.addMenuInfoArray({
	name: '权限菜单',
	icon: 'setting',
	path: '/quanxiancandna'
}, componentList.Quanxiancaidan);

CONFIG.addSubMenuInfoArray({
	name   : '用户产品',
	icon   : 'setting',
	submenu: [
		{
			name     : '下拉菜单01',
			path     : '/1',
			icon   : 'setting',
			component: '',
		},
		{
			name     : '下拉菜单01',
			path     : '/2',
			component: ''
		},
		{
			name     : '下拉菜单01',
			path     : '/3',
			component: ''
		},
	]
});
CONFIG.addMenuInfoArray({
	name: 'path',
	icon: 'setting',
	path: '/path'
}, componentList.Path);

CONFIG.addRouter('/path', componentList.Path);

export default CONFIG.init();
