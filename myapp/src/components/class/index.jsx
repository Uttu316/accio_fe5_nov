import { Component } from "react";
import InputItem from "../userForm/inputItem";
import styles from "./list.module.css";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");

    this.state = {
      task: props.firstTask,
      taskList: [],
    };
    this.onInput = this.onInput.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDlt = this.onDlt.bind(this);
  }

  onInput(e) {
    const { value } = e.target;

    this.setState({ task: value });
  }
  onAdd() {
    let newTaks = [...this.state.taskList];

    newTaks.unshift({
      id: parseInt(Math.random() * 10000),
      task: this.state.task,
    });

    this.setState({ taskList: newTaks, task: "" });
  }

  onDlt(e) {
    const {dataset} = e.target;

    const{taskid} = dataset;


    let tasks = this.state.taskList.filter((i)=>i.id!==+taskid);

    this.setState({taskList:tasks})
  }

  render() {
    console.log("render");
    const isDisable = this.state.task.length <= 10;
    const isAnyTask = this.state.taskList.length !== 0;
    return (
      <div>
        <h1>Welcome to Class Components</h1>
        <div className={styles.list}>
          <div className={styles.taskbox}>
            <InputItem
              name={"task"}
              label={"Task"}
              value={this.state.task}
              onChange={this.onInput}
            />
            <button
              onClick={this.onAdd}
              disabled={isDisable}
              className={styles.btn}
            >
              Add Task
            </button>
          </div>

          {isAnyTask && (
            <div className={styles.listItems}>
              {this.state.taskList.map((item) => (
                <div className={styles.listItem} key={item.id}>
                  <p className={styles.task}>{item.task}</p>
                  <button
                    data-taskid={item.id}
                    onClick={this.onDlt}
                    className={styles.dltBtn}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ClassComp;
