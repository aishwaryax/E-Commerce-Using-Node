//language menu

const languageBtn = document.querySelector(".current_language");
const languageOptions = document.querySelector(".language_options");
const chevron = document.querySelector(".chevron")

languageBtn.addEventListener('click', function(){
    languageOptions.classList.toggle("show_options");
    chevron.classList.toggle("rotate");
});


const mobileLanguageBtn = document.querySelector(".m_current_language");
const mobileLanguageOptions = document.querySelector(".m_language_options");
const mobileChevron = document.querySelector(".m_chevron")

mobileLanguageBtn.addEventListener('click', function(){
    mobileLanguageOptions.classList.toggle("show_options");
    mobileChevron.classList.toggle("rotate");
});

//pages dropdown

const pagesToggle = document.querySelector(".pages_toggle");
const pagesLink = document.querySelector(".pages_toggle a")
const pages = document.querySelector(".pages");

pagesToggle.addEventListener('mouseover', function(){
    pages.classList.add("show_pages");
    pagesLink.style.backgroundColor = 'black';
    pagesLink.style.color = 'white';
});
pagesToggle.addEventListener('mouseout', function(){
    pages.classList.remove("show_pages");
    pagesLink.style.backgroundColor = 'transparent';
    pagesLink.style.color = 'black';
});

pages.addEventListener('mouseover', function(){
    pages.classList.add("show_pages");
    pagesLink.style.backgroundColor = 'black';
    pagesLink.style.color = 'white';
});
pages.addEventListener('mouseout', function(){
    pages.classList.remove("show_pages");
    pagesLink.style.backgroundColor = 'transparent';
    pagesLink.style.color = 'black';
});

const mobilePagesToggle = document.querySelector(".m_pages_toggle");
const mobilePages = document.querySelector(".m_pages");
const mobilePagesChevron = document.querySelector(".m_pages_chevron")

mobilePagesToggle.addEventListener('click', function(){
    mobilePages.classList.toggle("show_pages");
    mobilePagesChevron.classList.toggle("rotate");
});


//mobile menu 

const mobileMenuToggle = document.querySelector(".bars");
const mobileMenu = document.querySelector(".mobile_menu");
const closeMobileMenu = document.querySelector(".close_mobile")

mobileMenuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle("show_mobile_menu");
    mobileMenuToggle.classList.toggle("transform");
});

closeMobileMenu.addEventListener('click', function(){
    mobileMenu.classList.remove("show_mobile_menu");
    mobileMenuToggle.classList.remove("transform");
})


//hide departments

const departmentsList = document.querySelector(".departments ul");
const toggleDepartments = document.querySelector(".title");
const departmentsChevron = document.querySelector(".departments_chevron");

toggleDepartments.addEventListener('click', function(){
    departmentsList.classList.toggle("hide_departments");
    departmentsChevron.classList.toggle("rotate");
});





//slider

if ( document.URL.includes("index.html") ) {

    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    let counter = 0;

    nextBtn.addEventListener('click', function(){
        counter++;
        // appendSlide();
        slider();
    });

    prevBtn.addEventListener('click', function(){
        counter--;
        // prependSlide();
        slider();
    });

    function slider(){
        let mq = window.matchMedia( "(min-width: 768px)" );
        if (mq.matches) {      
            if (counter >= slides.length - 2) {
                counter = 0;
            } else if (counter < 0) {
                counter = slides.length - 3;
            }
        } else {
            if (counter >= slides.length - 1) {
                counter = 0;
            } else if (counter < 0) {
                counter = slides.length - 2;
            }
        };

        let mq2 = window.matchMedia( "(min-width: 992px)" );
        if (mq2.matches) {      
            if (counter >= slides.length - 3) {
                counter = 0;
            } else if (counter < 0) {
                counter = slides.length - 4;
            }
        };

        slides.forEach(function(slide){
            slide.style.transform = `translateX(-${counter * 100}%)`
        })
    };
};


