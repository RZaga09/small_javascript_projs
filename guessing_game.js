let guess = Number(prompt('Guessing Game! Pick a number between 1-100'));
let num = Math.floor(Math.random() * 100);
check_num();

function check_num() {
    if (typeof guess === "number" && guess >= 1 && guess <= 100) {
        compare();
    } else {
        guess = Number(prompt('Please choose a number between one and 100'));
        check_num();
    }
}

function compare() {
    if (guess > num) {
        guess = Number(prompt('Too big! Try again'));
        check_num();
    } else if (guess < num) {
        guess = Number(prompt('Too small! Try again'));
        check_num();
    } else {
        if (confirm('You win! Play again?')) {
            num = Math.floor(Math.random() * 100);
            guess = Number(prompt('Guessing Game! Pick a number between 1-100'));
            check_num();
        }
    }
}
