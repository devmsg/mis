const Util = {
	/**
	 * 高级抽象函数
	 * 数据调研
	 * @param value
	 * @param inName
	 * @param obj
	 * @param type
	 */
	handleChange: (value, inName, obj, type) => {
		var name     = inName.split('.');
		var findData = obj;
		var cb       = (obj) => {
			var indexName = name.shift();
			if (typeof(obj[indexName]) === "undefined") {
				obj[indexName] = {};
			}

			if (!name.length) {
				switch (type) {
					case 'push':
						obj[indexName].push(value);
						break;
					case 'delete':
						if (obj.constructor === Array) {
							obj.splice(indexName * 1, 1);
						} else {
							delete obj[indexName];
						}
						break;
					case 'checked':
						obj[indexName] = value;
						break;
					case 'get':
						return obj[indexName];
					default:
						obj[indexName] = value;
				}

				return findData;

			} else {
				return cb(obj[indexName]);
			}
		};
		return cb(obj);
	},

	/**
	 * 读取Url参数
	 * @param name
	 * @returns {*}
	 */
	getUrlParam: name => {
		const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		const r   = decodeURIComponent(window.location.search).substr(1).match(reg);
		if (r != null) return decodeURIComponent(r[2]);
		return null;
	},
};

export default Util;