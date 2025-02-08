// console.log("hi");
const pcs = document.querySelectorAll(".pcs")
const box = document.querySelectorAll(".box")

let selectedPiece = null;//selected chess piece
let selectedBox = null;//original box before moving

//Selecting a Piece
pcs.forEach(p => {
    p.addEventListener("click", selectPiece);
})
//Clicking a Square to Move a Piece
box.forEach(b => {
    b.addEventListener("click", movePiece);
})

//You Click a Piece
function selectPiece(event){
    if(selectedPiece) {
        selectedPiece.classList.remove("selected")
    }
    selectedPiece = event.target 
    selectedBox = selectedPiece.parentElement
    selectedPiece.classList.add("selected"); 
}
// clicking on a box to move the selected pcs
function movePiece(event){
    if (!selectedPiece) return;

    const targetBox = event.currentTarget;

    if (!targetBox.querySelector(".pcs")){ // if the squar is empty
        targetBox.appendChild(selectedPiece); // move the piece to the new box.
        selectPiece.classList.remove("selected")
        selectedPiece = null;
        selectedBox = null;
    }
}

