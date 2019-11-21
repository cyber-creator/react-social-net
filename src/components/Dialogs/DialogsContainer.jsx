import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from './Message/Message.jsx';
import DialogItem from './DialogsItem/DialogItem.jsx';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs";





const DialogsContainer = (props) => {

		let state = props.store.getState().dialogsPage;

		let onSendMessageClick = () => {
			props.store.dispatch(sendMessageCreator());
			
		};
		let onNewMessageChange = (body) => {
			props.store.dispatch(updateNewMessageBodyCreator(body));
		};


	return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
			dialogsPage={state}/>;
};

export default DialogsContainer;