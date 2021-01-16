import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PreventiveContainer extends Component {
    render() {
        return(
            <div className="uk-child-width-1-2 uk-text-center padre" uk-grid id="article">

                <article className="uk-article overflow uk-width-3-4">
                    <div className="uk-margin-medium-left uk-margin-medium-right">
                        <h1 className="uk-article-title"><a className="uk-link-reset" href="">Stage 1: Before the emergency</a></h1>
                        <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Conoce tu vivienda</a></h1>

                        <p>In order to respond to a disaster efficiently, you must know your home.</p>

                        <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225974/Hipocentro/undraw_houses3_xwf7_1_ehrkr0.svg" alt="Imagen casas"/>

                        <ul>
                                <li>Locate emergency exits and establish what to do in case of an earthquake or other emergency. When you hear the seismic alert, you have approximately fifty seconds. If you can't get out in that time, we recommend that you locate a safe space where you can take shelter inside your home. The safest places are next to strong columns and sturdy furniture. In single-story homes, look for areas with nearby columns, such as hallways or inside bathrooms. In buildings, you should locate where there are structural walls, for example, next to elevators.</li>
                                <li>Locate the gas tap so that it can be turned off if necessary.</li>
                                <li>Always keep a fire extinguisher and store it in a visible place. It is recommended that it be near the entrance.</li>
                                <li>Keep a first aid kit and a backpack with essential items. Also keep important documents, such as deeds, bills, and ID´s of the people who live with you, in an easily accessible place.</li>
                                <li>Make sure your family or the people with whom you share your home know how to act in an emergency.</li>
                        </ul>

                        <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Get to know your environment</a></h1>

                        <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225974/Hipocentro/undraw_analyze_17kw_yyvfz1.svg" alt="Ilustración mujer"/>

                        <ul >
                            <li>Find out if the government has established a meeting point near your home. If not, parks, squares, parking lots and wide streets will probably be the safest places.</li>
                            <li>Locate hospitals and clinics and different routes to reach them.</li>
                            <li>Locate public buildings around you, such as schools, government facilities, and stores where food and medicine can be obtained.</li>
                            <li>Keep an updated emergency phone list.</li>
                        </ul>

                        <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Establish an emergency protocol with neighbors and family members</a></h1>
                        <ul >
                            <li>Find out if the government has established a meeting point near your home. If not, parks, squares, parking lots and wide streets will probably be the safest places.</li>
                            <li>Locate hospitals and clinics and different routes to reach them.</li>
                            <li>Locate public buildings around you, such as schools, government facilities, and stores where food and medicine can be obtained.</li>
                            <li>Keep an updated emergency phone list.</li>
                        </ul>   
                        <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225975/Hipocentro/undraw_team_spirit_hrr4_uiamao.svg" alt="Ilustración vecinos"/>
                    </div>
                </article>

                <div id="calling" className="uk-padding-small">
                    <p>This work is licensed under the Creative Commons Attribution-Noncommercial-ShareAlike 4.0 International License. Hipocentro MX made changes in the content and illustrations of it.</p>
                    <p>You are free to share and adapt your content as long as you credit it properly, do not use it for commercial purposes and, if you remix, transform or create from the material, you must distribute your contribution under the same license as the original. </p>
                    <p>For more information, please visit: <a className="uk-link-reset" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative commons</a></p>
                </div>
            </div>
        )
    }
}

export default PreventiveContainer; 