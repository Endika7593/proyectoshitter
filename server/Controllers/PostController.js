import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";


// Crear un post
export const createPost = async(req, res)=> {
    const newPost = new PostModel(req.body)

    try {
        await newPost.save()
        res.status(200).json("Post creado con éxito")
    } catch (error) {
        res.status(500).json(error)
    }
}

//obtener un post

export const getPost = async (req, res)=> {
    const id = req.params.id

    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)
        
    } catch (error) {
        res.status(500).json(error)

    }
}


//actualizar un post
export const updatePost = async(req, res)=>{
    const postId = req.params.id
    const {userId} = req.body

    try {
        const post = await PostModel.findById(postId)
        if(post.userId === userId)
        {
            await post.updateOne( { $set : req.body })
            res.status(200).json("Post actualizado con éxito")
        }
        else {
            res.status(403).json("Acceso denegado! Usuario no autorizado, solo puedes actualizar tu propia cuenta, pillín.")
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}



//eliminar un post
export const deletePost = async (req, res)=> {
    const id = req.params.id;
    const {userId} = req.body


    try {
        

        const post = await PostModel.findById(id)
        if(post.userId === userId)
        {
            await post.deleteOne();
            res.status(200).json("Post eliminado con éxito")
        }
        else {
            res.status(403).json("Acceso denegado! Usuario no autorizado, solo puedes actualizar tu propia cuenta, pillín.")
        }

    } catch (error) {
        res.status(500).json(error)
        
    }
}
