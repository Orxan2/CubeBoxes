window.addEventListener('load', function (params) {
    let frontbtn = this.document.getElementById('front');
    let rightbtn = this.document.getElementById('right');
    let topbtn = this.document.getElementById('top');
    let bottombtn = this.document.getElementById('bottom');
    let leftbtn = this.document.getElementById('left');
    let backbtn = this.document.getElementById('back');    
    let cube = document.querySelector('.cube');
    
    
    frontbtn.addEventListener('click', function (params) {
        cube.style.transform = 'rotateY(0deg)';
    });
    rightbtn.addEventListener('click', function (params) {
        cube.style.transform = 'rotateY(-90deg)';
    });
    leftbtn.addEventListener('click', function (params) {
        cube.style.transform = 'rotateY(90deg)';
    });
    backbtn.addEventListener('click', function (params) {
        cube.style.transform = 'rotateY(180deg)';
    });
    topbtn.addEventListener('click', function (params) {
        cube.style.transform = 'rotateX(-90deg)';
    });
    bottombtn.addEventListener('click', function (params) {
        cube.style.transform = 'rotateX(90deg)';
    });



});