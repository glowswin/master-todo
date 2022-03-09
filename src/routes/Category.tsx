import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ICategory, categoryState } from "../atoms";
import { useForm } from "react-hook-form";
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
  width: 24px;
  left: 0px;
  font-size: 10px;
  background-color: aliceblue;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
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
interface IForm {
  cate: string;
}
function Category() {
  const [cateList, setCateList] = useRecoilState<ICategory[]>(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  useEffect(() => {
    const strCate: string | null = localStorage.getItem("cateList");
    strCate != null && setCateList(JSON.parse(strCate));
  }, []);
  const submitevent = ({ cate }: IForm) => {
    let newCate;
    setCateList((olocage) => {
      newCate = [
        ...olocage,
        {
          id: Date.now(),
          text: cate,
        },
      ];
      return newCate;
    });
    localStorage.setItem("cateList", JSON.stringify(newCate));
    setValue("cate", "");
  };
  return (
    <>
      <Header>
        <Lnk>
          <Link to="/">&larr;</Link>
        </Lnk>
        <span>카테고리 관리</span>
      </Header>

      <Container>
        <TodoBox>
          <form onSubmit={handleSubmit(submitevent)}>
            <input
              type="text"
              {...register("cate", { required: "카테고리를 입력하세요" })}
              placeholder="카테고리를 입력해주세요."
            />
            <button>add</button>
          </form>
          {cateList != null &&
            cateList.map((cate) => (
              <Todo key={cate.id} id={cate.id + ""}>
                {cate.text}
              </Todo>
            ))}
        </TodoBox>
      </Container>
    </>
  );
}

export default Category;
