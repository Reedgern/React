import React, {Component} from 'react';

const Tasks = ({tasks}) => <div>{tasks.map(item => <div><h1>{item.name}</h1><p>{item.descr}</p></div>)}</div>;

class TaskItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p><b>{this.props.name}</b>: {this.props.descr}. Приоритет: <b>{this.props.priority}</b></p>
            </div>
        )
    }
}

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
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
                    <input type='text' ref='name'/>
                    <br/>
                    Описание:
                    <input type='text' ref='descr'/>
                    <br/>
                    Приоритет:
                    <select ref='priority'>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                    <br/>
                    <button type='submit'>Добавить новую задачу</button>
                </form>
            </div>
        )
    }
}

class App extends  Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.sortByPrior = this.sortByPrior.bind(this);
    }
    state = {
        tasks: [],
    };

    addItem(task_item) {
        let arr = this.state.tasks;
        arr.push(task_item);
        this.setState({tasks: arr});
    }

    sortByName(event) {
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

    sortByPrior(event) {
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

    render() {
        let {tasks} = this.state;
        return (
            <div>
                <h1>Осталось выполнить дел: {tasks.length}</h1>
                {tasks.map(item => <TaskItem name={item.name} descr={item.descr} priority={item.prior}/>)}
                <button onClick={this.sortByName}>Сортировать по имени</button>
                <button onClick={this.sortByPrior}>Сортировать по приоритету</button>
                <TaskForm addItem={this.addItem} last_id = {tasks.length}/>
            </div>
        )
    }
}

export default App;