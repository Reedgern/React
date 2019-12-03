import React from 'react';
import TaskInput from "../TaskInput/TaskInput";

const TaskForm = (props) => {
        return (
          <div>
              <TaskInput name='#1' onChange={props.onChange} value={props.values['#1']}/>
              <TaskInput name='#2' onChange={props.onChange} value={props.values['#2']}/>
              <TaskInput name='#3' onChange={props.onChange} value={props.values['#3']}/>
          </div>
        );
};

export default TaskForm;