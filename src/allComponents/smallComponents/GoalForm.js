import React, { Component } from 'react'
import DayPicker from 'react-day-picker';
import moment from 'moment'
import 'react-day-picker/lib/style.css';
//Thunks import 
import {addAGoal }from '../../Store/GoalReducer'

import {connect} from 'react-redux'


class GoalForm extends Component {
    constructor(){
        super()
        this.state = {
            Created : new Date().toLocaleDateString() ,
            selectedDay: undefined,
            goalTitle : '',
            howMuch : '',
            additialInformation : '',
            error : null
        }

    }
    onChangeHandler = (evt)=>{
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    DateHandler = (day) => {
        this.setState({ selectedDay: day.toLocaleDateString() });
    }
    onSubmitHandler = (evt) =>{
        evt.preventDefault()
        console.log(this.state)

        this.props.addAGoal(this.state)
        this.props.alert.success('success!')
        this.setState({
            Created : new Date().toLocaleDateString() ,
            selectedDay: undefined,
            goalTitle : '',
            howMuch : '',
            additialInformation : ''
        })
        console.log(this.state)
    }
    
render() {
    // console.log(this.props.goals)
    return (
    <div>
    <div className="modal fade" id="addGoalForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div className="modal-dialog" role="document">
    <div className="modal-content">
        <form > 
        <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Add A Goal</h4>
        </div>
        <div className="modal-body">
        <div className="form-group">
            <label>Goal Title</label>
            <input onChange={this.onChangeHandler} value={this.state.goalTitle} type="text" name='goalTitle' className="form-control" placeholder="Goal Title" />
        </div>
        <div className="form-group">
            <label>How much ?</label>
            <input onChange={this.onChangeHandler} value={this.state.howMuch} type="text" name='howMuch' className="form-control" placeholder="How much ?" />
        </div>
        <div className="form-group">
            <label>End Date</label>
            <DayPicker 
                onDayClick={this.DateHandler}
            />
            {this.state.selectedDay ? (
            <p>You clicked {this.state.selectedDay}</p>
            ) : (
            <p>Please select a day.</p>
            )}
            
        </div>
        <div className="form-group">
            <label>Additional Information realated to this goal (optional)</label>
            <textarea onChange={this.onChangeHandler} value={this.state.additialInformation} name="editor1" name='additialInformation' className="form-control" placeholder="Additional Information..." ></textarea>
        </div>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
    
        <button onClick={this.onSubmitHandler} type="submit" className="btn btn-primary main-color-bg" >Save changes</button>
        </div>
    </form>
    </div>
    </div>
</div>
    </div>
    )
}
}

const MapStateToProps = state => {
    return {
        goals : state.goals
    }
}

const MapDispatchToProps = dispatch => {
    return {
        addAGoal : (data) => dispatch(addAGoal(data))
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(GoalForm)