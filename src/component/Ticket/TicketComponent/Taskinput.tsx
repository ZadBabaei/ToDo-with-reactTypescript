import React from 'react'
import * as S from "../ticket.styles"
interface props {
  title?: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const TaskInput  = ({title,setTitle}:props) => {
  return (
    <S.TaskTitleInput  type={'text'}
    value={title}
    onChange={(e)=>{setTitle(e.target.value)}}
    >

    </S.TaskTitleInput>
  )
}

export default TaskInput