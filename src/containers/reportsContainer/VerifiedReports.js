import React, {Component} from 'react';
import AppContext from '../../AppContext';
import { ReportCard } from "../../components";
import {getDamageVeryReports} from '../../services/entryDamageWs';
import {getShelterVeryReports} from '../../services/entryShelterWs';


class VeryReports extends Component {

    static contextType = AppContext;

    state = {
        listReport:[],
        listReportShelter:[],
        isChecked: "Shelter"
    }

componentWillMount(){
    getDamageVeryReports().then(res =>{
        this.setState({listReport:res.data.result})
    } )
    .catch(error => console.log('Error'))

    getShelterVeryReports().then(res => {
        this.setState({listReportShelter:res.data.result})
    })

}

handleChange = (isChecked) => {
    this.setState({
        isChecked
    })

}

    render() {
        const {listReport, listReportShelter, isChecked}= this.state;
        return(
            <div className="uk-child-width-1-2 uk-text-center padre" uk-grid id="article">

                <article className="uk-article">
                    <h1 className="uk-article-title"><a className="uk-link-reset" href="">Verified Reports</a></h1>

                    <form>
                
                        <fieldset className="uk-fieldset">

                            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                <label className="radio"><input className="uk-radio" type="radio" name="radio2" checked={isChecked==="Shelter"?true:false} onChange={()=>this.handleChange("Shelter")}/> Collection/Shelter</label>
                                <label className="radio"><input className="uk-radio" type="radio" name="radio2" checked={isChecked==="Damage"?true:false} onChange={()=>this.handleChange("Damage")}/>Damaged Locations</label>
                            </div>

                            <hr/>

                            {/* <form className="uk-search uk-search-default">
                                <span uk-search-icon></span>
                                <input class="uk-search-input" type="search" placeholder="Search..."/>
                            </form> */}

                        </fieldset>


                    </form>
                    <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-small" uk-grid="masonry: true">

                        { isChecked==="Damage"?(listReport.length?
                            listReport.map((item, i)=>{
                                return(
                                    <ReportCard {...item}key={i}/>
                                )
                            })
                            :"No hay reportes"): 
                            (listReportShelter.length?
                            listReportShelter.map((item, i)=>{
                                return(
                                    <ReportCard {...item}key={i}/>
                                )
                            })
                            :"No hay reportes")
                        }
                    </div>

                </article>
            </div>
        )
    }
}

export default VeryReports; 