// this contains Sidepanel and main 
// and those contain their respective subcomponents 
import React from "react";
import Sidepanel from "./SidePanel";
import MainContent from './MainContent';
class Frame extends React.Component {
    // TODO: render Sidepanel 
    // refactor into fn stateless, since it's only presenting content 
    // state is not necessary 
   render() {
       return (
           <div id="frame">
           <Sidepanel />
           <MainContent />
           </div>
       )
   }
}

export default Frame; 