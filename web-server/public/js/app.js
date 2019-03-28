console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#para1')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    

    fetch('/weather?address='+search.value).then((response)=>{

    response.json().then((data)=>{
        if(data.error){
            message1.textContent="Server didnt send back a response"
        }else{
            message1.textContent=data.location + " forecast is "+ data.forecast;
        }
    })
})
})