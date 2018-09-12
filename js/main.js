

(function () { 
	function script() {
		const button = document.querySelector('#zip button');
		const input = document.querySelector('#zip input');
		const form = document.getElementById('zip');
		const list = document.getElementById('places');
		const _listBase = [];

		function liOnClick() {
			input.value = this.zip_code;
			let selected_li = document.querySelector('.selected_li');
			selected_li && (selected_li.className = '');
			this.className = 'selected_li';
		}

		function documentOnClick(e) {
			if (!e.target.zip_code && !(e.target.tagName === 'INPUT') && !(e.target.tagName === 'BUTTON') ) {
				let selected_li = document.querySelector('.selected_li');
				selected_li && (selected_li.className = '');
			}
		}
		
		form.onsubmit = function(e) {
			e.preventDefault();
			let data = base.find( 
				element => (
					element.Zipcode == input.value
				)
			)
			if (!data) {
				console.log('error: you must specify the real zip-code (5 digits)');
			} else 
				if (_listBase.find(
					element => (
						element == input.value
					)
				)) {
					console.log('This code is already entered')
				} else {

					let li = document.createElement("li");
					li.innerHTML = data.City + ', ' + data.State;
					li.zip_code = input.value;
					li.onclick = liOnClick;
					list.appendChild(li);	
					_listBase.push(input.value);
					input.value = "";
				}
		}

		document.addEventListener("click", ()=>{
			documentOnClick(event)
		})
		base.slice(8000, 8015).map((elem)=>{console.log(elem.Zipcode)});
	}


	window.addEventListener("load", script);
})();