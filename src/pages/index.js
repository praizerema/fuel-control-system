import React, {Component} from 'react'
import Header from '../components/Header'
import {connect} from "react-redux";
import ConfigRouters from '../Routes'
class Init extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            selectedIndex: 0
        };
    }
    render() {
        console.log(this.props.state)
        return (
            <>
                <div className="">
                  
                    <Header/>

            
                 
                    <ConfigRouters/>


                </div>
            </>
        );
    }
}
const mapStateToProps = state => ({state: state.merchant_list});

export default connect(mapStateToProps)(Init);