import React, { Component } from 'react'
import { Link } from 'react-router'
import reduxHigher from '../../widget/appConfig'
import {
	Row,
	Col,
	Button,
	Rate,
	Menu,
	Breadcrumb,
	Icon,
} from 'antd';

const SubMenu = Menu.SubMenu;

@reduxHigher
class Node extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			current : '0-0',
			openKeys: '0'
		};
	}

	render() {
		let { appConfig } = this.props;
		return (
			
			<Menu mode="inline" defaultOpenKeys={[this.state.openKeys]} defaultSelectedKeys={[this.state.current]}>
				{appConfig.menu.admin.navList.map((v, k)=> {
					if (v.submenu == undefined) {
						return (
							<Menu.Item key={k + '-' + k}><Link to={`${window.appName}${v.path}`}><Icon type={v.icon}/>{v.name}</Link></Menu.Item>
						)
					} else {
						return (
							<SubMenu key={k} title={<span><Icon type={v.icon}/><span>{v.name}</span></span>}>

								{v.submenu && v.submenu.map((vv, kk)=> {
									return (
										<Menu.Item key={k + '-' + kk}><Link
											to={`${window.appName}${vv.path}`}>{vv.name}</Link></Menu.Item>
									)
								})}
							</SubMenu>
						)
					}
				})}

			</Menu>
		)
	}
}

export default Node;
