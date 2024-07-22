function func1() {
    const valueone = +document.getElementById('valueone').value;
    const valuetwo = +document.getElementById('valuetwo').value;
    const result = valueone + valuetwo;
    document.getElementById('valueone').value = result;
    document.getElementById('valuetwo').value = '';
    document.getElementById('p').innerText = 'Результат: ' + result;
}

function func2() {
    const valueone = +document.getElementById('valueone').value;
    const valuetwo = +document.getElementById('valuetwo').value;
    const result = valueone - valuetwo;
    document.getElementById('valueone').value = result;
    document.getElementById('valuetwo').value = '';
    document.getElementById('p').innerText = 'Результат: ' + result;
}

function func3() {
    const valueone = +document.getElementById('valueone').value;
    const valuetwo = +document.getElementById('valuetwo').value;
    const result = valueone * valuetwo;
    document.getElementById('valueone').value = result;
    document.getElementById('valuetwo').value = '';
    document.getElementById('p').innerText = 'Результат: ' + result;
}

function func4() {
    const valueone = +document.getElementById('valueone').value;
    const valuetwo = +document.getElementById('valuetwo').value;
    if (valuetwo === 0) {
        alert('НА НОЛЬ ДЕЛИТЬ НЕЛЬЗЯ');
        return;
    }
    const result = valueone / valuetwo;
    document.getElementById('valueone').value = result;
    document.getElementById('valuetwo').value = '';
    document.getElementById('p').innerText = 'Результат: ' + result;
}

function func5() {
    document.getElementById('valueone').value = '';
    document.getElementById('valuetwo').value = '';
    document.getElementById('p').innerText = '';
}