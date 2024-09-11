document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch("https://zedicot.com/wp-content/uploads/2024/06/zedicot-merch-013.jpg")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })

    }

})
