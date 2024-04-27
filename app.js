//1
// let str = 'Aidana445'
// number = extractNumbers(str)
//
// const extractNumbers (str) {
//     const numbers =str.match (/\d+/g)
//     if (numbers){
//         number = numbers.map(Number)
//     }else(){
//         numbers = [];
//     }
//
// }






//3
const asyncData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const responseData = await response.json()
        console.log(responseData)
    }catch (error){
        console.error(error)
    }
}
asyncData()
//4
const colorButton = document.querySelectorAll('.color')

colorButton. addEventListener('click', function (event){
    if (event.target.classList.contains('color-button')){
        const colorBut = event.target.getAttribute('.color')
        document.body.style.backgroundColor = event.target.className

    }

})
//6
let count = 0;
const counterElement = document.querySelector('.counter')
const counters =  () =>{
    if (count < 100){
        counterElement.textContent = count;
        count++;
        setTimeout(counters, 1);

    }
}
counters()
//7
const button = document.getElementById('.button');
button.addEventListener('click', buttonClick);
async function buttonClick() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        const data = await fetchData(url);
        console.log('Полученные данные:', data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

