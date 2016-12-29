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

CONFIG.addSubMenuInfoArray({
	name   : '菜单管理',
	icon   : 'setting',
	submenu: [
		{
			name     : '后台菜单',
			path     : '/menu',
			icon     : 'menu',
			component: componentList.Quanxiancaidan,
		},
	]
});



export default CONFIG.init();
