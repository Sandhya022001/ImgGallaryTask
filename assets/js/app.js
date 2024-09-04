
var cl=console.log;

const images= document.getElementById('images');
const alldivs= [...document.querySelectorAll('.all')];


const onImageClick = (eve) =>{
      let selectedImg = eve.target.value;
    //   cl(selectedImg);

    alldivs.forEach(div => div.classList.add('d-none'));

    let selectedDiv = [...document.querySelectorAll('.'+ selectedImg)];
    
    selectedDiv.forEach(div => div.classList.remove('d-none'))
}



images.addEventListener('click', onImageClick);