const Url = 'https://jsonplaceholder.typicode.com/posts';
const Wea_url = 'http://api.openweathermap.org/data/2.5/weather?lat=40.7975&lon=-73.9676&units=imperial&appid=e7477656acbae304123ccb133b647055';
var Ip = new URL("http://129.236.236.129:1600");

params = {weather:'Partly Cloudy', navigation:'turn left in 200 feet'};
Object.keys(params).forEach(key => Ip.searchParams.append(key, params[key]));

fetch(Ip)
.then(data=>{return data.json()})
.then(res=>{console.log(res);document.getElementById('response').innerHTML = JSON.stringify(res);})
.catch(error=>console.log(error))
