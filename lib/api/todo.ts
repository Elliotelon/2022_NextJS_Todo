import axios from ".";
import { TodoType } from "../../types/todo";

//*투두리스트 불러오기 API
export const getTodosAPI = () => axios.get<TodoType[]>("api/todos");

//* 투두 체크하기 API
export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);
