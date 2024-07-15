import React from "react";

const TodoEkle = ({ doing, setDoing }) => {
    return (
        <div>
            <header>
                <h1>TO DO APP</h1>
                <button className="btn" style={{ backgroundColor: "green" }}>
                    CLOSE ADD TASK BAR
                </button>
            </header>

            <form>
                <div className="formControl">
                    <label htmlFor="text">Task</label>
                    <input type="text" id="text" />
                </div>
                <div className="formControl">
                    <label htmlFor="day">Day&Time</label>
                    <input type="datetime-local" id="day" />
                </div>
                <button className="btn btn-submit" >SUBMIT</button>
            </form>
        </div>
    );
};

export default TodoEkle;
