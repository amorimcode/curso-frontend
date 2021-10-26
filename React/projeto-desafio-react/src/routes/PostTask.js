// import React, { useState, useEffect } from "react";
import { postTask } from "../services/postServices";
import { TextField, Button } from "@mui/material";

import "../styles/postComponent.css";
import { useForm } from "react-hook-form";

function PostTask() {
  // const [post, setPost] = useState();

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

 const { register, handleSubmit} = useForm()
 const onSubmit = async data => {
   try {
     console.log(data)
     const {data: resp} = await postTask(data)
     console.log(resp)
     alert("Post criado com sucesso!!!")
   } catch (error) {
     console.error(error)
     alert("Post não foi criado!!!")
     
   }
   
   console.log("DATA AQUI:", data)
 }

  // const onTitle = (e) => setTitle(e.target.value);
  // const onDescription = (e) => setDescription(e.target.value);

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ;
  



  // useEffect(() => {
  //   async function fetchData() {
      
  //     try {
  //       const postsInfo = await postTask(data);

  //       setPost(postsInfo);
  //       console.log("POST INFO", postsInfo)
  //       ;
  //     } catch {
  //       console.error("Deu erro macho.");
  //     }
  //   }

  //   fetchData();
  //  ;
  // }, [data]);

  // if (!data) return null;

  ;

  return (
    <div>
      <h1 className="titulo-h1">Desafio Final de React - Postando Tarefa</h1>
      <div className="div-principal">
        <div className="div-conteiner-login">
          <h1>Adicionar Nova Tarefa</h1>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              
              {...register("title")}
              label="Título"
              variant="outlined"
              type="text"
              required
            />
            <TextField
              
              {...register("description")}
              label="Descrição"
              variant="outlined"
              type="text"
              required
            />

            <Button type="submit" variant="contained" color="success">
              Adicionar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostTask;