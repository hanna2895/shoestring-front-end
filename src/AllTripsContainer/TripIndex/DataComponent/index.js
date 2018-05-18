import React from 'react';
import ProgressLabel from 'react-progress-label'

const DataComponent = (props) => {
	const cost = parseInt(props.cost)
	const saved = parseInt(props.saved)
	const progress = Math.round(saved/cost * 100, 2);
	const textStyle = {
    	fill: 'black',
   	 	textAnchor: 'middle'
  	};

  	return (
    	<ProgressLabel
      		progress={progress}
      		startDegree={60}
      		progressWidth={20}
      		trackWidth={20}
      		cornersWidth={4}
      		size={100}
      		fillColor="white"
      		trackColor="e55959"
      		progressColor="0094cc"
    	>
     	<text x="50" y="50" style={textStyle}>{`${progress}%`}</text>
    	</ProgressLabel>
  	);
};

export default DataComponent;