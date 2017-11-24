// 登录
import React from 'react';
import { Button, List, InputItem, Toast } from 'antd-mobile';

import './login.scss';
import logo from './../../images/common/logo.png';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			account: '',
			pwd: ''
		};
	}

	// 登录
	loginHandle(event) {
		if(this.state.account === '1' && this.state.pwd === '1') {
			this.props.history.push('/home');
		} else {
			Toast.fail('账号或密码不正确', 1);
		}
	}

	// 输入账号
	inputAccout(value) {
		this.setState({
			account: value
		});
	}

	// 输入密码
	inputPwd(value) {
		this.setState({
			pwd: value
		});
	}

	render() {
		return(
			<div className="login-wrapper">
				<div className="logo-wrapper">
					<div className="logo">
						<img src={logo} alt="kaka"/>
					</div>
					<div className="welcome fs-16">情之所至，一往而深</div>
				</div>
				<List className="input-wrapper">
					<InputItem clear placeholder="手机号" value={this.state.account} onChange={this.inputAccout.bind(this)} labelNumber={3} className="account-input">
						<i className="iconfont icon-account"></i>
					</InputItem>
					<InputItem clear placeholder="密码" type="password" value={this.state.pwd} onChange={this.inputPwd.bind(this)} labelNumber={3} className="pwd-input">
						<i className="iconfont icon-mima"></i>
					</InputItem>
				</List>
				<Button type="primary" onClick={this.loginHandle.bind(this)} className="login-btn">登录</Button>
				<Button type="primary" className="register-btn">注册</Button>
			</div>
		)
	}
}

export default Login;