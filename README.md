# Frontend Mentor - Profile card component solution

This is a solution to the [Valentine's Challenge](https://scrimba.com/learn/codeweeks/-heart-customiser-api-challenge-co9be402f91d8ef8fbf71a6e2). 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is my solution to the Valentine's Challenge for the 18th of January, 2022.
It is a small project that lets the user click a button and it will fetch from
an api 2 colors and change the bg and heart colors on the screen. I added an
extra feature that lets the heart start beating for a certain amount of time
after a color change.

### Screenshot

![](./images/screenshot1.png)
![](./images/screenshot2.png)
![](./images/screenshot3.png)
![](./images/screenshot4.png)

### Links

- Solution URL: [GitHub](https://github.com/newbpydev/valentines-18-2022)
- Live Site URL: [Live Site](https://fervent-colden-808897.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javasript

### What I learned

I have learned on this project how to use the setInterval and setTimeout in
nested form to achieve more complex patters.

```javascript
const heartBeat = () => {
  let intervalId;
  intervalId = setInterval(() => {
    heart.classList.add("heart-beat");

    setTimeout(() => {
      heart.classList.remove("heart-beat");
    }, 150);
    setTimeout(() => {
      heart.classList.add("heart-beat");
    }, 300);
    setTimeout(() => {
      heart.classList.remove("heart-beat");
    }, 450);
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 6000);
};
```

### Continued development

For future development, I will continue to use expore the js Dom to manipulate
the elements on my pages, I see that there is so much to learn, but I will
always try new things on every project.

### Useful resources

- [MDN - setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) - The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
- [MDN - setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) - The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
- [MDN - clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval) - The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval().

## Author

- Website - [Juan Gomez](https://www.newbpydev.com)
- Frontend Mentor - [@newbpydev](https://www.frontendmentor.io/profile/newbpydev)
- Twitter - [@Newb_PyDev](https://twitter.com/Newb_PyDev)

## Acknowledgments

The code may not be perfect compared to my sensei @jonasschmedtman but I need
to thank him because he has shown me the ropes and now I am a confident web
designer.


