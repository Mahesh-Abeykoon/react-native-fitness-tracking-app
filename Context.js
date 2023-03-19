import React, { createContext, useState } from "react";
const FitnessItems = createContext();
const Context = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workoutsDone, setWorkout] = useState(0);
  const [caloriesBurnt, setCalories] = useState(0);
  const [minutesSpent, setMinutes] = useState(0);
  return (
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        workoutsDone,
        setWorkout,
        caloriesBurnt,
        setCalories,
        minutesSpent,
        setMinutes,
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};
export { Context, FitnessItems };
