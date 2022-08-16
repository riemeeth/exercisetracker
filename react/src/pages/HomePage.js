import React from 'react';
import ExerciseTable from '../components/ExerciseTable';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
    const history = useHistory();
    const [exercises, setExercises] = useState([]);

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newExercises = exercises.filter(e => e._id !== _id);
            setExercises(newExercises);
        } else {
            console.error(`Failed to delete exercise with id = ${_id}, status code = ${response.status}`)
        }
    };

    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        history.push("/edit-exercise");
    }

    const loadExercises = async () => {
        const response = await fetch(`/exercises`);
        const data = await response.json();
        setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>Completed Exercises</h2>
            <ExerciseTable exercises={exercises} onDelete={onDelete} onEdit={onEdit}> </ExerciseTable>
        </>
    );
}

export default HomePage;