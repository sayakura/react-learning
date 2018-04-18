import React,{ Component }from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'

class Note extends Component{
	render(){
		return(
			<div className="note">
				<p>Learn React, Haolan</p>
				<div id="button-group">
					<button className="note-button" id="edit"><FaPencil /></button>
					<button className="note-button" id="delete"><FaTrash /></button>
				</div>
			</div>
		)
	}
}

export default Note