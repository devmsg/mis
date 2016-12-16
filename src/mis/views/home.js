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
		this.state = {};
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
					<div className="ant-layout-header">12</div>
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
