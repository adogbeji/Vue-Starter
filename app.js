Vue.createApp({
    data() {
        return {  // Define data to be used by Vue App
           goals: [],
           enteredValue: ''
        }
    },
    methods: {  // Specify methods which should be called from within HTML Code
       addGoal() {
          this.goals.push(this.enteredValue);
          this.enteredValue = '';
       }
    }
}).mount('#app');

// const buttonTag = document.querySelector('button');
// const inputTag = document.querySelector('input');
// const ulTag = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputTag.value;
//   const newListItem = document.createElement('li');
//   newListItem.textContent = enteredValue;
//   ulTag.appendChild(newListItem);
//   inputTag.value = '';
// }

// buttonTag.addEventListener('click', addGoal);