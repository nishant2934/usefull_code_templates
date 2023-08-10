import React, { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import dashboardicon from '../assets/dashboardicon.svg'
import taxicon from "../assets/tax.png"
import statesicon from "../assets/united-states-of-america.png"
import usericon from "../assets/user.png";
import productsicon from "../assets/gift.png";
import { useAuth } from "../../provider/AuthProvider"
import { roleType } from "../../config"

const AppMenu = () => {

    const { role } = useAuth();


    useEffect(() => {
        const btns = document.querySelectorAll(".sidebar-link");
        for (const btn of btns) {
            btn.addEventListener("click", function () {
                var current = document.getElementsByClassName("active-sidebar-link");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace("active-sidebar-link", "");
                }
                this.className += " active-sidebar-link";
                console.log(this);
            });
        }
    }, []);

    const adminItem = [
        { img: dashboardicon, label: 'Dashboard', to: '/dashboard' },
        { img: productsicon, label: 'Product Taxabality', to: '/product-taxabality' },
        { img: statesicon, label: 'States', to: '/states' },
        { img: taxicon, label: 'States Taxes', to: '/states-tax' },
        { img: usericon, label: 'Users', to: '/users' },
    ]

    const userItem = [
        { img: dashboardicon, label: 'Dashboard', to: '/dashboard' },
    ]

    const menuItem = (roleType.Admin === role) ? adminItem :
        (roleType.CPA === role || roleType.Company === role) ? userItem :
            "";

    return (
        <React.Fragment>
            <ul className="list-unstyled text-center">
                <li to="/Login" className=' p-3 border-bottom bg__sidebar sidebar-link active-sidebar-link' key={'logo'}>
                    <p> <NavLink className='text-decoration-none'><img src={Logo} alt="" /></NavLink></p>
                </li>
                {
                    (menuItem.length > 0) ?
                        menuItem.map(({ img, label, to }, i) =>
                            <li className='p-3 border-bottom bg__sidebar sidebar-link' key={i}>
                                <NavLink className='text-decoration-none text-capitalized bg__change ' to={to}  >
                                    <img src={img} width="30px" alt="" />
                                    <p>{label}</p>
                                </NavLink>
                            </li>

                        ) : ''
                }
            </ul>
        </React.Fragment>
    )
}

export default AppMenu;