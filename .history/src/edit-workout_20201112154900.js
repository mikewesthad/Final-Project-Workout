//Will contain a CRUD operation
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import EditWorkout 


function EditWorkoutLog() {
  const { id } = useParams();

  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditWorkout id={id} />
     
    </main>
  );
}

export default EditWorkoutLog;
