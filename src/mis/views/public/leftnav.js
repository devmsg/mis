import React, { Component } from 'react'
import {
	Link,
} from 'react-router'
import Redux from '../public/appConfigReduxHigherFunction'
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

@Redux
class Node extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.current = [];
		this.openKeys= '';
		this.state = {};
	}

	componentWillMount() {
		let { appConfigReducer } = this.props;
		let router = '/' + window.location.hash.replace(/#/, '').split('/')[1];
		const { menu } = appConfigReducer;
		menu.admin.navList.map((v, k) => {
			if (v.submenu == undefined) {
				if (v.path == router) {
					this.current.push(k + '');
				}
			} else {
				{
					v.submenu && v.submenu.map((vv, kk) => {
						if (vv.path == router) {
							this.openKeys= k.toString();
							this.current.push(k + '-' + kk);
						}
					})
				}
			}
		});
	}

	render() {
		const { appConfigReducer } = this.props;
		return (

			<Menu mode="inline"
			      theme="dark"
			      defaultOpenKeys={[this.openKeys]}
			      defaultSelectedKeys={this.current}>
				{appConfigReducer.menu.admin.navList.map((v, k) => {
					if (v.submenu == undefined) {
						return (
							<Menu.Item key={k}>
								<Link to={`${window.appName}${v.path}`}>
									<Icon style={!this.props.collapse ?
									             { fontSize: "12px", transition: 'all 0.3s ease' } :
									             { fontSize: "16px", transition: 'all 0.3s ease' }} type={v.icon}/>
									{v.name}
								</Link>
							</Menu.Item>
						)
					} else {
						return (

							<SubMenu key={k} title={<span><Icon type={v.icon}/><span>{v.name}</span></span>}>
								{v.submenu && v.submenu.map((vv, kk) => {
									return (
										<Menu.Item key={k + '-' + kk}>
											<Link to={`${window.appName}${vv.path}`}>
												<Icon type={vv.icon}/>
												{vv.name}
											</Link>
										</Menu.Item>
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
