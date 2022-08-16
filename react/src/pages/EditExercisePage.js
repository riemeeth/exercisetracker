import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercisePage = ({ exerciseToEdit }) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited the exercise");
        } else if(response.status === 400){
            alert(`Failed to update exercise`);
        } else if(response.status === 404){
            alert(`Faled to update exercise`);
        }
        history.push("/");
    };

    return (
        <div>
            <h2>Edit Exercise</h2>
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
                        <option value="">--kg or lbs--</option>
                        <option value="kg">kg</option>
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
                <button
                onClick={editExercise}
            >Save</button>
            </table>
        </div>
    );
}

export default EditExercisePage;