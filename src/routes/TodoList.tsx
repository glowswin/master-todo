import { useRecoilState } from "recoil";
import styled from "styled-components";
import InputBox from "../components/InputBox";
import { ICategory, ITodo, categoryState, todoState } from "../atoms";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Header = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  font-size: 30px;
  position: relative;
`;
const Lnk = styled.div`
  position: absolute;
  top: 40px;
  width: 80px;
  left: 250px;
  font-size: 10px;
  background-color: aliceblue;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 900px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: wrap;
`;

const TodoBox = styled.div`
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 20px;
  padding: 10px 20px;
  width: 240px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Todo = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 1200;
  text-align: center;
  margin-bottom: 10px;
`;

function TodoList() {
  const [cateList, setCateList] = useRecoilState<ICategory[]>(categoryState);
  const [todoList, setTodoList] = useRecoilState<ITodo[]>(todoState);
  useEffect(() => {
    const strTodo: string | null = localStorage.getItem("todoList");
    const strCate: string | null = localStorage.getItem("cateList");
    strCate != null && setCateList(JSON.parse(strCate));
    strTodo != null && setTodoList(JSON.parse(strTodo));
  }, []);
  return (
    <>
      <Header>
        <span>투두리스트</span>
        <Lnk>
          <Link to="/category">카테고리등록</Link>
        </Lnk>
      </Header>
      <Container>
        {cateList != null &&
          cateList.map((cate) => (
            <TodoBox key={cate.id}>
              <Title>{cate.text}</Title>
              <InputBox id={cate.id + ""} />
              {todoList != null &&
                todoList.map((todo) =>
                  todo.categoryid === cate.id ? (
                    <Todo key={todo.id} id={todo.id + ""}>
                      {todo.text}
                    </Todo>
                  ) : null
                )}
            </TodoBox>
          ))}
      </Container>
    </>
  );
}

export default TodoList;
