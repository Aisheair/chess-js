
export function board_def() {

    const boxes = document.querySelectorAll(".box")

    boxes.forEach((box, index) => {
        box.id = index + 1
        
        let realIndex = index + 1; 
        let num = Math.ceil(realIndex / 8); 

        box.classList.add(`row${num}`);

    })
}