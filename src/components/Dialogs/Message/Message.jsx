import React from 'react';
import s from './../Dialogs.module.css'




const Message =(props) =>{
	return(
		<div className={s.messages}>{props.mess}</div>	
	);
}

export default Message;

