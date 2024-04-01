var users = [
    {
        profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 10,
        Location: "Karachi, Pakistan",
        name: "Hasan",
        age: 17,
        interests: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "paint"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cum repellat cupiditate quidem eligendi ipsa et odit blanditiis. Magnam, eos?",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 7,
        Location: "Mirpurkhas, Pakistan",
        name: "Ayesha",
        age: 18,
        interests: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "paint"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cum repellat cupiditate quidem eligendi ipsa et odit blanditiis. Magnam, eos?",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 3,
        Location: "Islamabad, Pakistan",
        name: "Ayan",
        age: 16,
        interests: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "paint"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cum repellat cupiditate quidem eligendi ipsa et odit blanditiis. Magnam, eos?",
        isFriend: null
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1673512198690-6439132f3187?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1519895609939-d2a6491c1196?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        Location: "Peshawer, Pakistan",
        name: "Usama",
        age: 24,
        interests: [{
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "paint"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cum repellat cupiditate quidem eligendi ipsa et odit blanditiis. Magnam, eos?",
        isFriend: null
    },
];

var curr = 0;
let isAnimating = false;

function select(elem) {
    return document.querySelector(elem);
};

(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1]?.displayPic;

    select(".prflimg img").src = users[curr].profilePic;
    select(".badge h5").textContent = users[curr].pendingMessage;
    select(".location h3").textContent = users[curr].Location;
    select(".name h1:nth-child(1)").textContent = users[curr].name;
    select(".name h1:nth-child(2)").textContent = users[curr].age;


    var clutter = "";
    users[curr].interests.forEach(function (interest) {
        clutter += `<div class="tag gap-3 flex items-center bg-white/30 px-3 py-1 rounded-full">
        ${interest.icon} <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
        </div>`
    });

    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[curr].bio;

    curr = 2;
})();

function imageChange() {
    if(!isAnimating){
        isAnimating= true;
        let tl = gsap.timeline({
            ocnComplete: function () {
                isAnimating= false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                })
                if(curr === users.length) curr= 0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
                
            }
        });
    
        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a")
            .from(".incomingcard", {
                scale: .9,
                opacity: 0,
                ease: Circ,
                duration: 1.1
            }, "a")
    }
    };
    

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
    imageChange()
    gsap.from(".details, .element",{
    y: "100%",
    opacity: 0,
    stagger: .06,
    ease: Power4.easeInOut,
    duration: 1.5
});
});

(function containerCreator(){
document.querySelectorAll(".element")
.forEach(function (element){
    let div= document.createElement("div");
    div.classList.add(`${element[1]}container`, 'overflow-hidden');
    console.log(div);
    div.appendChild(element);
    select(".details").appendChild(div); 
})
})();

