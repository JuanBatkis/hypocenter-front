import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PreventiveContainer extends Component {
    render() {
        return(
            <div className="uk-child-width-1-2 uk-text-center padre" uk-grid id="article">

                 <article className="uk-article overflow">
                    <h1 className="uk-article-title"><a className="uk-link-reset" href="">Etapa 1: Antes de la emergencia</a></h1>
                        <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Conoce tu vivienda</a></h1>

                            <p>Para poder responder a un desastre de manera eficiente, debes conocer tu vivienda.</p>

                            <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225974/Hipocentro/undraw_houses3_xwf7_1_ehrkr0.svg" alt="Imagen casas"/>

                            <ul >
                                    <li>Ubica salidas de emergencia y establece qué es conveniente hacer en caso de un sismo u otra emergencia. Al escuchar la alerta sísmica, tienes aproximadamente cincuenta segundos. Si no puedes salir en ese lapso, te recomendamos que ubiques un espacio seguro donde te puedas resguardar dentro de tu vivienda. Los lugares más seguros son al lado de columnas fuertes y junto a muebles resistentes. En las casas de una sola planta hay que buscar áreas con columnas cercanas, como pasillos o dentro de los baños. En los edificios, conviene localizar dónde hay muros estructurales, por ejemplo, junto a los elevadores.</li>
                                    <li>Ubica la llave del gas para poder cerrarla si es necesario.</li>
                                    <li>Mantén siempre un extintor y guárdalo en un sitio visible. Se recomienda que esté cerca de algún acceso.</li>
                                    <li>Mantén un botiquín de primeros auxilios y una mochila con artículos de primera necesidad. Guarda también documentos importantes, como escrituras, pagos de servicios e identificaciones de las personas que ocupan la vivienda, en un lugar de fácil acceso.</li>
                                    <li>Asegúrate de que tu familia o las personas con quienes compartes la vivienda sepan cómo actuar ante una emergencia.</li>
                            </ul>

                    <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Conoce tu entorno</a></h1>

                        <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225974/Hipocentro/undraw_analyze_17kw_yyvfz1.svg" alt="Ilustración mujer"/>

                        <ul >
                                    <li>Ubica si Protección Civil ha establecido un punto de reunión cerca de tu vivienda. De no ser así, los parques, plazas, estacionamientos y calles anchas serán probablemente los sitios más seguros.</li>
                                    <li>Ubica hospitales y clínicas y distintas rutas para llegar a ellas.</li>
                                    <li>Ubica edificios públicos en tu entorno, como escuelas y oficinas de gobierno, y comercios donde se puedan obtener víveres y medicamentos.</li>
                                    <li>Mantén una lista de teléfonos de emergencia actualizada.</li>
                            </ul>

                    <h1 classNameName="uk-article-title" id="subtitle"><a className="uk-link-reset" href="">Establecer un protocolo de emergencia con vecinos y familiares</a></h1>
                        <ul >
                                    <li>Ubica si Protección Civil ha establecido un punto de reunión cerca de tu vivienda. De no ser así, los parques, plazas, estacionamientos y calles anchas serán probablemente los sitios más seguros.</li>
                                    <li>Ubica hospitales y clínicas y distintas rutas para llegar a ellas.</li>
                                    <li>Ubica edificios públicos en tu entorno, como escuelas y oficinas de gobierno, y comercios donde se puedan obtener víveres y medicamentos.</li>
                                    <li>Mantén una lista de teléfonos de emergencia actualizada.</li>
                        </ul>   
                        <img className="ilustration" src="https://res.cloudinary.com/dyvopd0iz/image/upload/v1610225975/Hipocentro/undraw_team_spirit_hrr4_uiamao.svg" alt="Ilustración vecinos"/>
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

export default PreventiveContainer; 