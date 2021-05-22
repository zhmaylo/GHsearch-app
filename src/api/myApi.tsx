// Возвращает функцию, которая не будет срабатывать, пока продолжает вызываться.
// Она сработает только один раз через N миллисекунд после последнего вызова.
// Если ей передан аргумент `immediate`, то она будет вызвана один раз сразу после
// первого запуска.

// Returns a function that will not fire as long as it continues to be called.
// It will fire only once, N milliseconds after the last call.
// If the `immediate` argument is passed to it, then it will be called once immediately after
// first run.
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

// Использование / Using
// var myEfficientFn = debounce(function() {
//     // All the taxing stuff you do
//     }, 250);
//     window.addEventListener('resize', myEfficientFn);

// Функцию debounce не всегда возможно подключить для обозначения желаемого состояния: если событие не существует — это будет не возможно. В этом случае вы должны проверять состояние с помощью интервалов:
// It is not always possible to connect the debounce function to indicate the desired state: if the event does not exist, it will not be possible. In this case, you should check the status using intervals:
function poll(fn, callback, errback, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;
  
    (function p() {
        // В случае успешного выполнения условия
		// In case of successful fulfillment of the condition
        if(fn()) {
            callback();
        }
        // Условие не выполнилось, но время ещё не вышло (тик интервала)
		// The condition is not met, but the time has not expired yet (interval tick)
        else if (Number(new Date()) < endTime) {
            setTimeout(p, interval);
        }
        // Условие не выполнилось, а отведённое время вышло
		// The condition is not met, but the allotted time has expired
        else {
            errback(new Error('timed out for ' + fn + ': ' + arguments));
        }
    })();
}

// При использовании: убедитесь что элемент видим
// When used: make sure the element is visible
// poll(
//     function() {
//         return document.getElementById('lightbox').offsetWidth > 0;
//     },
//     function() {
//         // Функция на случай успешного выполнения
//		   // Function in case of success
//     },
//     function() {
//         // Функция на случай ошибки
//		   // Error function
//     }
// );

// once
// Иногда бывает нужно, чтобы функция выполнилась только один раз, как если бы вы использовали событие onload. Функция once даёт такую возможность:
// Sometimes you want a function to be executed only once, as if you were using the onload event. The once function makes it possible:

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
// Usage example
// var canOnlyFireOnce = once(function() {
// 	console.log('Запущено!');
// });
 
// canOnlyFireOnce(); // "Запущено!" / "Launched!"
// canOnlyFireOnce(); // Не запущено / Not started
// once гарантирует, что заданная функция будет вызвана только один раз, что предотвращает повторную инициализацию.
// 'once' guarantees that the given function will be called only once, which prevents reinitialization.