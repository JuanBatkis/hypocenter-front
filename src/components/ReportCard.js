import React from "react";
import dayjs from "dayjs";

const ReportCard = ({
  _id,
  _colaborator,
  building_name,
  location,
  general,
  need, 
  offer, 
  description, 
  status,
  createdAt,
  _owner,
  userId,
}) => {
  return (
  <div className="uk-card uk-card-default uk-card-body uk-width-1-3 report">
      <h3 className="uk-card-title subtitle">{_colaborator.organization}</h3>
      <p><span className="uk-margin-small-right" uk-icon="location"></span>{building_name}</p>
      {/* <p><span className="uk-margin-small-right" uk-icon="phone"></span>{general.phone}</p> */}
      <h4 className="subtitle">We need</h4>
      <p>{need.join(', ')}</p>
      <h4 className="subtitle">We offer</h4>
      <p>{offer.join(', ')}</p>
      <h4 className="subtitle">Description</h4>
      <p>{description}</p>  
      <p>{dayjs(createdAt).format('MMMM D, YYYY')}</p> 
  </div>
  );
};

export default ReportCard;

// const ReportCard = ({ entries, func = ()=>{} }) => {
//   console.log(func);
// return (
//           <div>
//               {entries.map((entry) => {
//                   return (
//                     <div>
//                       <h3 class="uk-card-title">{entry._colaborator.organization}</h3>
//                       <span className="uk-margin-small-right" uk-icon="location"></span><p>{entry.building_name}</p>
//                       <h4 className="uk-margin-small-top uk-margin-remove-bottom">Location:</h4>
//                                           <div className="uk-margin-remove-top">
//                                               {Object.keys(entry.location).map(function(keyName) {
//                                                   return(<p>{keyName.replace(/([a-z])([A-Z])/g, '$1 $2')}: <strong>{entry.location[keyName]}</strong></p>);
//                                               })}
//                                           </div>
//                       <h4 className="uk-margin-small-top uk-margin-remove-bottom">General:</h4>
//                                           <div className="uk-margin-remove-top">
//                                               {Object.keys(entry.general).map(function(keyName) {
//                                                   return(<p>{keyName.replace(/([a-z])([A-Z])/g, '$1 $2')}: <strong>{!Array.isArray(entry.general[keyName]) ? entry.general[keyName] : entry.general[keyName].join(', ')}</strong></p>);
//                                               })}
//                                           </div>
//                       <h4>We need</h4>
//                       <p>{entry.need.join(', ')}</p>
//                       <h4>We offer</h4>
//                       <p>{entry.offer.join(', ')}</p>
//                       <h4>Description</h4>
//                       <p>{entry.description}</p>  
//                       <p>{dayjs(entry.createdAt).format('YYYY-MM-DD')}</p> 
//                     </div>
 
//                   );
//               })}
//           </div>
// );
// };