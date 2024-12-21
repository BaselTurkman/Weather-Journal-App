/* Global Variables */
const apiKey = '6768187e830372f341dae201aafa4d8b&units=imperial';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

// arrow function to get data from weatherData
const getWeatherData = async (zipCode) => {
    const req = await fetch(`${baseURL}?zip=${zipCode}&appid=${apiKey}`);
    try {
        const data = await req.json();
        return data;
    }
    catch (error) {
        console.log("Something went wrong in getWeatherData :)" + error);
    }
}
// arrow function to post data
const postData = async (url, data = {}) => {
    const req = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const datas = await req.json();
        return datas;
    }
    catch(error){
        console.log("Something went wrong in postData :)" + error);
    }
}

const getData = async () =>{
    const req = await fetch('/getData');
    try{
        const allData = await req.json();
        //write the data in the browser
        document.getElementById('temp').innerHTML = Math.round(allData.temperature) + ' degrees' ;
        document.getElementById('content').innerHTML = allData.userResponse ;
        document.getElementById('date').innerHTML = allData.date;
    }
    catch(error){
        console.log("Something went wrong in getData :)" + error);
    }
}

function performAction(event) {
    const newZip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeatherData(newZip)
        .then(function (data) {
            if (data && data.main) {
                postData('/addData', { temperature: data.main.temp, date: newDate, userResponse: feelings })
                    .then(() => getData());
            } else {
                document.getElementById('temp').innerHTML = '';
                document.getElementById('content').innerHTML = '';
                document.getElementById('date').innerHTML = '';
            }
        })
        .catch(function (error) { // Correct syntax
            console.log("Something went wrong in performAction :)" + error);
            document.getElementById('temp').innerHTML = '';
            document.getElementById('content').innerHTML = '';
            document.getElementById('date').innerHTML = '';
        });
}

document.getElementById('generate').addEventListener('click', performAction);

