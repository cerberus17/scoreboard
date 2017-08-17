import React, { PropTypes } from 'react';

const PlayerDetail = (props) => {
  if(props.selectedIndex > -1){
    return (
      <div>
        <h3>{props.selectedPlayer.name}</h3>
        <ul>
          <li>
            <span>Score: </span> 
            {props.selectedPlayer.score}
          </li>
          <li>
            <span>Created: </span> 
            {props.selectedPlayer.created}
          </li>
          <li>
            <span>Updated: </span> 
            {props.selectedPlayer.updated}
          </li>        
        </ul>
      </div>
    );
  }
  else {
    return (<p>Click on a player to see more details</p>);
  }
};

PlayerDetail.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  selectedPlayer: PropTypes.object,
};

export default PlayerDetail;
