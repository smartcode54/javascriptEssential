//1.initial menu with array item 
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];


//2.breakfastMenu.map(...): The map() iterator method is an array method that creates a new array by calling a provided function on every element in the original array. It transforms each element.
 // 2.1=> is arrow function of 
 //  item = array item in brakefastMenu
 // `<p>Item ${index + 1}: ${item}</p>`) = applie to each element in array
 //.join('') =  joins all elements of an array into a single string+
      // '' as an argument means that no separator will be placed between the joined elements.
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
 
//get brackfastMenuItemHTML to show in Div tag in id = breakfastMenuItems
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// as the same map(item,index) method
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

//as the same forEach loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;