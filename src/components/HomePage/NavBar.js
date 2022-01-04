import { icon } from '@fortawesome/fontawesome-svg-core';
import swal from 'sweetalert';
import '../../index.css'
import {getUserName} from "../localStorage"

function NavBar(){
    let name;
    if(localStorage.length!==0)
        name=getUserName()
    function Signout(){
        localStorage.clear();
    }

    function addNav(){
        const menu = document.querySelector('#menu');
        const menu1 = document.querySelector('#menu1');
         menu.classList.toggle("hidden")
         menu1.classList.toggle("hidden")
    }
    if(localStorage.length===0){
        swal({
            title:"Please log in to your account",
            icon:"error"
        }).then(()=>{
            window.location="/login"
        })
    }


    return(
        <div className="w-full mx-auto px-2 py-1">
            <nav className="sm:h-12 py-2 px-4  rounded-lg bg-black sm:flex sm:justify-between ">
                <i className="fas fa-bars text-white md:hidden text-xl" id="menuBtn" onClick={addNav}></i>
                <div className="hidden md:flex md:justify-between w-100 md:w-1/2 " id="menu" >
                    <div className="text-inherit text-center hover:bg-gray-900 p-1 items-center rounded-lg cursor-pointer  ">
                        <a href="/register" className="no-underline text-white">Home</a>
                    </div>
                    <div className="text-inherit text-center hover:bg-gray-900 p-1 items-center rounded-lg cursor-pointer">
                        <a href="/register" className="no-underline text-white">Application</a>
                    </div>
                    <div className="text-inherit text-center hover:bg-gray-900 p-1 items-center rounded-lg cursor-pointer">
                        <a href="/register" className="no-underline text-white">Team</a>
                    </div>
                    <div className="text-inherit text-center hover:bg-gray-900 p-1 items-center rounded-lg cursor-pointer">
                        <a href="/register" className="no-underline text-white">Our Partners</a>
                    </div>
                    <div className="text-inherit text-center hover:bg-gray-900 p-1 items-center rounded-lg cursor-pointer">
                        <a href="/register" className="no-underline text-white">About</a>
                    </div>
                    <div className="text-inherit text-center hover:bg-gray-900 p-1 items-center rounded-lg cursor-pointer">
                        <a href="/register" className="no-underline text-white">Contact Us</a>
                    </div>  
                </div>
                <div className="flex justify-center md:flex text-white md:justify-end  md:items-center w-100 md:w-1/2 p-2 " id="menu1">
                    <div>
                        <i className="fas fa-user font-bold text-xl px-3 "></i>
                    </div>
                    <div className=" space-x-2 dropdown ">
                        {name}
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                            <li class=""><a class="rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap no-underline text-black" href="/prfile">My Profile</a></li>
                            <li class=""><a class="rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap no-underline text-black" href="/login"  onClick={Signout}>Signout</a></li>
                            <li class=""><a class="rounded bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap no-underline text-black" href="/login" > o;ok.ij<i className="fas fa-shopping-cart"></i> Go to cart</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;