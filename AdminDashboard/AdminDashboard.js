import React from 'react';
import Members from './Members';
import Trainers from './Trainers';
import Clients from './Clients';
import Schedule from './Schedule';
import Reports from './Reports';
import Settings from './Settings';
import './AdminDashboard.css';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'members'
    };
  }

  renderContent() {
    switch (this.state.activeTab) {
      case 'members':
        return <Members />;
      case 'trainers':
        return <Trainers />;
      case 'clients':
        return <Clients />;
      case 'schedule':
        return <Schedule />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-title">ADMIN DASHBOARD</div>
        <div className="tabs">
          <button onClick={() => this.setState({ activeTab: 'members' })}>Members</button>
          <button onClick={() => this.setState({ activeTab: 'trainers' })}>Trainers</button>
          <button onClick={() => this.setState({ activeTab: 'clients' })}>Clients</button>
          <button onClick={() => this.setState({ activeTab: 'schedule' })}>Schedule</button>
          <button onClick={() => this.setState({ activeTab: 'reports' })}>Reports</button>
          <button onClick={() => this.setState({ activeTab: 'settings' })}>Settings</button>
        </div>
        <div className="content">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
