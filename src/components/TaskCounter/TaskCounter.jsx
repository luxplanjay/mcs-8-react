import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { selectTaskCount } from "../../redux/tasksSlice";

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
