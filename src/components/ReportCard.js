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
		<div>
			<div className="uk-card uk-card-default uk-card-body report uk-radius">
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
		</div>
	);
};

export default ReportCard;