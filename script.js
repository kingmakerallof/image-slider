const imgs = document.querySelectorAll('.img a');
const imgDiv = document.querySelectorAll('.img');
let imgId = 1;
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const qtyTxt = document.querySelector('#qty');




imgs.forEach((img) => {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        imgId = img.dataset.id;

        imgDiv.forEach((img) => {
            img.classList.remove('active');
        });

        img.parentElement.classList.add('active');

        moveImage();
    });
});


function moveImage() {
    const imgWidth = document.querySelector('.main-image img:first-child').clientWidth;
    let width = (imgId - 1) * imgWidth;
    document.querySelector('.main-image').style.transform = `translateX(${-width}px)`
};


minusBtn.addEventListener('click', () => {
    let qty = parseInt(qtyTxt.value);
    if (qty > 0) {
        qty--;
        qtyTxt.value = qty;
    }
});

plusBtn.addEventListener('click', () => {
    let qty = parseInt(qtyTxt.value);
    if (qty >= 0 && qty < 5) {
        qty++;
        qtyTxt.value = qty;
    }
});