import React, {Component} from 'react';

class HomeContainer extends Component {
    render() {
        return(
            <div className="uk-child-width-1-2 uk-text-center" uk-grid id="article">
                <article className="uk-article">

                    <p>El hipocentro o foco sísmico es el punto interior de la Tierra donde se inicia un movimiento sísmico o terremoto. El epicentro es la proyección del hipocentro sobre la superficie terrestre, la vertical del foco;​ que suele ser el lugar donde el sismo se siente con mayor intensidad.</p>

                    <p>Esta plataforma busca ser ese foco en el que se centralicen los datos reportados por los voluntarios que se encuentren en sitios afectados después de un terremoto.</p>

                    <p>Creemos que, así como los movimientos que se originan en lo profundo del manto terrestre se proyectan a la supeficie, un movimiento para gestionar información durante un desastre por sismo, puede ser útil para brindar apoyo de manera más organizada y eficiente.</p>

                    <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Nuestro objetivo</a></h1>

                    <p>Hipocentro pone al alcance del público una base de consulta con reportes verificados, estos son fáciles de navegar gracias a la visualización en forma de fichas y a los filtros que te permiten depurar las búsquedas por:</p>
                    <ul >
                        <li>Ofrezco</li>
                        <li>Necesito</li>
                        <li>Nombre de un edificio</li>
                        <li>Ubicación</li>
                    </ul>

                    <h1 className="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Nuestro origen</a></h1>

                    <p>El éxito de estas plataformas no es posible sin solidaridad y trabajo en conjunto.</p>
                    <p>Decidimos proponer esta interfaz a partir de los eventos del 19 de Septiembre de 2017 los logros de la organización #Verificado19s. Este movimiento usó las herramientas que tuvieron a su alcance para organizar los reportes que los voluntarios y las brigadas compartían. </p>
                    <p>Gracias a sus increíbles esfuerzos más personas recibieron el apoyo que necesitaban de manera oportuna, además, jugaron un papel importante para combatir la ola de desinformación que se generó después del sismo. </p>
                    <p>Con este proyecto buscamos honrar a los voluntarios retomando sus experiencias y proponiendo.</p>
                    <p></p>
                
                    <h1 className="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Fuentes confiables</a></h1>

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