const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  const tutorialTitleCased = [];
  tutorials.map((tutorial) => {
    const newTutorial = tutorial.split(" ");
    const newArray = [];
    newTutorial.map(element => {
      const newElement = element.charAt(0).toUpperCase() + element.slice(1);
      newArray.push(newElement);

    })
    const joined = newArray.join(" ");
    tutorialTitleCased.push(joined);

  })
  return tutorialTitleCased;
}








