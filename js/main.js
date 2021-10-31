if (document.querySelector('.swiper') !== null) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    grabCursor: true,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 3,
      },
      750: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 5,
      }
    }
  });
}

const VolumeUp = document.getElementById('iconVolumeUp');
const VolumeMute = document.getElementById('iconVolumeMute');

if ((VolumeUp !== null) || (VolumeMute !== null)) {
  VolumeUp.addEventListener('click', () => {
    VolumeUp.style.display = 'none';
    VolumeMute.style.display = 'inline';
  })

  VolumeMute.addEventListener('click', () => {
    VolumeMute.style.display = 'none';
    VolumeUp.style.display = 'inline';
  })
}


if (document.querySelectorAll('.fade') !== null) {
  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      setTimeout(() => {
        entry.isIntersecting
            ? entry.target.classList.add('fade_in')
            : entry.target.classList.remove('fade_in')
      }, 100)
    })
  }, {})
  for (const element of document.querySelectorAll('.fade')) {
    imageObserver.observe(element);
  }
}


const Packs = document.querySelectorAll('.packs__item');

if (Packs !== null){
  for (const pack of Packs){
    pack.addEventListener('click', (event) => {
      if (!event.target.classList.contains('packs__button')) {

        if (event.target.closest('.packs__item').classList.contains('packs__item_selected')) {
          event.target.closest('.packs__item').classList.remove('packs__item_selected');
          event.target.closest('.packs__item').querySelector('.packs__item-list').classList.remove('packs__item-list_opened');
        } else {
          event.target.closest('.packs__item').classList.add('packs__item_selected');
          event.target.closest('.packs__item').querySelector('.packs__item-list').classList.add('packs__item-list_opened');
        }
      }
    })
  }
}


const QuestionsAndAnswers = {
  1: ['Перед Вами - просо, мясо, колесо. Что находится в черном ящике?','Ничего \n P.S. Серсо :)'],
  2: ['Как называли бога огня в Древней Греции?','Гефест'],
  3: ['Где находится это здание?','Сидней, Австралия'],
  4: ['Где находится эта картина?','Лувр, Франция'],
  5: ['"Если путешествия во времени возможны, то где же туристы из будущего?"\nЧья эта цитата?','Стивен Хокинг'],
  6: ['Назовите всех президентов США, высеченных на горе Рашмор','Джордж Вашингтон, Томас Джефферсон, Теодор Рузвельт и Авраам Линкольн'],
  7: ['Сколько ног у речного рака?','Восемь'],
}

function showAnswer(i){
  let element = document.querySelector(`.pattern__question_type${i}`);
  if (!element.classList.contains('pattern__question_show-answer')){
    element.classList.add('pattern__question_show-answer');
    setTimeout(() => {element.querySelector('.pattern__question-context').innerText = QuestionsAndAnswers[i][1]}, 500);
  }
  else{
    element.querySelector('.pattern__question-context').innerText = QuestionsAndAnswers[i][0];
    element.classList.remove('pattern__question_show-answer');
  }
}

if (document.querySelector('.start__input') !== null) {
  document.querySelector('.start__input').select();
  document.querySelector('.start__input').focus();
}

const OrderUp = document.getElementById('orderUp');
const OrderDown = document.getElementById('orderDown');

if ((OrderUp !== null) || (OrderDown !== null)) {
  OrderUp.addEventListener('click', () => {
    OrderUp.style.display = 'none';
    OrderDown.style.display = 'inline';
  })

  OrderDown.addEventListener('click', () => {
    OrderDown.style.display = 'none';
    OrderUp.style.display = 'inline';
  })
}