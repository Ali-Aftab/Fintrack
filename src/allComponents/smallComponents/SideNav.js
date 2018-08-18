import React, { Component } from 'react'

export default class SideNav extends Component {
  render() {
    return (
        <div className="col-md-3">
        <div className="list-group">
        <a href="#" className="list-group-item active main-color-bg">
            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
        </a>
        <a href="#" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Transactions <span className="badge">12</span></a>
        <a href="#" className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Budgets <span className="badge">33</span></a>
        <a href="#" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Ways to save <span className="badge">203</span></a>
        </div>

        <div className="well">
        <h4>Goal 1</h4>
        <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                60%
        </div>
        </div>
        <h4>Goal 2 </h4>
        <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                40%
        </div>
    </div>

        <h4>Goal 3 </h4>
        <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '45%'}}>
                45%
        </div>
    </div>
        </div>
    </div>
    )
  }
}
