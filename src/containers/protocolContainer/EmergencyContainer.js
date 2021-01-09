import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EmergencyContainer extends Component {
    render() {
        return(
            <div className="uk-child-width-1-2 uk-text-center" uk-grid id="article">

                 <article className="uk-article">
                    <h1 className="uk-article-title"><a className="uk-link-reset" href="">Etapa 2: la emergencia del día 0 a 10</a></h1>
                        <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Certifica tu seguridad</a></h1>

                            <p>Antes de ayudar a otras personas, debes asegurarte de que estás a salvo.</p>

                            <ul >
                                    <li>Revisa si tu vivienda sufrió daños. De ser así, busca un espacio seguro y notifica a tus vecinos y a las autoridades.</li><br/>
                                    <li>Independientemente de los daños que observes, es conveniente que cierres la llave de paso del gas.</li><br/>
                                    <li>No enciendas cerillos, cigarros u otras flamas.</li><br/>
                            </ul>

                            <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610227003/Hipocentro/undraw_confirmation_2uy0_kffifk.svg" alt="Imagen confirmación"/>

                    <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Decide si es conveniente participar como voluntario e integrar equipos</a></h1>

                        <p>Cuando ocurre una emergencia, muchas veces nos sentimos motivados a ayudar. Antes de decidir si lo harás, conviene reflexionar si puedes desempeñar un papel que no esté practicando ya alguna autoridad o grupo especializado. La respuesta probablemente será afirmativa tras desastres de gran magnitud.</p>
                        
                        <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225974/Hipocentro/undraw_analyze_17kw_yyvfz1.svg" alt="Ilustración mujer"/>

                        <ul >
                                <li>Si tienes el perfil que se requiere para apoyar en las labores de rescate y ayuda inmediata, puedes empezar por contactar a otras personas con tu mismo perfil o a miembros de tu grupo o equipo de trabajo. Juntos pueden decidir dónde es conveniente trabajar.</li><br/>
                                <li>Si tienes uno de los perfiles requeridos, pero no formas parte de un grupo o cuadrilla organizada, puedes acudir a las zonas de desastre y conformar ahí un equipo con personas de tu mismo perfil o de otros, dependiendo del tipo de tareas que se requieran y de las personas disponibles.Si no tienes ninguno de los perfiles requeridos pero consideras oportuno ayudar, puedes acudir a sitios de emergencia e identificar tareas factibles y significativas. Puedes, por ejemplo, participar en el movimiento de escombros y víveres, y en la comunicación de información a través de redes sociales, siempre y cuando respetes las dinámicas y liderazgos de la zona de desastre.</li><br/>
                        </ul>

                        <p>Es muy importante que tus acciones no obstruyan el trabajo de personas especializadas. Sobre todo en las horas inmediatamente posteriores al desastre, te sugerimos mantenerte a cierta distancia de los sitios en los que se realizan labores de rescate y no obstruir calles, pasillos o andadores.</p>

                        <p>Al asumir el papel de voluntario, debes considerar que, probablemente, tendrás que abandonar tus actividades habituales durante algunos días. La ayuda sostenida es preferible a las acciones aisladas.</p>

                        <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610227205/Hipocentro/undraw_hang_out_h9ud_zn9phw.svg" alt="Imagen vecinos"/>
                </article>

                <div id="calling">
                    <p>Esta obra está licenciada bajo la Licencia Creative Commons Atribución NoComercial-CompartirIgual 4.0 Internacional. Hipocentro MX realizó cambios en el contenido e ilustraciones del mismo.</p>
                    <p>Usted es libre de compartir y adaptar sus contenidos siempre y cuando de crédito de manera adecuada, no haga uso de ellos con propósitos comerciales y, en caso de remezclar, transformar o crear a partir del material, debe distribuir su contribución bajo la misma licencia del original. </p>
                    <p>Para mayor información, visite: <a className="uk-link-reset" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative commons</a></p>
                </div>
            </div>
        )
    }
}

export default EmergencyContainer; 