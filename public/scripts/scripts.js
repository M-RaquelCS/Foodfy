const modalOverlay = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.recipe');

// for (let receita of receitas){
//     receita.addEventListener('click', function(){
//         modalOverlay.classList.add('active')

//         const recipeId = receita.getAtributte('id')
//         const recipeImg = receita.querySelector('img').src
//         modalOverlay.querySelector('div').id = `${recipeId}`
//         modalOverlay.querySelector('img').src = recipeImg

//     })
// }

// document.querySelector('.closeModal').addEventListener('click', function(){
//     modalOverlay.classList.remove('active')
//     modalOverlay.querySelector('img').src= ""
// })

for (let receita of receitas){
    receita.addEventListener('click', function(){
        const recipeId = receita.getAttribute('id');
        window.location.href = `/details?id=${recipeId}`
    })
}
// ----- modal e paginação details *----//