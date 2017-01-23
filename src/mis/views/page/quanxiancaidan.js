import React, { Component } from 'react'

class Node extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			list        : [
				'1',
				'12',
				'123',
				'1234',
				'我爱你',
				'wwwwwwa'
			],
			searchResult: [],
			reverseWords: "the sky is blue"
		};
	}

	searchHandler(ev) {
		let value  = ev.target.value;
		let newArr = [];
		if (value != '') {
			this.state.list.map((v, k) => {
				if (v.indexOf(value) != -1) {
					newArr.push(v)
				}
			});
		}

		this.setState({
			searchResult: newArr
		});
	}

	reverseWords(str) {
		let newStr = str.split(" ").reverse().join(" ");
		this.setState({
			reverseWords: newStr
		})
	}


	render() {
		return (
			<div>

				<div>
					<img style={{ width: "30%" }} src='https://www.devmsg.com/usr/uploads/2017/01/3794452843.jpeg'
					     alt=""/>
					<img style={{ width: "30%" }} src="https://www.devmsg.com/usr/uploads/2017/01/2128800822.jpeg"
					     alt=""/>
				</div>
				<div>
					其他题目 当面说 比较简单
				</div>
				<div>
					<p>8、搜索关键词：(1,2,3,4,我,w)</p>
					<input
						style={{ border: '1px solid rgb(173, 173, 173)' }}
						onChange={this.searchHandler.bind(this)}
						type="text"
					/>
					{this.state.searchResult.map((v, k) => {
						return (
							<div key={k}>{v}</div>
						)
					})}
				</div>

				<div>
					<p>9、翻转字符串</p>
					<p>{this.state.reverseWords}</p>
					<button onClick={this.reverseWords.bind(this, this.state.reverseWords)}>翻转</button>
				</div>
			</div>
		)
	}
}

export default Node;
