const newYear =document.querySelector('.date');
console.log(newYear);
let date = new Date;
let date_year = date.getFullYear();
console.log(date_year);

newYear.innerHTML = date_year;
// newYear.innerHTML = `<span>${date_year}</span>`;


// const footer =document.querySelector('footer');
// footer.innerHTML = 
// `
//   <div class="box" style="color:red;">
//     <p>Hello Site!!</p>
//   </div>
// `;
// = 로드 제이에스에서 서버 페이지에서 로드 줄때 많이 사용함.