import React, { Component } from 'react'
import { Link } from 'react-router'
import LeftNav from './public/leftnav'
import {
	Row,
	Col,
	Button,
	Rate,
	Menu,
	Breadcrumb,
	Icon,
	Dropdown,
	Badge,
	notification
} from 'antd';

import Redux from './public/appConfigReduxHigherFunction'
import '../static/styles/page/home.scss';

@Redux
class Node extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			info:[
				'姓名:李凯旗',
				'职业:前端工程师',
				'博客:https://www.devmsg.com',
				'github:https://github.com/devmsg',
				'技术栈:react redux webpack es6 react-native'

			]
		};
	}

	componentWillReceiveProps(props) {
		const { publicReducer, hideErrorItemAction } = props;
		const { errorItemType }                      = publicReducer;
		const { type, errorType, content, title, duration }    = errorItemType;
		const messageConfig = {
			message    : title,
			description: content,
			key        : Date.now(),
			onClose    : hideErrorItemAction,
			duration   : duration
		};

		if (type) {
			notification[errorType](messageConfig);
		}
	}

	render() {
		return (
			<div className="ant-layout-aside">
				<aside className="ant-layout-sider">
					<div className="ant-layout-logo"></div>
					<LeftNav/>
				</aside>
				<div className="ant-layout-main">
					<div className="ant-layout-header">
						mis系统
					</div>
					<div className="ant-layout-body-main">
						<div className="ant-layout-container">
							<div className="ant-layout-content">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Node;
