import React, { Component } from 'react'
import $ from 'jquery'
import {
	Form,
	Icon,
	Input,
	Button,
	Checkbox
} from 'antd';
const FormItem = Form.Item;
import '../../static/styles/page/login.scss'
import { postLoginAction } from '../../actions/adminPublicAction';
import { createHashHistory } from 'history'
import { useRouterHistory } from 'react-router'
let appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

class Node extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {};
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				$.post('http://ao.anyi.hk:1314/api/admin/public/login', values, (res) => {
					appHistory.push('/')
				});
			}
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
				<FormItem>
					{getFieldDecorator('phone', {
						rules: [{
							required: true,
							message : 'Please input your username!'
						}],
					})(
						<Input addonBefore={<Icon type="user"/>} placeholder="phone"/>
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password', {
						rules: [{
							required: true,
							message : 'Please input your Password!'
						}],
					})(
						<Input addonBefore={<Icon type="lock"/>} type="password" placeholder="Password"/>
					)}
				</FormItem>
				<FormItem>
					<a className="login-form-forgot">Forgot password</a>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					</Button>
					Or <a>register now!</a>
				</FormItem>
			</Form>
		)
	}
}

export default Form.create()(Node);