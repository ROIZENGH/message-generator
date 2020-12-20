const itemsArray = ["USB drive", "shovel", "flower", "car", "glass", "keyboard", "spoon", "carrot", "white out", "shampoo", "rug", "pencil", "bottle cap", "plate", "chocolate", "tissue box", "mp3 player", "hanger", "camera", "soy sauce packet", "pillow", "button", "seat belt", "speaker", "drawer", "cinder block", "credit card", "newspaper", "shirt", "canvas", "apple", "playing card", "spring", "shoe lace", "mirror", "street light", "perfume", "door", "deodorant", "lotion", "sharpie", "paper", "coaster", "leg warmer", "computer", "slipper", "table", "stop sign", "greeting card"];
const colorsArray = ["white", "yellow", "blue", "red", "green", "black", "brown", "azure", "ivory", "teal", "silver", "purple", "navy blue", "pea green", "gray", "orange", "maroon", "charcoal", "aquamarine", "coral", "fuchsia", "wheat", "lime", "crimson", "khaki", "hot pink", "magenta", "olden", "plum", "olive", "cyan"];
const statusArray = ["excellent", "good", "regular", "bad", "awful"];

const randomMessage = () =>{
    let randomItem = Math.floor(Math.random()*itemsArray.length);
    let randomColor = Math.floor(Math.random()*colorsArray.length);
    let randomStatus = Math.floor(Math.random()*statusArray.length);
    return console.log(`My ${colorsArray[randomColor]} ${itemsArray[randomItem]} is ${statusArray[randomStatus]}!`);
}

randomMessage();