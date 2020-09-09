import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButtons.css';

function SwipeButtons() {
	return (
		<div className="SwipeButtons">
			<IconButton className='SwipeButton-repeat'>
				<ReplayIcon fontSize="large"/>
			</IconButton>
			<IconButton className='SwipeButton-left'>
				<CloseIcon fontSize="large" />
			</IconButton>
			<IconButton className='SwipeButton-star'>
				<StarRateIcon fontSize="large" />
			</IconButton>
			<IconButton className='SwipeButton-right'>
				<FavoriteIcon fontSize="large" />
			</IconButton>
			<IconButton className='SwipeButton-lightning'>
				<FlashOnIcon fontSize="large" />
			</IconButton>
		</div>
	);
} 

export default SwipeButtons;
