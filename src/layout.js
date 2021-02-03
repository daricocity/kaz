import React from 'react';
import IdleTimer from 'react-idle-timer';
import IdleTimeOutModal from './idleModal';

class Layout extends React.Component {

    constructor(props){
  
        super(props)
  
        this.state = {
            timeout: 1000 * 5 * 1,
            showModal: false,
            userLoggedIn: false,
            isTimedOut: false
        }

        this.idleTimer = null
        this.onAction = this._onAction.bind(this)
        this.onActive = this._onActive.bind(this)
        this.onIdle = this._onIdle.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }
  
    _onAction(e){
        console.log('user did something', e)
        this.setState({isTimedOut: false})
    }
  
    _onActive(e){
        console.log('user is active', e)
        this.setState({isTimedOut: false})
    }
  
    _onIdle(e){
        console.log('user is idle', e)
        const isTimedOut = this.state.isTimedOut
        if(isTimedOut){
            this.props.history.push('/')
        } else {
            this.setState({showModal: true})
            this.idleTimer.reset();
            this.setState({isTimedOut: true})
        }
    }

    handleClose(){
        this.setState({showModal: false})
    }

    handleLogout(){
        this.setState({showModal: false})
        this.props.history.push('/')
    }
  
    render() {
        return(
            <React.Fragment>
                <IdleTimer
                    ref={ref => {this.idleTimer = ref}}
                    element={document}
                    onActive={this.onActive}
                    onIdle={this.onIdle}
                    onAction={this.onAction}
                    debounce={250}
                    timeout={this.state.timeout}
                />

                <IdleTimeOutModal
                    showModal={this.state.showModal} 
                    handleLogout={this.handleLogout} 
                    handleClose={this.handleClose}
                />
            </React.Fragment>
        )
    }
  }
  
  export default Layout;