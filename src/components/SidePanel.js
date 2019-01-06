import React from "react";
import Profile from './Profile'
import Search from './Search'
import BottomBar from './BottomBar'
import ContactList from './ContactList'
// TODO: create a  component sidebar 
//   which will contain the user status, search bar, contacts list, add button, settigs button 

class SidePanel extends React.Component{

    // TODO: state here 

    // TODO: relevant methods here 

    // TODO: render UI here -make sure ID and className are accurate 


    render() 
    {
        // TODO: variables here 
        return (
            <div id="sidepanel">
            
            <Profile />
            <Search />
            <ContactList />
            <BottomBar />
            </div>
        )
        
       

    }
}

export default SidePanel;