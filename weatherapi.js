function process()
{

url="http://api.weatherapi.com/v1/current.json?key=b37685abcbe7474a88375830221905&q=Mumbai&aqi=yes";

fetch(url).then((response)=>{
	return response.json();
}).then((data)=>{
	 document.getElementById("localtime").innerHTML=data.location.localtime;
	 document.getElementById("name").innerHTML=data.location.name;
	 document.getElementById("condition").innerHTML=data.current.condition.text
	 document.getElementById("temperature").innerHTML=data.current.temp_c+"C";
	 document.getElementById("photo").innerHTML=`<img src="${data.current.condition.icon}"/>`;
	 document.getElementById("humidity").innerHTML=data.current.humidity;
	 document.getElementById("precipitation").innerHTML=data.current.precip_in+" "+"mm";
	 document.getElementById("CO").innerHTML=data.current.air_quality.co;
	 document.getElementById("NO").innerHTML=data.current.air_quality.no2;
	 document.getElementById("o3").innerHTML=data.current.air_quality.o3;
	 document.getElementById("so2").innerHTML=data.current.air_quality.so2;
	 document.getElementById("pm10").innerHTML=data.current.air_quality.pm10;
	 document.getElementById("pm2_5").innerHTML=data.current.air_quality.pm2_5;
	 //console.log(data.current.condition.icon);

})
}



















































