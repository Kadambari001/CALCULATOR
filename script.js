var screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
var screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'π') {
            buttonText = '3.14159265359';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'sin') {
            buttonText = 'Math.sin(';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'cos') {
            buttonText = 'Math.cos(';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'tan') {
            buttonText = 'Math.tan(';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'log') {
            buttonText = 'Math.log(';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == '^') {
            buttonText = 'Math.pow(';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == '√') {
            buttonText = 'Math.sqrt(';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'n!') {
            buttonText = '!';
			
			 answer = factorial(screenValue);
         //   screenValue+= buttonText;
			 screen.value = answer;
        }
        else if (buttonText == 'e') {
            buttonText = '2.71828182846';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = " ";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
function factorial(n)
{
    if(n == 0 || n == 1)
	{
        return 1;
    }
	else
	{
        return n * factorial(n-1);
    }
}
