import React from 'react';
import { FiDelete, FiEdit2 } from 'react-icons/fi';

function ExerciseRow({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>< FiEdit2 onClick={() => onEdit(exercise)} /></td>
            <td>< FiDelete onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default ExerciseRow;