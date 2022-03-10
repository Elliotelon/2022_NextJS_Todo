import React from "react";
import { NextPage, GetServerSideProps } from "next";
import { getTodosAPI } from "../lib/api/todo";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

interface IProps {
  todos: TodoType[];
}

const app: NextPage<IProps> = ({ todos }) => {
  return <TodoList todos={todos} />;
};

export default app;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getTodosAPI();
    return { props: { todos: data } };
  } catch (e) {
    return { props: {} };
  }
};
