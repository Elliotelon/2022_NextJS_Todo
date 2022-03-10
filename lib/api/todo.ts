import axios from ".";
import { TodoType } from "../../types/todo";

//*투두리스트 불러오기 API
export const getTodosAPI = () => axios.get<TodoType[]>("api/todos");
