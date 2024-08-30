let counterInterval;
let currentCount;
let incrementValue;

function startClientBalanceCounter(startValue, initialIncrementValue) {
    // Остановим предыдущий таймер, если он существует
    if (counterInterval) {
        clearInterval(counterInterval);
    }

    currentCount = startValue;
    incrementValue = initialIncrementValue;

    // Запускаем новый таймер
    counterInterval = setInterval(function () {
        currentCount += incrementValue;
        document.getElementById('user-balance').textContent = `Баланс ${currentCount.toFixed(2)}`;
    }, 500);
}

function updateClientBalanceCounter(newStartValue, newIncrementValue) {
    // Обновляем значение счётчика и инкремент
    currentCount = newStartValue;
    incrementValue = newIncrementValue;
}

function flashGreen(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
        // Устанавливаем начальные стили для зелёной вспышки
        element.style.backgroundColor = 'green';
        element.style.opacity = '0';

        // Запуск плавного исчезновения после 2 секунд
        setTimeout(() => {
            element.style.transition = 'opacity 2s ease-in-out, background-color 1s ease-in-out';
            element.style.opacity = '1';

            // Возвращаем элемент в исходное состояние после исчезновения
            setTimeout(() => {
                element.style.transition = '';
                element.style.backgroundColor = '';
                element.style.opacity = '';
            }, 1000); // Убедитесь, что это время совпадает с продолжительностью перехода
        }, 1);
    } else {
        console.error(`Element with id "${elementId}" not found.`);
    }
}


//function animateUpdateEffect(elementId) {
//    const element = document.getElementById(elementId);

//    // Сохраняем текущий z-index
//    const originalZIndex = window.getComputedStyle(element).zIndex;
//    //const originalBackgroundColor = window.getComputedStyle(element).backgroundColor;

//    anime({
//        targets: `#${elementId}`, // Целевой элемент по ID
//        scale: [1, 1.4], // Увеличение размера элемента
//        backgroundColor: '#c5ebc7', // Изменение цвета фона
//        duration: 600, // Продолжительность анимации
//        easing: 'easeInOutQuad', // Плавность анимации
//        direction: 'alternate', // Анимация вперёд и назад
//        //loop: 2, // Повторить анимацию дважды
//        //translateY: [
//        //    { value: -30, duration: 400 },
//        //    { value: 0, duration: 400 }
//        //],
//        easing: 'easeOutElastic(1, .8)',
//        //complete: function (anim) {
//        //    // Добавим подпрыгивание после завершения анимации
//        //    anime({
//        //        targets: `#${elementId}`,
//        //        translateY: [
//        //            { value: -30, duration: 500 },
//        //            { value: 0, duration: 500 }
//        //        ],
//        //        easing: 'easeOutElastic(1, .8)'
//        //    });
//        //}
//        begin: function (anim) {
//            // Устанавливаем высокий z-index перед началом анимации
//            element.style.zIndex = '10000';
//            //element.style.boxShadow = '0px 0px 20px 10px #c5ebc7'
//        },
//        complete: function (anim) {
//            // Возвращаем исходный z-index после завершения анимации
//            element.style.zIndex = '';
//            element.style.backgroundColor = '';
//            //element.style.boxShadow = '';
//        }
//    });
//}

// С полным зеленым цветом (для карточки)
function animateUpdateEffect(elementId) {
    const element = document.getElementById(elementId);

    // Сохраняем текущий z-index
    //const originalZIndex = window.getComputedStyle(element).zIndex;
    //const originalBackgroundColor = window.getComputedStyle(element).backgroundColor;

    anime({
        targets: `#${elementId}`, // Целевой элемент по ID
        scale: [1, 1.15], // Увеличение размера элемента
        //backgroundColor: '#c5ebc7', // Изменение цвета фона
        duration: 400, // Продолжительность анимации
        easing: 'easeInOutQuad', // Плавность анимации
        direction: 'alternate', // Анимация вперёд и назад
        //loop: 2, // Повторить анимацию дважды
        //translatey: [
        //    { value: -30, duration: 400 },
        //    { value: 0, duration: 400 }
        //],
        easing: 'easeOutElastic(1, .8)',
        //complete: function (anim) {
        //    // Добавим подпрыгивание после завершения анимации
        //    anime({
        //        targets: `#${elementId}`,
        //        translateY: [
        //            { value: -30, duration: 500 },
        //            { value: 0, duration: 500 }
        //        ],
        //        easing: 'easeOutElastic(1, .8)'
        //    });
        //}
        begin: function (anim) {
            // Устанавливаем высокий z-index перед началом анимации
            element.style.zIndex = '10000';
            //element.style.boxShadow = '0px 0px 0px 3px #c5ebc7'
            element.style.textShadow = '0px 0px 2px #3be540'
        },
        complete: function (anim) {
            // Возвращаем исходный z-index после завершения анимации
            element.style.zIndex = '';
            //element.style.backgroundColor = '';
            element.style.boxShadow = '';
            element.style.textShadow = '';
        }
    });
}
function showToast() {
    const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
}
