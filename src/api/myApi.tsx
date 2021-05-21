// Возвращает функцию, которая не будет срабатывать, пока продолжает вызываться.
// Она сработает только один раз через N миллисекунд после последнего вызова.
// Если ей передан аргумент `immediate`, то она будет вызвана один раз сразу после
// первого запуска.
export const  debounce = (func: any, wait:any, immediate?:any) => {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Использование
// var myEfficientFn = debounce(function() {
//     // All the taxing stuff you do
//     }, 250);
//     window.addEventListener('resize', myEfficientFn);

// Функцию debounce не всегда возможно подключить для обозначения желаемого состояния: если событие не существует — это будет не возможно. В этом случае вы должны проверять состояние с помощью интервалов:

function poll(fn, callback, errback, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;
  
    (function p() {
        // В случае успешного выполнения условия
        if(fn()) {
            callback();
        }
        // Условие не выполнилось, но время ещё не вышло (тик интервала)
        else if (Number(new Date()) < endTime) {
            setTimeout(p, interval);
        }
        // Условие не выполнилось, а отведённое время вышло
        else {
            errback(new Error('timed out for ' + fn + ': ' + arguments));
        }
    })();
}

// При использовании: убедитесь что элемент видим
// poll(
//     function() {
//         return document.getElementById('lightbox').offsetWidth > 0;
//     },
//     function() {
//         // Функция на случай успешного выполнения
//     },
//     function() {
//         // Функция на случай ошибки
//     }
// );

// once
// Иногда бывает нужно, чтобы функция выполнилась только один раз, как если бы вы использовали событие onload. Функция once даёт такую возможность:

function once(fn, context) { 
	var result;
    
	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}
        
		return result;
	};
}
 
// Пример использования
// var canOnlyFireOnce = once(function() {
// 	console.log('Запущено!');
// });
 
// canOnlyFireOnce(); // "Запущено!"
// canOnlyFireOnce(); // Не запущено
// once гарантирует, что заданная функция будет вызвана только один раз, что предотвращает повторную инициализацию.