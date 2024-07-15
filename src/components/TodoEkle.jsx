import React, { useState } from "react";

const TodoEkle = ({ doing, setDoing }) => {
    const [button, setButton] = useState(true);

    const [text, setText] = useState("");
    const [day, setDay] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setDoing([...doing, { id: 7, text: text, day: day, isDone: false }]);

        setText("");
        setDay("");
    };

    return (
        <div>
            <header>
                <h1>TO DO APP</h1>
                <button
                    onClick={() => setButton(!button)}
                    className="btn"
                    style={{ backgroundColor: button ? "green" : "purple" }}
                >
                    {button ? "CLOSE" : "SHOW"} ADD TASK BAR
                </button>
            </header>

            {button && (
                <form onSubmit={handleSubmit}>
                    <div className="formControl">
                        <label htmlFor="text">Task</label>
                        <input
                            type="text"
                            id="text"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        />
                    </div>
                    <div className="formControl">
                        <label htmlFor="day">Day&Time</label>
                        <input
                            type="datetime-local"
                            id="day"
                            onChange={(e) => setDay(e.target.value)}
                            value={day}
                        />
                    </div>
                    <button type="submit" className="btn btn-submit">
                        SUBMIT
                    </button>
                </form>
            )}
        </div>
    );
};

export default TodoEkle;
