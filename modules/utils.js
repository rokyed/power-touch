module.exports = {
	mergeArgsWithValues: function (argx, values) {
		let merged = this.duplicate(argx);

		for (let k in values){
			for (let i = 0; i < merged.length; i++) {
				merged[i] = merged[i].replace('${' + k + '}', values[k])
			}
		}

		return merged
	},

	duplicate: function (objx) {
		return JSON.parse(JSON.stringify(objx))
	}
}
