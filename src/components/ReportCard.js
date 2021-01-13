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
  <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
      <h3 class="uk-card-title">{_colaborator}</h3>
      <span className="uk-margin-small-right" uk-icon="location"></span>
      <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  );
};

export default ReportCard;