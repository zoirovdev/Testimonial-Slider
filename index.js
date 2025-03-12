const testimonials = [
    { 
        name: "Cherise G",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I would recommend apple for anyone trying to get the word out about their business. It has saved me so much time!"
    },
    { 
        name: "Agnes C",
        photoUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "With apple, we have finally accomplished things that have been waiting forever to get done."
    }
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innertText = name;
    idx++;
    if(idx === testimonials.length) {
        idx = 0;
    }

    setTimeout(()=> {
        updateTestimonial()
    }, 6000)
}

