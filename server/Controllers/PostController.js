import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

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

//me gusta y no me gusta a los posts
export const likePost = async (req, res)=> {
    const id = req.params.id
    const {userId} = req.body
    
    try {
        
        const post = await PostModel.findById(id)
        if(!post.likes.includes(userId))
        {
            await post.updateOne({$push: {likes : userId}})
            res.status(200).json("Post likeado")
        }
        else {
            await post.updateOne({$pull: {likes : userId}})
            res.status(200).json("Post deslikeado")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}





//Obtener posts en la TL
export const getTimelinePosts = async (req, res)=> {
    const userId = req.params.id

    try {
        const currentUserPosts = await PostModel.find({userId : userId})
        const followingPosts = await UserModel.aggregate([
            {
                $match: {
                    _id : new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup: {
                    from : "posts",
                    localField : "following",
                    foreignField : "userId",
                    as : "followingPosts"
                }
            },
            {
                $project: {
                    followingPosts : 1,
                    _id: 0
                }
            }
        ])

        res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts)
        .sort((a,b)=>{
            return b.createdAt - a.createdAt
        })
        );

    } catch (error) {
        res.status(500).json(error)
        
    }
}