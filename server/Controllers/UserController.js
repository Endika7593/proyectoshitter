import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
//obtener un usuario
export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);

        if (user) {
            const { password, ...otherDetails } = user._doc

            res.status(200).json(otherDetails);
        }
        else {
            res.status(404).json("El usuario no existe")
        }
    } catch (error) {
        res.status(500).json(error)
    }
};
//actualiazr un usuario
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus, password } = req.body;

    if (id === currentUserId || currentUserAdminStatus) {
        try {
            if (password) {
               const salt = await bcrypt.genSalt(10);
               req.body.password = await bcrypt.hash(password, salt)
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, { 
              new: true,
            });

            res.status(200).json(user)
            } catch (error) {
            res.status(500).json(error)
            }
        }
        else{
            res.status(403).json("Acceso denegado! Usuario no autorizado, solo puedes actualizar tu propia cuenta, pillín.")
        }
};


// eliminar usuario
export const deleteUser = async (req, res) => {
    const id = req.params.id

    const {currentUserId, currentUserAdminStatus} = req.body

    if (currentUserId === id || currentUserAdminStatus)
    {
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("Usuario eliminado con éxito")
        } catch (error) {
      res.status(500).json(error);

        }
    }
    else {
        res.status(403).json("Acceso denegado! Usuario no autorizado, solo puedes eliminar tu propia cuenta, pillín.")
    }
}

// Seguir a un usuario

export const followUser = async (req, res) => {
    const id = req.params.id

    const {currentUserId} = req.body

    if (currentUserId === id) {
        res.status(403).json("Acción no permitida, no puedes seguirte a ti mismo, macho, estamos tontos??")
    } else {
        try {
            const followUser= await UserModel.findById(id);
            const followingUser = await UserModel.findById(currentUserId);

            if(!followUser.followers.includes(currentUserId))
            {
                await followUser.updateOne({$push : {followers: currentUserId}});
                await followingUser.updateOne({$push: {following: id}});
                res.status(200).json("Usuario seguido");
            }
            else{
                res.status(403).json("Ya estás siguiendo a este usuario");
            }

        } catch (error) {
            res.status(500).json(error);
            
        }
    }
};

// Dejar de seguir a un usuario

export const UnFollowUser = async (req, res) => {
    const id = req.params.id

    const {currentUserId} = req.body

    if (currentUserId === id) {
        res.status(403).json("Acción no permitida, no puedes seguirte a ti mismo, macho, estamos tontos??")
    } else {
        try {
            const followUser= await UserModel.findById(id);
            const followingUser = await UserModel.findById(currentUserId);

            if(followUser.followers.includes(currentUserId))
            {
                await followUser.updateOne({$pull : {followers: currentUserId}})
                await followingUser.updateOne({$pull: {following: id}})
                res.status(200).json("Has dejado en paz al usuario!")
            }
            else{
                res.status(403).json("No estás molestando a este usuario")
            }

        } catch (error) {
            res.status(500).json(error);
            
        }
    }
}