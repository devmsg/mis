import React, { Component } from 'react'
import EventList from '../../widget/utils'


class Node extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			recruit : {
				title: '招聘职位',
				info : [
					{
						title  : '工程研发部门',
						require: [
							{
								name : 'Mac开发工程师',
								count: '123'
							},
							{
								name : 'IOS App 测试工程师',
								count: '123'
							},
							{
								name : 'IOS App 测试工程师',
								count: '123'
							}

						]
					},
					{
						title  : '工程研发部门',
						require: [
							{
								name : 'Mac开发工程师',
								count: '123'
							},
							{
								name : 'IOS App 测试工程师',
								count: '123'
							}
						]
					}
				]
			},
			checkAll: [],
			keys    : []
		};
	}

	componentWillMount() {
		this.state.recruit.info.map((v, k) => {
			this.state.keys[k]     = [];
			this.state.checkAll[k] = false
			v.require && v.require.map((vv, kk) => {
				this.state.keys[k][kk] = false;
			})
		});

		this.setState({
			keys    : this.state.keys,
			checkAll: this.state.checkAll
		});

	}

	handleSubmit(keys) {
		let cloneObj = Object.assign({}, this.state.recruit);

		keys && keys.map((obj) => {
			EventList.handleChange('0', `info.${obj.k}.require.${obj.kk}.count`, cloneObj);
		});
		this.setState({
			recruit: cloneObj
		})


	}


	handleChange(k, e) {
		typeof k == "number" ? this.checkAll(k, e.target.checked) : this.checkSingle(k, e.target.checked);
	}

	checkAll(k, value) {
		this.state.keys[k] = [];
		this.state.recruit.info[k].require && this.state.recruit.info[k].require.map((v,kk)=>{
			this.state.keys[k][kk] = value;
		});

		this.state.checkAll[k] = value;
		this.setState({
			keys    : this.state.keys,
			checkAll: this.state.checkAll
		});
		console.log(this.state.keys)
	}

	checkSingle(obj, value) {
		this.state.keys[obj.k][obj.kk] = value;
		if (this.state.checkAll) {
			this.state.checkAll = !this.state.checkAll;
		}
		this.setState({
			keys: this.state.keys,
		//
		//
		checkAll: this.state.checkAll
		});
	}

	render() {
		return (
			<div className="recruit" style={{
				width          : '50%',
				backgroundColor: 'rgb(106, 127, 142)',
				color          : 'rgb(220, 220, 220)'
			}}>
				<div className="header" style={{
					padding : '10px 10px 0 10px',
					fontSize: '18px',
				}}>
					{this.state.recruit.title}
					<a href="javascripts:;" onClick={this.handleSubmit.bind(this, this.state.keys)}
					   className="right">清空</a>
					<div className="g_clear"></div>
				</div>
				{this.state.recruit.info && this.state.recruit.info.map((v, k) => {
					return (
						<div style={{
							padding     : '10px',
							borderBottom: '1px solid rgb(74, 105, 128)'
						}} key={k}>
							<div>
								<span style={{
									display  : 'inline-block',
									marginTop: '5px'
								}}>
									<input
										type="checkbox"
										checked={this.state.checkAll[k] ? 'checked' : ''}
										onChange={this.handleChange.bind(this, k)}
									/>{v.title}
								</span>
								<span className="sum right">123</span>
								<div className="g_clear"></div>
							</div>

							<div>
								{v.require && v.require.map((vv, kk) => {
									return (
										<div key={kk}>
											<span style={{
												display  : 'inline-block',
												marginTop: '5px'
											}}>
												&nbsp;&nbsp;&nbsp;&nbsp;
												<input
													type="checkbox"
													checked={this.state.keys[k][kk] ? 'checked' : ''}
												/>
												{vv.name}
											</span>
											<span className="count right">{vv.count}</span>
											<div className="g_clear"></div>
										</div>
									)
								})}
							</div>

						</div>

					)
				})}
			</div>
		)
	}
}

export default Node;