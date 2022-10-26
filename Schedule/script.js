let data = new Date();

let hour = data.getHours();
let minutes = data.getMinutes();

let regards;

if(hour<= 10)
{
    regards = 'Good morning';
}
else if (hour <= 18)
{
    regards = 'Good afternoon';
}
else
{
    regards = 'Good Night';
}

console.log('Hi, '+regards+'!');
console.log('Is '+hour+' hour and '+minutes+' minutes');

