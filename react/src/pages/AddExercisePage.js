import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise");
        } else if(response.status === 400){
            alert(`Failed to create exercise`);
        } 
        history.push("/");
    };

    return (
        <div>
            <h2>New Exercise</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>
                    <input
                        required="required"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    </td>
                    <td>
                    <input
                        required="required"
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} />
                    </td>
                    <td>
                    <input
                        required="required"
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} />
                    </td>
                    <td>
                    <select required="required" value={unit} onChange={e => setUnit(e.target.value)}>
                        <option value="">--kgs or lbs--</option>
                        <option value="kgs">kgs</option>
                        <option value="lbs">lbs</option>
                    </select>
                    </td>
                    <td>
                    <input
                        required="required"
                        type="text"
                        value={date}
                        onChange={e => setDate(e.target.value)} />
                    </td>
                </tr>
                <button onClick={addExercise}>Add</button>
            </table>
        </div>
    );
}

export default AddExercisePage;