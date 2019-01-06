import React from "react";
import ContactProfile from './ContactProfile';
import Messages from './Messages';
import CompseMessage from './ComposeMessage';
class MainContent extends React.Component {
    // TODO: state here 


    // render and return HERE 
     // this component will render the following components: 
    // profile component at top 
    // chats and messages component in the middle 
    //   compose message component at the  bottom
    // TODO: fix UI issue here...CSS not applying, find out why
    render() {
        return (
            <div className="Content">
            <ContactProfile />
            {/* <Messages /> */}
            {/* <CompseMessage /> */}
            </div>
        )
    }
   
}

export default MainContent; 