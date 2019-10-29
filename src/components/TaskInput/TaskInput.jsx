import React from 'react';

const TaskInput = (props) => {
    return (
      <div>
          <input type='text' name={props.name} id={props.name} onChange={props.onChange} value={props.value}/>
      </div>
    );
};

export default TaskInput;