<<<<<<< HEAD

=======
import item_menu from "../rotas/rotas.js";
>>>>>>> 7624035f599d83e90fa6ef52cfb94791510267d0

function navbar(item_menu){
const navbar = document.getElementById('navbar');
navbar.innerHTML = `<nav class="bem-navbar">
            <a href="#" class="bem-navbar__brand">Brand</a>
            <input type="checkbox" id="nav-toggle" class="bem-navbar__checkbox">
            <label for="nav-toggle" class="bem-navbar__toggle">☰</label>
            <ul class="bem-navbar__menu">
                ${
                        item_menu.map((item)=>{
                    
                    return  `<li class="bem-navbar__item">
                    <a href="${item.url}" class="bem-navbar__link">${item.label}</a>
                </li>`
                })
                
                }
            
            </ul>
        </nav>`.replaceAll(',','');
} 

export default navbar;