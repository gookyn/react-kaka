import axios from 'axios';

function errHandler(error) {

}

let xhr = ({
	method = 'get',
	url,
	options = {},
	headers = {},
	emulateJSON = true
}) => {
	let p;
	headers = {
		'X-Channel-Code': 'official',
		'X-Client-Agent': 'Xiaomi',
		'X-Client-Hash': '2f3d6ffkda95dlz2fhju8d3s6dfges3t',
		'X-Client-ID': '123456789123456',
		'X-Client-Version': '2.3.2',
		'X-Long-Token': '',
		'X-Platform-Type': '0',
		'X-Platform-Version': '5.0',
		'X-Serial-Num': '1492140134',
		'X-User-ID': ''
	}
	switch(method) {
		case 'get':
			p = new Promise(function(resolve, reject) {
				axios.get(url, {
					params: options
				}).then(function(response) {
					resolve(response.data);
					/*if(response.data.header &&
						response.data.header.statusCode &&
						~~response.data.header.statusCode) {
						resolve(response.data);
					} else {
						reject(response.data.header.errorMsg);
					}*/
				}, function(response) {
					errHandler(response);
				});
			});
			break;
		case 'post':
			p = new Promise(function(resolve, reject) {
				axios.post(url, options, {
					headers,
					emulateJSON
				}).then(function(response) {
					resolve(response.data);
					/*if(response.data.header &&
						response.data.header.statusCode &&
						~~response.data.header.statusCode) {
						resolve(response.data.body);
					} else {
						reject(response.data.header.errorMsg);
					}*/
				}, function(response) {
					errHandler(response);
				});
			});
			break;
		default:
			p = null;
	}

	return p;
}

export default xhr;