window.addEventListener('DOMContentLoaded',() =>{
//select header
const selectHeader = document.querySelector('.select__header');
const selectBody = document.querySelector('.select__body');
const selectItem = document.querySelectorAll('.select__item');
const selectTitle = document.querySelector('.select__title');
const selectImg = document.querySelector('.select__header img');

selectHeader.addEventListener('click', () => {
    if (selectBody.classList.contains('select__body--active')) {
        selectBody.classList.remove('select__body--active');
        selectBody.style.maxHeight = null;
        selectImg.style.transform = 'rotate(0deg)';
    } else {
        selectBody.classList.add('select__body--active');
        selectImg.style.transform = 'rotate(180deg)';
        selectBody.style.maxHeight = selectBody.scrollHeight + 'px';
    }
});

selectItem.forEach((item,i) => {
    item.addEventListener('click', () =>{
        selectTitle.textContent = item.textContent;
        selectBody.classList.remove('select__body--active');
        selectImg.style.transform = 'rotate(0deg)';
        selectBody.style.maxHeight = null;
    });
});


//maps
let flag = 0;

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY; 
    let mapOffset = document.querySelector('.map').offsetTop; 

    if ((scrollY >= mapOffset - 500) && (flag ==0)) {
   
let center = [47.237254623735566,39.71204638481124];
let map1 = [47.23677194497296,39.710753710154606];
let map2 = [47.23684520489473,39.7102651592085];
let map3 = [47.23721487718514,39.71419110238758];

function init() {
    let map = new ymaps.Map('map-element', {
      center: center,
      map1: map1,
      map2: map2,
      map3: map3,
      zoom: 18
    });
    
    let playsmark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/maps/mark-cart.svg',
        iconImageSize: [70, 100],
        iconImageOffset: [70,70]
      });

      let shop1 = new ymaps.Placemark(map1,
        {
            balloonContent:
            `
                <div class="balloon">
                    <h2 class="balloon__title">ФотоВышка</h2>
                    <div class="balloon__contacts">
                        <p><span>Адрес:</span> Ростов-на-Дону, улица Мечникова, 79</p>
                        <p><span>Режим работы:</span>08:00 - 20:00</p>
                        <p><span>Телефон:</span>7 (961) 310-21-21</p>
                    </div>
                </div>
            `
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/maps/mark-cart.svg',
        iconImageSize: [70, 100],
        iconImageOffset: [-30, -100]
    });
    
    let shop2 = new ymaps.Placemark(map2,
        {
            balloonContent:
            `
                <div class="balloon">
                    <h2 class="balloon__title">Апельсин</h2>
                    <div class="balloon__contacts">
                        <p><span>Адрес:</span>Ростов-на-Дону, улица Мечникова, 79</p>
                        <p><span>Режим работы:</span>круглосуточно</p>
                        <p><span>Телефон:</span>8 (800) 555-55-55</p>
                    </div>
                </div>
            `
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/maps/mark-cart.svg',
        iconImageSize: [70, 100],
        iconImageOffset: [-35, -100]
    });
    
    let shop3 = new ymaps.Placemark(map3,
        {
            balloonContent:
            `
                <div class="balloon">
                    <h2 class="balloon__title">Джойстик 161.ru</h2>
                    <div class="balloon__contacts">
                        <p><span>Адрес:</span>Ростов-на-Дону, проспект Михаила Нагибина, 2/147</p>
                        <p><span>Режим работы:</span>10:00 - 19:00</p>
                        <p><span>Телефон:</span>7 (904) 502-31-31</p>
                    </div>
                </div>
            `
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/maps/mark-cart.svg',
        iconImageSize: [70, 100],
        iconImageOffset: [-30, -100]
    });
    
    

   
    
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты


    map.geoObjects.add(playsmark);
    map.geoObjects.add(shop1);
    map.geoObjects.add(shop2);
    map.geoObjects.add(shop3);
  }
  
  ymaps.ready(init);

  flag = 1;   
    }
});

  //mobile menu
  const headerMobile = document.querySelector('.header__mobile'),
        burger = document.querySelector('.header__burger'),
        cross = document.querySelector('.header__cross'),
        body = document.querySelector('body');
        

    burger.addEventListener('click', () => {
        headerMobile.classList.toggle('active');
        burger.style.display = 'none';
        cross.style.display = 'block';
        body.classList.add('noscroll');
    });

    cross.addEventListener('click', () => {
        headerMobile.classList.toggle('active');
        burger.style.display = 'block';
        cross.style.display = 'none';
        body.classList.remove('noscroll');
    });

    
    //slider
    const swiper = new Swiper('.slider', {
        loop: true,
        pagination: {
          el: '.slider__pagination',
        },
        navigation: {
          nextEl: '.slider__arrow-right',
          prevEl: '.slider__arrow-left',
        },
    }); 


    //modal 
    const modal = document.querySelector('.modal'),
    modalButtons = document.querySelectorAll('.button-modal');
    
    modalButtons.forEach((item) => {
        item.addEventListener('click', () => {
            modal.classList.add('active');
            body.classList.add('noscroll');
        });
    
    });

    modal.addEventListener('click', (e) => {
        const isModal = e.target.closest('.modal__inner');

        if (!isModal) {
            modal.classList.remove('active');
            body.classList.remove('noscroll');
        }
    });


   
 

