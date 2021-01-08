import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ user, logout }) => {
  return (
    <header>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@s">
            <img/>
            <ul class="uk-nav-default uk-nav-center uk-nav-parent-icon" uk-nav>
                <li class="uk-active"><a href="#">Active</a><li/>
                <li><a href="#">Item<a/><li/>
                <li><a href="#">Item<a/><li/>
            </ul>
        </div>
    </header>
  );
};

export default Nav;