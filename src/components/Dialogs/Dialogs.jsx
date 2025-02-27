import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from './Message/Message.jsx';
import DialogItem from './DialogsItem/DialogItem.jsx';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer.js";





const Dialogs = (props) => {

		let state = props.dialogsPage;

		let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} /> );

		let messagesElements = state.messages.map((m) => {
				return  < Message mess={m.message} key={m.id} />
		});
		let newMessageBody = state.newMessageBody;

		let onSendMessageClick = () => {
			props.sendMessage();
			
		};
		let onNewMessageChange = (e) => {
			let body = e.target.value;
			props.updateNewMessageBody(body);
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