﻿let counterInterval;
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
            element.style.transition = 'opacity 2s ease-in-out, background-color 2s ease-in-out';
            element.style.opacity = '1';

            // Возвращаем элемент в исходное состояние после исчезновения
            setTimeout(() => {
                element.style.transition = '';
                element.style.backgroundColor = '';
                element.style.opacity = '';
            }, 2000); // Убедитесь, что это время совпадает с продолжительностью перехода
        }, 1000);
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

    anime({
        targets: `#${elementId}`, // Целевой элемент по ID
        boxShadow: [
            '0px 0px 0px 0px rgba(0, 0, 0, 0)', // Исходное состояние (без тени)
            '0px 0px 20px 14px rgba(0, 128, 0, 1)' // Конечное состояние (зелёная тень)
        ],
        duration: 1000, // Продолжительность анимации
        easing: 'easeInOutQuad', // Плавное появление и исчезновение
        direction: 'alternate', // Анимация вперёд и назад

        begin: function (anim) {
            // Устанавливаем высокий z-index перед началом анимации
            element.style.zIndex = '100';
        },
        complete: function (anim) {
            // Возвращаем исходный z-index после завершения анимации
            element.style.zIndex = '';
        }
    });
}
function showToast(delay) {
    const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample, {
        delay: delay,
        autohide: true // Включаем автоскрытие
    });
    toastBootstrap.show();
}

function showUpdateSkillModal() {
    var myModal = new bootstrap.Modal(document.getElementById('updateSkillModal'));
    myModal.show();
}

function hideUpdateSkillModal() {
    var modalElement = document.getElementById('updateSkillModal');
    var modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
        modalInstance.hide();
    }
}