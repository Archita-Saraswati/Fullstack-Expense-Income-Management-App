import React, { useState } from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';

function Navigation({ active, setActive }) {
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <NavStyled>
            <div className="user-con">
                {/* Dropdown button for smaller screens */}
                <button className="dropdown-btn" onClick={toggleDropdown}>
                    ☰
                </button>

                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Hi, User</h2>
                </div>
            </div>
            <ul className={`menu-items ${dropdownOpen ? 'open' : ''}`}>
                {menuItems.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => {
                                setActive(item.id);
                                setDropdownOpen(false); // Close dropdown on item selection
                            }}
                            className={active === item.id ? 'active' : ''}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    );
                })}
            </ul>
            <div className="bottom-nav">
                <li className="sign">
                    <button type="button" className="btn btn-light">
                        {signout} Sign Out
                    </button>
                </li>
            </div>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 20%;
    height: 100%;
    background: #1f1f1f;
    border: 3px solid #1f1f1f;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .user-con {
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
            width: 20%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            padding: 0.2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2 {
            color: white;
            font-weight: 600;
        }
        .dropdown-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.6rem 0;
            font-weight: 400;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: white;
            padding-left: 1rem;
            position: relative;
            i {
                color: white;
                font-size: 1.4rem;
                transition: all 0.4s ease-in-out;
            }
        }
    }

    .active {
        color: #2fb29f !important;
        i {
            color: #2fb29f !important;
        }
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #2fb29f;
            border-radius: 0 10px 10px 0;
        }
    }

    @media screen and (max-width: 1024px) {
        padding: 2rem 1.5rem;
        width: 35%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    @media screen and (max-width: 770px) {
        padding: 0.5rem;
        width: 100%;
        height: auto;
        background: #1f1f1f;
        display: flex;
        z-index: 10;
        align-items: center;
        justify-content: space-between;
        position: relative;
        border-radius: 10;
        display: flex;
        flex-direction: row;
        // justify-content: space-around;
        padding: 10px 20px;

        .user-con {
            flex-direction: row;
            align-items: center;
            gap: 0.8rem;
            img {
                width: 30px; /* Smaller avatar for top navbar */
                height: 30px;
            }

            h2 {
                font-size: 0.9rem;
                color: #ffffff;
            }

            .dropdown-btn {
                display: block;
                font-size: 1.5rem;
                color: #fff;
                background: none;
                border: none;
                cursor: pointer;
            }
        }

        .menu-items {
            display: none;
            position: absolute;
            top: 100%; /* Position below the navbar */
            left: 0;
            width: 100%;
            background: #2b2b2b;
            border-radius: 0 0 20px 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;

            &.open {
                display: flex;
                flex-direction: column;
            }

            li {
                padding: 0.8rem 1rem;
                font-size: 0.9rem;
                color: #fff;
                transition: background 0.2s ease-in-out;

                &:hover {
                    background: #343434;
                }
            }
        }

        .btn {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
            background: #ffffff;
            color: #000000;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    }
`;

export default Navigation;
