let titleinput = document.getElementById("title_input").value;
let nouninput = document.getElementById('noun').value
let verbinput = document.getElementById('verb').value
let adjectiveinput = document.getElementById('adjective').value
let para=document.getElementById('story_result')
let sumbitBtn= document.getElementById("submit_button") 
let formcont= document.getElementsByClassName('form_container')[0]
let titleinput2 = document.getElementById('title_input')
let replaceT= document.getElementById('main_title')

titleinput2g.onkeyup=function(){
    replaceT.innerHTML= titleinput2.value
}
sumbitBtn.onclick=function(event){
    event.preventDefault()
    titleinput = document.getElementById("title_input").value;
    nouninput = document.getElementById('noun').value
    verbinput = document.getElementById('verb').value
    adjectiveinput = document.getElementById('adjective').value
    if (titleinput === ''){
        alert('Please fill in all fields')

        document.getElementById('title_input')
        document.getElementById('noun')
        document.getElementById('verb')
        document.getElementById('adjective')
    }     
    if(titleinput && nouninput && verbinput && adjectiveinput){
        formcont.style.display='none'
        para.innerHTML="I ate a" + nouninput +" and today I just had to"+ verbinput + ". What a "+ adjectiveinput+ "day!"
        document.getElementById('title_input')
        document.getElementById('noun')
        document.getElementById('verb')
        document.getElementById('adjective')
    }
}




    
