import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from ".//components/error-message";
import "./workout.css";
import { WorkoutLog } from "./data/firebase";

function Workout(props) {
  const { id, data } = props;
  const { dateAdded, focus, moves, notes, reps, timing } = data;

//   const focusString = "💚".repeat(focus) + "🤍".repeat(5 - focus);

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteWorkout = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = WorkoutLog.doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="workout">
      <div className="workout__contents">
        {/*<div className="workout__dateAdded">{dateAdded}</div>*/
        <div className="workout__focus">{focus}</div>
        <div className="workout__moves">{moves}</div>
        <div className="notes">{notes}</div>
        <div className="reps">{reps}</div>
        <div className="timing">{timing}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="workout__button" disabled={isDeleting} onClick={deleteWorkout}>
          <Delete />
        </button>
        <button className="workout__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Workout;