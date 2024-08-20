const container = document.createElement('div');
container.className = 'container';

const title = document.createElement('h1');
title.textContent = 'Password Generator';
container.appendChild(title);

const settingsDiv = document.createElement('div');
settingsDiv.className = 'settings';

const lengthLabel = document.createElement('label');
lengthLabel.setAttribute('for', 'length');
lengthLabel.textContent = 'Password Length:';
settingsDiv.appendChild(lengthLabel);

const lengthInput = document.createElement('input');
lengthInput.type = 'number';
lengthInput.id = 'length';
lengthInput.min = 4;
lengthInput.max = 20;
lengthInput.value = 12;
settingsDiv.appendChild(lengthInput);
container.appendChild(settingsDiv);

const optionsDiv = document.createElement('div');
optionsDiv.className = 'options';

const uppercaseLabel = document.createElement('label');
const uppercaseCheckbox = document.createElement('input');
uppercaseCheckbox.type = 'checkbox';
uppercaseCheckbox.id = 'uppercase';
uppercaseLabel.appendChild(uppercaseCheckbox);
uppercaseLabel.append(' Include Uppercase Letters');
optionsDiv.appendChild(uppercaseLabel);

const lowercaseLabel = document.createElement('label');
const lowercaseCheckbox = document.createElement('input');
lowercaseCheckbox.type = 'checkbox';
lowercaseCheckbox.id = 'lowercase';
lowercaseCheckbox.checked = true;
lowercaseLabel.appendChild(lowercaseCheckbox);
lowercaseLabel.append(' Include Lowercase Letters');
optionsDiv.appendChild(lowercaseLabel);

const numbersLabel = document.createElement('label');
const numbersCheckbox = document.createElement('input');
numbersCheckbox.type = 'checkbox';
numbersCheckbox.id = 'numbers';
numbersCheckbox.checked = true;
numbersLabel.appendChild(numbersCheckbox);
numbersLabel.append(' Include Numbers');
optionsDiv.appendChild(numbersLabel);

const specialLabel = document.createElement('label');
const specialCheckbox = document.createElement('input');
specialCheckbox.type = 'checkbox';
specialCheckbox.id = 'special';
specialLabel.appendChild(specialCheckbox);
specialLabel.append(' Include Special Characters');
optionsDiv.appendChild(specialLabel);

container.appendChild(optionsDiv);

const generateBtn = document.createElement('button');
generateBtn.id = 'generate';
generateBtn.textContent = 'Generate Password';
container.appendChild(generateBtn);

const outputDiv = document.createElement('div');
outputDiv.className = 'output';
const passwordDisplay = document.createElement('p');
passwordDisplay.id = 'password';
passwordDisplay.textContent = 'Your generated password will appear here';
outputDiv.appendChild(passwordDisplay);
container.appendChild(outputDiv);

document.body.appendChild(container);

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*()_+-=[]{}|;:,.<>?";

generateBtn.addEventListener('click', function() {
    let length = lengthInput.value;
    let includeUppercase = uppercaseCheckbox.checked;
    let includeLowercase = lowercaseCheckbox.checked;
    let includeNumbers = numbersCheckbox.checked;
    let includeSpecial = specialCheckbox.checked;

    let characterPool = "";
    if (includeUppercase) characterPool += uppercase;
    if (includeLowercase) characterPool += lowercase;
    if (includeNumbers) characterPool += numbers;
    if (includeSpecial) characterPool += special;

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    passwordDisplay.textContent = password;
});