function run(){
  getTimestamp();
}

function getTimestamp(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4){
			var s = this.status;
			if (this.status == 200){
				alert xhttp.responseText.substr(xhttp.responseText.indexOf('epoch":')+7,10);
			}
			else{
				var e = new Error();
				e.name = '';
				e.description = '';
				return e;
			}
		}
	};
	xhttp.open("GET", "https://api.pro.coinbase.com/time", false);
	xhttp.send();
}