//iform send
const form = document.querySelector('.form__elements');

const telSelector = document.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form__elements');

validation
    .addField('#name', [{
            rule: 'minLength',
            value: 2,
            errorMessage: 'Колличество символов меньше 2!'
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Колличество символов больше 30!'
        },
        {
            rule: 'required',
            value: true,
            errorMessage: 'Введите имя!'
        }
    ])
    .addField('#check', [
        {
        rule: 'required',
        value: true,
        errorMessage: 'Подтвердите ваше согласие!',
    }
])
    .addField('#telephone', [{
        rule: 'required',
        value: true,
        errorMessage: 'Введите номер телефона!'
    }, 
    {
        rule: 'function',
        validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
        },
        errorMessage: 'Введите корректный номер телефона!'
    }

]).onSuccess((e) => {
    if (document.querySelector('#check').checked) {
    const sendForm = (data) => {
    return fetch('mail.php' , {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(res => res.json()); //)
};


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
   
    const dataForm = new FormData(e.target);
    const user = {};

    dataForm.forEach((val, key) => {
        user[key] = val;
    });

    const modals = document.querySelector('.modal'),
    modbuttons = document.querySelectorAll('.button-modals');
    
    modbuttons.forEach((item) => {
        
            modals.classList.add('active');
            body.classList.add('noscroll');

    
    });

    modals.addEventListener('click', (e) => {
        const isModal = e.target.closest('.modal__inner');

        if (!isModal) {
            modals.classList.remove('active');
            body.classList.remove('noscroll');

        }
    });

    sendForm(user).then(data => {
        console.log("Письмо успешно ушло!");
        // alert('Ваша заявка принята!');
        // const modals = document.querySelector('.modal');
        // modal.classList.add('active');

        });

        e.target.reset();   
            }
        });
});

// $(document).ready(function() {
//     $('.select__item').addClass('jqclass');
//     $('.select__item').addClass('jqclass');

// });

let accardion = document.querySelector('.facts__items');
   let tab = document.querySelectorAll('.facts__item');
   let answer = document.querySelectorAll('.facts__answer');
   let plus = document.querySelectorAll('.facts__plus');
   let minus = document.querySelectorAll('.facts__minus');
   let open = document.querySelectorAll('.facts__open');

   accardion.addEventListener('click', (e) => {
      const target = e.target.closest('.facts__item');
      if (target) {
         tab.forEach((item, i) => {
            if (item === target) {
               answer[i].classList.toggle('active');
               tab[i].classList.toggle('facts__item--active');

                if (answer[i].closest('.active')) {
                    // open[i].classList.toggle('active');
                    plus[i].style.display = 'none';
                    minus[i].style.display = 'flex';
                }
                else {
                    // addEventListener('click', () => {
                    // answer[i].classList.remove('active');
                    // tab[i].classList.remove('facts__item--active');
                    plus[i].style.display = 'flex';
                    minus[i].style.display = 'none';
                // });
                }
            } else {
                answer[i].classList.remove('active');
                tab[i].classList.remove('facts__item--active');
                plus[i].style.display = 'flex';
                minus[i].style.display = 'none'
            }
       
         });
      }
   });
//accordeon
// let accardeon = document.querySelector('.facts__items'),
// tab = document.querySelectorAll('.facts__item'),
// answer = document.querySelectorAll('.facts__answer'),
// plus = document.querySelectorAll('.facts__plus'),
// minus = document.querySelectorAll('.facts__minus');

// accardeon.addEventListener('click', (e) => {
//     const target = e.target.closest('.facts__item');
//     if (target) {
//         tab.forEach((item, i) => {
//             if (item === target) {
//                 // addEventListener('click', () => {
//                 answer[i].classList.add('active');
//                 tab[i].classList.add('facts__item--active');
//                 plus[i].style.display = 'none';
//                 minus[i].style.display = 'flex';
//             } else {
//                 answer[i].classList.remove('active');
//                 tab[i].classList.remove('facts__item--active');
//                 plus[i].style.display = 'flex';
//                 minus[i].style.display = 'none';
//             }
//         });
//     }
// });