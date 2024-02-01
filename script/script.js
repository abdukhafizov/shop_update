import { arr } from "./db.js"

let body = document.body
//a
let section = document.createElement("section")
let container = document.createElement("div")
let all = document.createElement("div")
let showFive = document.querySelector('#showFive')
let showALL = document.querySelector('#showALL')
let myCart = [];
let h1 = document.querySelector("h1")
const reload = (arr) => {

        container.innerHTML = ""
   

    for (let item of arr) {
        let about_product = document.createElement("div")
        let top_top = document.createElement("div")
        let bottom = document.createElement("div")
        let about_bottom = document.createElement("div")
        let h2 = document.createElement("h2")
        let about_txt = document.createElement("p")
        let about_imgs = document.createElement("div")
        let choose = document.createElement("button")


        //b
        section.classList.add("about")
        container.classList.add("container")
        all.classList.add("all")
        about_product.classList.add("about_product")
        top_top.classList.add("top")
        bottom.classList.add("bottom")
        about_bottom.classList.add("about_bottom")
        about_txt.classList.add("about_txt")
        about_imgs.classList.add("about_imgs")
        choose.classList.add("choose")
        about_txt.innerHTML = "Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in the padded sleeve, your everyday"
        choose.innerHTML = "В избранное"
        h2.innerHTML = item.title
        top_top.style.background = `url(${item.image}) center center/contain no-repeat`




        // ...
        let sec_arr = [
            {
                "id": "1",
                "image": "./img/dollar.svg",
                "txt": item.price
            },
            {
                "id": "2",
                "image": "./img/star.svg",
                "txt": item.rating.rate
            },
            {
                "id": "3",
                "image": "./img/box.svg",
                "txt": item.rating.count
            }
        ]

        for (let i = 0; i < 3; i++) {
            let about_block = document.createElement("div");
            let about_block_img = document.createElement("img");
            let price = document.createElement("p");

            about_block.classList.add("about_block");
            about_block_img.src = sec_arr[i].image; // Fix: Set the src attribute
            price.classList.add("price");
            price.innerHTML = sec_arr[i].txt; // Fix: Set the inner HTML
            // price.innerHTML = item.rate; // Fix: Set the inner HTML

            about_imgs.append(about_block);
            about_block.append(about_block_img, price);
        }

        // ...


        body.append(section)
        section.append(container)
        container.append(all)
        all.append(about_product)
        about_product.append(top_top, bottom)
        bottom.append(about_bottom, choose)
        about_bottom.append(h2, about_txt, about_imgs)

        choose.onclick = () => {
            if (myCart.includes(item)) {
               myCart = myCart.filter(el => el.block !== item.block);
                choose.innerHTML = "В избранное";
                choose.style.color = "";
                choose.style.backgroundColor = "";
            }else {
                myCart.push(item);
                choose.innerHTML = "Добавлено";
                choose.style.backgroundColor = "#1F86FF";
                choose.style.color = "white";
            }

            h1.innerHTML = `В корзине: ${myCart.length} товар`;
        }
    }
    
}
showFive.onclick = () => {
    reload(arr.slice(0, 4))
}

showALL.onclick = () => {
    reload(arr)
}


reload(arr)

