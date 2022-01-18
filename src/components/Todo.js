import React, { useState } from 'react';
import { addTodo, deleteTodo, removeTodo, revoveTodo } from '../actions/index';
import { useDispatch } from 'react-redux';
import "./todo.css"
import { useSelector } from 'react-redux';

const Todo = () => {

    const [inputData, setInputData] = useState("")
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducer.list)
    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Add your List here 🤙</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="✍️ Add Items.." value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData),
                        setInputData(""))}></i>
                </div>

                <div className="showItems">
                    {
                        list.map((element) => {
                            return (
                                <div className="eachItem" key={element.id}>
                                    <h3>{element.data}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-trash-alt add-btn" onClick={() => dispatch(deleteTodo(element.id))}></i>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
                <div className="showItems">
                  <button className="btn effect04" data-sm-link-text="remove All" 
                  onClick={() => dispatch(removeTodo())}
                  ><span>Check List</span></button>
                </div>
            </div>
        </div>
    );
};

export default Todo;