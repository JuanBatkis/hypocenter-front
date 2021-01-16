import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EmergencyContainer extends Component {
    render() {
        return(
            <div className="uk-child-width-1-2 uk-text-center padre" uk-grid id="article">

                <article className="uk-article overflow uk-width-3-4">
                    <div className="uk-margin-medium-left uk-margin-medium-right">
                        <h1 className="uk-article-title"><a className="uk-link-reset" href="">Stage 2: The emergency from day 0 to 10</a></h1>
                        <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Ensure your safety</a></h1>

                        <p>Before helping others, you should make sure you are safe.</p>

                        <ul >
                            <li>Check if your home was damaged. If so, find a safe space and notify your neighbors and the authorities.</li><br/>
                            <li>Regardless of the damage you see, it is a good idea to turn off the gas tap.</li><br/>
                            <li>Do not light matches, cigarettes or other flames.</li><br/>
                        </ul>

                        <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610227003/Hipocentro/undraw_confirmation_2uy0_kffifk.svg" alt="Imagen confirmación"/>

                        <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Decide if it is convenient to participate as a volunteer and integrate teams</a></h1>

                        <p>When an emergency occurs, we are often motivated to help. Before deciding to do so, it is worth reflecting on whether you can play a role that is not already being practiced by some authority or specialized group. The response is likely to be affirmative after major disasters.</p>
                            
                        <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225974/Hipocentro/undraw_analyze_17kw_yyvfz1.svg" alt="Ilustración mujer"/>

                        <ul >
                            <li>If you have the profile required to support the rescuers and immediate aid efforts, you can start by contacting other people with your same profile or members of your group or team. Together you can decide where to work.</li><br/>
                            <li>If you have one of the required profiles, but you are not part of an organized group or crew, you can go to the disaster areas and form a team with people of your same profile or others, depending on the type of tasks required and the people available. You can, for example, participate in the movement of debris and food, and in the communication of information through social networks, as long as you respect the dynamics and leadership of the disaster area.</li><br/>
                        </ul>

                        <p>It is very important that your actions do not obstruct the work of specialized people. Especially in the hours immediately following a disaster, we suggest that you keep some distance from rescue sites and do not obstruct streets, hallways or walkways.</p>

                        <p>When assuming the role of volunteer, you should consider that you will probably have to leave your usual activities for a few days. Sustained support is preferable to isolated actions.</p>

                        <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610227205/Hipocentro/undraw_hang_out_h9ud_zn9phw.svg" alt="Imagen vecinos"/>                        
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

export default EmergencyContainer; 