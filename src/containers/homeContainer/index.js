import React, {Component} from 'react';

class HomeContainer extends Component {
    render() {
        return(
            <div className="uk-child-width-1-2 uk-text-center" uk-grid id="article">
                <article className="uk-article">
                    <h1>Hipocentro</h1>

                    <p>The hypocenter or seismic focus is the interior point of the Earth where a seismic movement or earthquake begins. The epicenter is the projection of the hypocenter on the earth's surface, the vertical of the focus, which is usually the place where the earthquake is felt with the greatest intensity.</p>

                    <p>This platform seeks to be that focus in which the data reported by the volunteers who are in affected sites after an earthquake are centralized.</p>

                    <p>We believe that just as movements originating deep within the Earth's mantle are projected to the surface, a movement to manage information during an earthquake disaster can be useful to provide support in a more organized and efficient way.</p>

                    <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Our objetive</a></h1>

                    <p>Hipocentro makes available to the public a query base with verified reports, these are easy to navigate thanks to the visualization in the form of tabs and the filters that allow you to refine searches by:</p>
                    <ul >
                        <li>I offer</li>
                        <li>I need</li>
                        <li>Building name</li>
                        <li>Location</li>
                    </ul>

                    <h1 className="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Our origin</a></h1>

                    <p>The success of these platforms is not possible without solidarity and working together.</p>
                    <p>We decided to propose this interface from the events of September 19, 2017, the achievements of the organization #Verificado19s. This movement used the tools at its disposal to organize the reports that the volunteers and the brigades shared.</p>
                    <p>Thanks to their incredible efforts, more people received the support they needed in a timely manner, and they played an important role in fighting the wave of misinformation that was generated after the earthquake.</p>
                    <p>With this project we seek to honor volunteers by taking up their experiences and proposing.</p>
                    <p></p>
                
                    <h1 className="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Reliable sources</a></h1>

                    <div class="uk-child-width-1-2@m fuentes" uk-grid>
                        <div>
                            <a href="https://www.topos.mx/" target="_blank"><div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="https://res.cloudinary.com/dyvopd0iz/image/upload/c_crop,h_288,w_512/v1610751106/Hipocentro/ogimagealt_rycnuk.jpg" alt="Logo-toposmx"/>
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">Topos MX</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div></a>
                        </div>
                        <div>
                            <a href="http://www.cenapred.unam.mx/PublicacionesWebGobMX/buscaindex" target="_blank"><div class="uk-card uk-card-default">
                                <div class="uk-card-media-top">
                                    <img src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610751824/Hipocentro/unnamed_bgbro2.jpg" alt="Logo-cenapred"/>
                                </div>
                                <div class="uk-card-body">
                                    <h3 class="uk-card-title">CENAPRED</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div></a>
                        </div>
                    </div>
                </article>
                <div id="calling">
                    <img src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610221586/Hipocentro/image1-25_zv9wl1.jpg" alt="Foto del sismo"/>
                </div>
            </div>
        )
    }
}

export default HomeContainer; 