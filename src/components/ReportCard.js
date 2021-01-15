import React, { Component } from "react";
import { Link } from "react-router-dom";


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
  isDemo = false,
}) => {
  return (
  <div class="uk-card uk-card-default uk-card-body">
      <h3 class="uk-card-title">{_colaborator.organization}</h3>
      <span className="uk-margin-small-right" uk-icon="location"></span><p>{building_name}{location.city}</p>
      <span className="uk-margin-small-right" uk-icon="phone"></span><p>{general.phone}</p>
      <h4>We need</h4>
      <p>{need}</p>
      <h4>We offer</h4>
      <p>{offer}</p>
      <h4>Description</h4>
      <p>{description}</p>   
  </div>
  );
};

export default ReportCard;