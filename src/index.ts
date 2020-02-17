
import './styles.css';
import { add } from './math';

const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const addButton = document.getElementById('add') as HTMLButtonElement;
const answerElments = document.getElementById('answer') as HTMLInputElement;

addButton.addEventListener('click', function () {
    const a = num1Element.valueAsNumber;
    const b = num2Element.valueAsNumber;

    const sum = add(a, b);

    answerElments.innerText = sum.toString();

});
