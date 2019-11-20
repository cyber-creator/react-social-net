import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from './Message/Message.jsx';
import DialogItem from './DialogsItem/DialogItem.jsx';
import { updateNewMessageBodyCreator, sendMEssageCreator } from "../../redux/dialogs-reducer.js";





const Dialogs = (props) => {

		let state = props.store.getState().dialogsPage;

		let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> ); 

		let messagesElements = state.messages.map((m) => {
				return  < Message mess={m.message} />
		});
		let newMessageBody = state.newMessageBody;

		let onSendMessageClick = () => {
			props.store.dispatch(sendMEssageCreator());
			
		};
		let onNewMessageChange = (e) => {
			let body = e.target.value;
			props.store.dispatch(updateNewMessageBodyCreator(body));
		};


	return(
		<div className={s.dialogs} >
			<div className={s.dialogsItems}>

				{dialogElements}

			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
				<div><textarea value={newMessageBody}
					onChange={onNewMessageChange}
					placeholder='Enter your message'></textarea></div>
				<div><button onClick={ onSendMessageClick}>SEND</button></div>
				</div>
			</div>			
		</div>
	);
}

export default Dialogs;