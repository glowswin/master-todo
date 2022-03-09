import { useRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";
import { useForm } from "react-hook-form";
interface IForm {
  todo: string;
}
export interface IInputBox {
  id: string;
}
function InputBox({ id }: IInputBox) {
  const [todoList, setTodoList] = useRecoilState<ITodo[]>(todoState);

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const submitevent = ({ todo }: IForm) => {
    let newTodo;
    setTodoList((olodTodo) => {
      newTodo = [
        {
          id: Date.now(),
          text: todo,
          categoryid: parseInt(id),
        },
        ...olodTodo,
      ];
      return newTodo;
    });
    localStorage.setItem("todoList", JSON.stringify(newTodo));
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(submitevent)}>
      <input
        type="text"
        {...register("todo", { required: "할일을 입력하세요" })}
        placeholder="할일을 입력해주세요."
      />
      <button>add</button>
    </form>
  );
}
export default InputBox;
