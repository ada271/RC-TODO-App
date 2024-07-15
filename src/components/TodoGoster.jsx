import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const TodoGoster = ({ doing, setDoing }) => {
    console.log(doing);
    return (
        <div>
            {doing.map((x) => (
                <div>
                    <h3>
                        {x.text}
                        <div>
                            <MdDeleteForever/>
                            <FaCheckCircle/>
                            {/* ikonlar */}
                        </div>
                    </h3>
                    <h6>{x.day}</h6>
                </div>
            ))}
        </div>
    );
};

export default TodoGoster;
