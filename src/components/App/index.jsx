import React, {Component} from 'react';
import style from "./Component.module.css";


class TaskItem extends Component {
    render() {
        return (
            <div>
                <p className={style.taskItem}><b>{this.props.name}</b>: {this.props.descr}. Priority: <b>{this.props.priority}</b></p>
                <button onClick={() => this.props.onDelete(this.props.id)}>Delete me</button>
            </div>
        )
    }
}

class TaskForm extends Component {
    onSubmit = event => {
        event.preventDefault();
        let new_task = {
            id: this.props.last_id + 1,
            name: this.refs.name.value,
            descr: this.refs.descr.value,
            prior: parseInt(this.refs.priority.value)
        };

        this.props.addItem(new_task);
        this.refs.form.reset();
    }

    render() {
        return (
            <div>
                <form id="task_form" onSubmit={this.onSubmit} ref='form'>
                    Название:
                    <input className={style.taskInput} type='text' ref='name'/>
                    <br/>
                    Описание:
                    <input className={style.taskInput} type='text' ref='descr'/>
                    <br/>
                    Приоритет:
                    <select ref='priority'>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                    <br/>
                    <button type='submit'>New task</button>
                </form>
            </div>
        )
    }
}

class App extends  Component {
    state = {
        tasks: [],
    };

    addItem = task_item => {
        let arr = this.state.tasks;
        arr.push(task_item);
        this.setState({tasks: arr});
    }

    sortByName = event => {
        event.preventDefault();
        let {tasks} = this.state;
        let comparator = (a,b) => {
            if (a.name > b.name) {
                return 1;
            }
            else if (a.name === b.name) {
                return 0;
            }
            return -1;
        }

        tasks.sort(comparator);
        this.setState({tasks: tasks});
    }

    sortByPrior = event => {
        event.preventDefault();
        let {tasks} = this.state;
        let comparator = (a,b) => {
            if (a.prior > b.prior) {
                return 1;
            }
            else if (a.prior === b.prior) {
                return 0;
            }
            return -1;
        }

        tasks.sort(comparator);
        this.setState({tasks: tasks});
    }

    deleteItem = id => {
        let arr = this.state.tasks;
        let idx = arr.findIndex((el, idx) => {return el.id === id});
        arr.splice(idx, 1);
        this.setState({tasks: arr});
    }

    render() {
        let {tasks} = this.state;
        return (
            <div>
                <h1>Tasks left: {tasks.length}</h1>
                <div className={style.container}>{tasks.map(item => <TaskItem key={item.id} id={item.id} name={item.name} descr={item.descr} priority={item.prior} onDelete={this.deleteItem}/>)}</div>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPrior}>Sort by prior</button>
                <TaskForm addItem={this.addItem} last_id = {tasks.length}/>
            </div>
        )
    }
}

export default App;