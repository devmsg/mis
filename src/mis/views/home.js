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

require('../static/styles/page/home.scss');

@Redux
class Node extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			switch: true,
		};
	}

	switchfn() {
		this.setState({
			switch: !this.state.switch
		})
	}

	componentWillMount() {
		let scr_width = window.innerWidth;
		if (scr_width < 1400) {
			this.setState({
				switch: false
			})
		}
	}

	componentWillReceiveProps(props) {
		const { publicReducer, hideErrorItemAction } = props;
		const { errorItemType }                      = publicReducer;
		const { type, errorType, content, title,duration }    = errorItemType;
		const messageConfig                          = {
			message: title,
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

		let menu = (
			<Menu>
				<Menu.Item key="0">
					<a href="http://www.alipay.com/">1st menu item</a>
				</Menu.Item>
				<Menu.Item key="1">
					<a href="http://www.taobao.com/">2nd menu item</a>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="3">3d menu item</Menu.Item>
			</Menu>
		);

		return (
			<div id="home_box">
				<div id="head">
					<Row>
						<Col xs={24} lg={3}>
							<div className="logo">
								<img
									src=""
									alt=""/>
							</div>
						</Col>
						<Col xs={3} lg={3}>
							<div className="switch_button" onClick={this.switchfn.bind(this)}>
								<Icon type="menu-unfold"/>
							</div>
						</Col>
						<Col xs={11} lg={14}></Col>
						<Col xs={10} lg={4}>
							<div className="head_navbar">
								<ul>
									<li className="notification">
										<Dropdown overlay={menu} trigger={['click']}>
											<div className="ant-dropdown-link" href="#">
												<Badge count='1'>
													<div className="cord ">
														<Icon type="notification"/>
													</div>
												</Badge>
											</div>
										</Dropdown>
									</li>
									<div className="g_clear"></div>
								</ul>
							</div>
						</Col>
					</Row>
					<div className="g_clear"></div>
				</div>

				<Row>
					<div className="main_container">
						<Col xs={3} lg={3} className={this.state.switch ? 'sidebar' : 'sidebar active'}>
							<LeftNav />
						</Col>
						<Row>
							<Col lg={24} className={this.state.switch ? 'main_content' : 'main_content active'}>
								<div className="content">
									{this.props.children}
								</div>
							</Col>
						</Row>
					</div>
				</Row>
			</div>
		)
	}
}

export default Node;
