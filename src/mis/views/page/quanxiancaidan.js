import React, { Component } from 'react'

import {
	Tabs,
	Row,
	Col,
	Button,
	Card,
	Table
} from 'antd';
import Redux from '../../widget/appConfig'

@Redux
class Node extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {};
	}

	aaaaa(){
		const { assaa } = this.props;
		assaa(12334);
	}

	render() {
		return (
			<div className="">
				<Row style={{ marginBottom: '20px' }}>
					<Col xs={24}>
						<Card title="权限菜单">
							 	<a onClick={this.aaaaa.bind(this)}>点击我</a>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Node;
