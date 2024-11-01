const images = [
    'images/baby!.jpg',
    'images/bara.jpg',
    'images/big lizard bara.png',
    'images/bird!.jpg',
    'images/butter bara.jpg',
    'images/capybara + 2 but grown up!.jpg',
    'images/capybara + 2!.jpg',
    'images/capybara + 3!!!!.jpg',
    'images/capybara + 3!.jpg',
    'images/capybara + 4!!!.jpg',
    'images/capybara + 5!!!.jpg',
    'images/capybara!!!!.jpg',
    'images/capybara.jpg',
    'images/cat!.jpg',
    'images/chill bara.png',
    'images/goat!.jpg',
    'images/grass capybara!.jpg',
    'images/green belt!.jpg',
    'images/in love!.jpg',
    'images/in the wild!.jpg',
    'images/many monkeys!.jpeg',
    'images/might be tea.jpg',
    'images/monkey!.jpg',
    'images/piggy back!.jpg',
    'images/rat!.jpg',
    'images/river bara!.jpg',
    'images/shower!.jpg',
    'images/sleepybara!.jpg',
    'images/sneaky!.jpg',
    'images/swim!!.jpg',
    'images/the capybara walks!!!.jpg',
    'images/the crew.jpg',
    'images/the family!.jpg',
    'images/the pool!.jpg',
    'images/they kiss!.jpg',
    'images/tiny!.jpg',
    'images/turtle!.jpg',
    'images/with babies!!.jpg',
    'images/with flamingo!.jpg',
    'images/yawn.jpg'
];

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement = document.querySelector('img.random-capybara');

    if (imgElement) {
        imgElement.src = images[randomIndex];
    } else {
        const newImgElement = document.createElement('img');
        newImgElement.src = images[randomIndex];
        newImgElement.classList.add('random-capybara');
        newImgElement.alt = "Random capybara image";
        document.body.appendChild(newImgElement);
    }
}    