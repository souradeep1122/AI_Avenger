const image =[
    {img:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fHww"},
    {img:"https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BsYXNofGVufDB8fDB8fHww"},
    {img:"https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BsYXNofGVufDB8fDB8fHww"},
    {img:"https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BsYXNofGVufDB8fDB8fHww"},
    {img:"https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BsYXNofGVufDB8fDB8fHww"},
    {img:"https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BsYXNofGVufDB8fDB8fHww"},
    {img:"https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BsYXNofGVufDB8fDB8fHww"},
    {img:"https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BsYXNofGVufDB8fDB8fHww"}
   
   
]

let Html="";
for (let i = 0; i < 5; i++) {
    Html +=`
    <img src="${image.img}" alt="">
   
    `
  }

document.querySelector('.middle').innerHTML=Html;


/*

image.forEach((image) => {
    Html +=`
    <img src="${image.img}" alt="">
   
    `
});
document.querySelector('.middle').innerHTML=Html;
*/