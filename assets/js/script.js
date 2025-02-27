function changeImage(smlimage) {
    let mainImage = document.getElementById("main-image");
    mainImage.src = smlimage.src;

    let smlimages = document.querySelectorAll(".smlimage");
    smlimages.forEach(img => img.classList.remove("active"));
    smlimage.classList.add("active");

}

    let count = 0;

    function increaseCount() {
        count++; 
        document.getElementById("counter").textContent = count;
    };

    function decreaseCount() {
        if (count > 0) { 
            count--;
            document.getElementById("counter").textContent = count;
        }
    };
    function addtoCart() {
        alert(`${count} items have been added to yourt shopcart`);
    };

    const menu_btn = document.querySelector('.hamburger-menu');
    const mobile_nav = document.querySelector('.mobile-nav');
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');
    });

    
    