const api_key = "dUmPgT7Uld9Z8HTjmfANIVlAUnWHgNDLCdB5HwAg"
async function makeApiRequest1(){
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
  console.log(response)
  let data= await response.json()
  console.log(data)
  await showApiData1(data)
}

function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


async function makeApiRequest2(){
  let randdate = randomIntFromInterval(1, 30)
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=2021-01-${randdate}`)
  console.log(response)
  let data= await response.json()
  console.log(data)
  await showApiData2(data)
}



function showApiData1(data){
  let data_url = data.url 
  document.querySelector("#title1").innerHTML += data.title
  document.querySelector("#date1").innerHTML += data.date
  document.querySelector("#image1").innerHTML += `<img src="${data_url}" style="width:350px;height:300px;">` 
}

function showApiData2(data){
  let data_url = data.url 
  document.querySelector("#title2").innerHTML += data.title
  document.querySelector("#date2").innerHTML += data.date
  document.querySelector("#image2").innerHTML += `<img src="${data_url}" style="width:350px;height:300px;">` 
}



let btnvar1 = document.getElementById('btnh1')
  function Toggle1(){
    if (btnvar1.style.color =="red") {
      btnvar1.style.color = "grey"}
      else{
        btnvar1.style.color = "red"}
        }

let btnvar2 = document.getElementById('btnh2')
  function Toggle2(){
    if (btnvar2.style.color =="red") {
      btnvar2.style.color = "grey"}
      else{
        btnvar2.style.color = "red"}
}
    

makeApiRequest1()
makeApiRequest2()
