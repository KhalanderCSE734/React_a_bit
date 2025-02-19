import React, { useEffect } from 'react';
import {useState,useRef} from 'react';
import { MdDoneOutline,MdDelete } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import './App.css';

const App = () => {
  const [detail,setDetail] = useState({});
  const [todo,setTodo] = useState([]);
  const titleInput = useRef(null);
  const [workDone,setWorkDone] = useState(false);
  const [editDetail,setEditDetail] = useState({});
  const edit = useRef(null);
  const parent = useRef(null);
  const [changeState,setChangeState] = useState(0);
  const [editInd,setEditInd] = useState(0);


  useEffect(()=>{
        const arrTodo = JSON.parse(localStorage.getItem("Todo")) || [];
        setTodo(arrTodo);
  },[])
  useEffect(()=>{
    localStorage.setItem("Todo",JSON.stringify(todo));
  },[todo]);

  useEffect(()=>{
    // console.log(parent.current.children);
  if(parent.current){
      const children = parent.current.children;
      let arr = Array.from(children);
        arr.forEach((ele,ind)=>{
          todo.forEach((task,Tind)=>{
              if(ind===Tind){
                if(task.workDone){
                  arr[Tind].querySelector('p').style.textDecoration = "line-through";               
                  arr[Tind].querySelector('h1').style.textDecoration = "line-through";                
                  arr[Tind].querySelector('p').style.color = "rgba(254, 243, 199, .5)";               
                  arr[Tind].querySelector('h1').style.color = "rgba(254, 243, 199, .5)";                
                } else{
                  arr[Tind].querySelector('p').style.textDecoration = "none";                
                  arr[Tind].querySelector('h1').style.textDecoration = "none";                 
                  arr[Tind].querySelector('p').style.color = "rgba(254, 243, 199, 1)";               
                  arr[Tind].querySelector('h1').style.color = "rgba(254, 243, 199, 1)";
                }

              }
          })
        }) 
      
  }

  },[todo]);


  const addEditDesc = (evt)=>{
    let name = evt.target.name;
    let val = evt.target.value;
    setEditDetail((prev)=>{
      return {...prev,[name]:val}
    })
  }

  const closeEdit = ()=>{
      edit.current.style.display = "none";
  }
  const saveEdits = ()=>{
    if(editDetail.edit_title && editDetail.edit_desc){
          let newArr = todo.map((task,ind)=>{
      if(ind===editInd){
        let newObj = {
          title:editDetail.edit_title,
          desc:editDetail.edit_desc,
          workDone:false
        }
        return newObj
      } else{
        return task
      }
    })

    setTodo(newArr);
    setEditDetail((prev)=>{
      return {edit_title:"",edit_desc:""}
    })
    }
    edit.current.style.display = "none";
  }
  const addDesc = (evt)=>{
      let name = evt.target.name;
      let val = evt.target.value;
      setDetail((prev)=>{
        return {...prev,[name]:val}
      })
      
  }

  const submit = (evt)=>{
      evt.preventDefault();
      let title ;
      let desc ;
      if(detail.title!==undefined && detail.desc!==undefined ){
          title = (detail.title).trim();
          desc = (detail.desc).trim();     
      }
      if(title !== undefined && desc !==undefined && title!=="" && desc!==""){
        setTodo((prev)=>{
          return [...prev,{...detail,workDone}]
        });   
      setDetail((prev)=>{
        return {...prev,title:"",desc:""}
      })
        titleInput.current.focus();
    }else{
      alert("It Is Mandatory To Fill Both The Fields In Order To Add A ToDo ");
    }
  }


  const deleteTodo = (evt)=>{
      let todoID = evt.target.closest('div').id;
      let newTodo = todo.filter((prev,ind)=>{
        return ind!=todoID;
      })
      setTodo(newTodo);
  }

  const completed = (evt)=>{
   const id = (parseInt(evt.target.closest('div').id));
    const newArray = todo.map((prev,ind)=>{
      if(id===ind){
        return {...prev,workDone:!(prev.workDone)}
      } else {
        return prev;
      }
    })
    setTodo(newArray);

  }



  const editTodo = (evt)=>{
    edit.current.style.display = "flex";
    let id = parseInt(evt.target.closest('div').id);
    setEditInd(id);
  }

  
  const renderTodo = ()=>{
    if(todo.length>0){
      return(
      todo.map((content,ind)=>{
          return(
            <div key={ind} id={ind} className="flex text-yellow-200 items-center justify-between w-4/5 h-20 m-5" >
                <h1 className='text-start text-3xl font-bold w-1/4'>{content.title}</h1>
                <p className='text-start text-[1rem] p-4 w-1/3'> {content.desc} </p>
                <MdDoneOutline className="text-orange-600 text-2xl cursor-pointer" onClick={completed}/>
                <CiEdit className="text-orange-600 text-3xl cursor-pointer" onClick={editTodo}/>
                <button className='p-3 text-lime-300 bg-red-800 border-none rounded-2xl text-[1.1rem] w-1/6 flex items-center justify-evenly' onClick={deleteTodo}>Delete<MdDelete className='text-[1.1rem]'/></button>
            </div>
          )
        })    
    )    
    } else {
      return <h1 className="text-orange-700 text-3xl p-8">No Task Available to Complete..........</h1>;
    }

  }

  return (
    <div className="bg-cyan-950 w-full h-screen">
      <h1 className='text-center text-lime-600 text-4xl pt-10'>React With Todo</h1>
      <form 
        className='h-28 bg-orange-500 flex justify-evenly items-center w-5/6 m-auto mt-10 rounded-lg mb-20'
        onSubmit={submit}
        >
            <input type="text" className='w-2/6 h-2/5 rounded-md pl-5 placeholder-blue-800 placeholder:text-[15px] focus:ring-2 focus:ring-green-400 outline-none' placeholder="Enter Title" name="title" value={detail.title || ""} onChange={addDesc} ref={titleInput} autoComplete='false'/>
            <input type="text" className='w-2/6 h-2/5 rounded-md pl-5 placeholder-blue-800 placeholder:text-[15px] focus:ring-2 focus:ring-green-400 outline-none' placeholder="Enter Description " name="desc" value={detail.desc || ""} onChange={addDesc}/>
            <button className='p-4 text-lime-300 bg-pink-500 border-none rounded-2xl' type="submit">Add Todo</button>
      </form>

      <div className='w-full flex flex-col justify-evenly items-center bg-gray-600 h-max p-5' ref={parent}>
            { renderTodo() }
      </div>
      <div className="edit-todo" ref={edit}>
        <input type="text" className='title' placeholder='Edit Your Title' name="edit_title" onChange={addEditDesc} value={editDetail.edit_title || ""}/>
        <input type="text" className="description" placeholder='Edit Your Description' name="edit_desc" onChange={addEditDesc} value={editDetail.edit_desc || ""}/>
        <div className="buttons">
            <button onClick={closeEdit}> Cancel </button>
            <button onClick={saveEdits}> Save </button>
        </div>
      </div>
    </div>
  )
}

export default App 
