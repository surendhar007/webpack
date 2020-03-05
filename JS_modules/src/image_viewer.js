import small from '../../assets/small.jpg';
import large from '../../assets/big.png';

import '../../styles/image_styling.css'

const image = document.createElement('img');

image.src = "https://picsum.photos/600/600";
document.body.appendChild(image);
