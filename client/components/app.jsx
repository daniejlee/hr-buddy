import React from 'react';
import Header from './header';
import LogIn from './view-log-in';
import GetEmployees from './view-employees';
import ShiftsHeader from './shifts-header';
import MainMenu from './view-main-menu';
import AddNewEmployee from './view-add-new-employee';
import ViewDepartments from './view-departments';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: 'log-in',
      currentUser: null
    };
    this.setView = this.setView.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  setView(params) {
    this.setState(state => ({
      view: params
    }));
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  getCurrentUser(currentUser) {
    this.setState(state => ({
      currentUser: currentUser
    }));
  }

  render() {
    const header = <Header user={this.state.currentUser} logout={this.setView} employees={this.setView} mainMenu={this.setView} />;
    const shiftsHeader = <ShiftsHeader user={this.state.currentUser} logout={this.setView} employees={this.setView} mainMenu={this.setView} />;

    switch (this.state.view) {
      case 'log-in':
        return (
          <>
            <LogIn setView={this.setView} getCurrentUser={this.getCurrentUser}/>
          </>
        );
      case 'view-employees':
        return (
          <>
            {header}
            <GetEmployees setView={this.setView} getCurrentUser={this.getCurrentUser}/>
          </>
        );
      case 'main-menu':
        return (
          <>
            {header}
            <MainMenu getCurrentUser={this.getCurrentUser}/>
          </>
        );
      case 'add-employee':
        return (
          <>
            {header}
            <AddNewEmployee setView={this.setView} getCurrentUser={this.getCurrentUser}/>
          </>
        );
      case 'view-employee':
        return (
          <>
            {header}
            <GetEmployees getCurrentUser={this.getCurrentUser}/>
          </>
        );
      case 'view-shifts':
        return (
          <>
            {shiftsHeader}
            <GetEmployees getCurrentUser={this.getCurrentUser}/>
          </>
        );
      case 'view-hours':
        return (
          <>
            {header}
            <GetEmployees getCurrentUser={this.getCurrentUser}/>
          </>
        );
      case 'view-departments':
        return (
          <>
            {header}
            <ViewDepartments/>
            {/* <GetEmployees getCurrentUser={this.getCurrentUser}/> */}
          </>
        );
    }
  }
}
