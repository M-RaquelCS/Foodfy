const listStage1 = document.querySelector('.listStage1');
const buttonShowHidden = document.querySelector('.handleShowHiddenList');
buttonShowHidden.addEventListener('click', function(){
        if(buttonShowHidden.innerHTML == 'ESCONDER'){
            listStage1.classList.add('hidden')
            buttonShowHidden.innerHTML = 'MOSTRAR'
        }else{
            listStage1.classList.remove('hidden')
            buttonShowHidden.innerHTML = 'ESCONDER'
        }
    }
)

const listStage2 = document.querySelector('.listStage2');
const buttonShowHidden2 = document.querySelector('.handleShowHiddenList2');
buttonShowHidden2.addEventListener('click', function(){
        if(buttonShowHidden2.innerHTML == 'ESCONDER'){
            listStage2.classList.add('hidden')
            buttonShowHidden2.innerHTML = 'MOSTRAR'
        }else{
            listStage2.classList.remove('hidden')
            buttonShowHidden2.innerHTML = 'ESCONDER'
        }
    }
)

const paragrafStage = document.querySelector('.paragrafStage');
const buttonShowHidden3 = document.querySelector('.handleShowHiddenList3');
buttonShowHidden3.addEventListener('click', function(){
        if(buttonShowHidden3.innerHTML == 'ESCONDER'){
            paragrafStage.classList.add('hidden')
            buttonShowHidden3.innerHTML = 'MOSTRAR'
        }else{
            paragrafStage.classList.remove('hidden')
            buttonShowHidden3.innerHTML = 'ESCONDER'
        }
    }
)