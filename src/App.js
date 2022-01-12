import React,{Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
//---------------------------------------------------------
//components
import Navigation from "./components/navigation";
import Footer from "./components/footer";
//---------------------------------------------------------
import {appCfg} from "./config"; 
import "./scss/styles.scss";

class App extends Component{
    constructor(){
        super();
        this.state={
            routes: appCfg.routes
        };
    }
    render(){
        let switchContent = this.state.routes.map((item,idx)=>{
            if(item.exact){
                return <Route key={idx} exact path={item.path} element={item.view}/>;
            }
            return <Route key={idx} path={item.path} element={item.view}/>;
        });
        return(        
            <BrowserRouter>
                <Navigation menuItems={this.state.routes}/>                 
                <Routes>
                    {switchContent}
                </Routes>   
                <Footer privacyLink={{name:"Privacy Policy",href:"/privacy"}} menuItems={this.state.routes}/>        
            </BrowserRouter>
        );
    }
}

export default App;