//sales slider 
if ( document.URL.includes("shop.html") ) {

    const saleProducts = document.querySelectorAll(".sale_product");
    const salePrevBtn = document.querySelector(".salePrevBtn");
    const saleNextBtn = document.querySelector(".saleNextBtn");
    let counter = 0;

    saleNextBtn.addEventListener('click', function(){
        counter++;
        saleSlider();
    });

    salePrevBtn.addEventListener('click', function(){
        counter--;
        saleSlider();
    });

    function saleSlider(){

        let mq = window.matchMedia( "(min-width: 768px)" );
        if (mq.matches) {      
            if (counter >= saleProducts.length - 1) {
                counter = 0;
            } else if (counter < 0) {
                counter = saleProducts.length - 2;
            }
        } else {
            if (counter >= saleProducts.length - 1) {
                counter = 0;
            } else if (counter < 0) {
                counter = saleProducts.length - 2;
            }
        };

        saleProducts.forEach(function(product){
            product.style.transform = `translateX(-${counter * 240}px)`
        })

        let mq2 = window.matchMedia( "(min-width: 992px)" );
        if (mq2.matches) {      
            if (counter >= saleProducts.length - 3) {
                counter = 0;
            } else if (counter < 0) {
                counter = saleProducts.length - 4;
            }

            saleProducts.forEach(function(product){
                product.style.transform = `translateX(-${counter * 217}px)`
            })
        };


    };
};


//preview options

if ( document.URL.includes("shop.html") ) {

    const sortButton = document.querySelector(".sort a");
    const sortingOptions = document.querySelector(".sorting_options");
    const sortChevron = document.querySelector(".sort_chevron");

    sortButton.addEventListener('click', function(){
        sortingOptions.classList.toggle("show_options");
        sortChevron.classList.toggle("rotate");
    });
};


//range slider

if ( document.URL.includes("shop.html") ) {

    const inputLeft = document.getElementById("input-left");
    const inputRight = document.getElementById("input-right");

    const thumbLeft = document.querySelector(".thumb_left");
    const thumbRight = document.querySelector(".thumb_right");
    const range = document.querySelector(".range")

    function setLeftValue() {
        let _this = inputLeft,
            min = parseInt(_this.min);
            max = parseInt(_this.max);

        _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

        let percent = (_this.value - min) / (max - min) * 100;

        thumbLeft.style.left = percent + "%";
        range.style.left = percent + "%";
    }
    setLeftValue();

    function setRightValue() {
        let _this = inputRight,
            min = parseInt(_this.min);
            max = parseInt(_this.max);

        _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) - 1);

        let percent = (_this.value - min) / (max - min) * 100;

        thumbRight.style.right = (100 - percent) + "%";
        range.style.right = (100 - percent) + "%";
    }
    setRightValue();

    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);
};


//range slider values

if ( document.URL.includes("shop.html") ) {

    const minValue = document.querySelector(".min_value");
    const maxValue = document.querySelector(".max_value");
    const inputLeft = document.getElementById("input-left");
    const inputRight = document.getElementById("input-right");

    minValue.innerHTML = `$` + `${inputLeft.value}` + ` - `;
    maxValue.innerHTML = `$` + `${inputRight.value}`;

    function calcMinValue() {
        let _this = inputLeft;
        _this.value = parseInt(_this.value);
        minValue.innerHTML = `$` + `${_this.value}` + ` - `;
    }

    function calcMaxValue() {
        let _this = inputRight;
        _this.value = parseInt(_this.value);
        maxValue.innerHTML = `$` + `${_this.value}`;
    }


    inputLeft.addEventListener("input", calcMinValue);
    inputRight.addEventListener("input", calcMaxValue);
}

//content tabs

if ( document.URL.includes("shop_details.html") ) {

    const btns = document.querySelectorAll(".tab_btn");
    const info = document.querySelector(".detailed_info");
    const content = document.querySelectorAll(".content");

    info.addEventListener("click", function(e){
        const id = e.target.dataset.id;
        if(id) {
            btns.forEach(function(btn){
                btn.classList.remove("active");
                e.target.classList.add("active");
            });
            content.forEach(function(article){
                article.classList.remove("active");

            });
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    });
}

//filter for homepage - product category 

if ( document.URL.includes("index.html") ) {

    const filterBtns = document.querySelectorAll(".filters li a");
    const products = document.querySelectorAll(".featured_product")

    filterBtns.forEach(function(filterBtn){

        filterBtn.addEventListener("click", function() {
            document.querySelector(".filters li a.active").classList.remove("active");
            filterBtn.classList.add("active");

            let dataCat = filterBtn.dataset.category;

            products.forEach(function(product) {
                let productCat = product.dataset.category;

                if (dataCat === "all") {
                    product.classList.add("active");
                    return;
                }

                if (productCat !== dataCat) {
                    product.classList.remove("active");
                } else if (productCat === dataCat) {
                    product.classList.add("active");
                };

            });
        });

    });

};


//date 

const date = document.querySelector(".date2");
date.innerHTML = new Date().getFullYear();