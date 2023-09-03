import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/uploadAction';
import { updateUser } from '../../api/UserRequest';

function ProfileModal({ modalOpened, setModalOpened, data }) {
    const theme = useMantineTheme();
    const {password, ...other} = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setProfileImage] = useState(null)
    const [coverImage, setCoverImage] = useState(null)
    const dispatch = useDispatch();
    const param = useParams()
    const {user} = useSelector((state)=>state.authReducer.authData)

    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onImageChange =(event)=> {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            event.target.name === "profileImage"
            ? setProfileImage(img)
            : setCoverImage(img)
        }
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        let UserData = formData;
        if (profileImage) {
        const data = new FormData();
        const fileName = Date.now() + profileImage.name;
        data.append("name", fileName);
        data.append("file", profileImage);
        UserData.profilePicture = fileName;
        try {
            dispatch(uploadImage(data));
        } catch (err) {
          console.log(err);
        }
      }
      if (coverImage) {
        const data = new FormData();
        const fileName = Date.now() + coverImage.name;
        data.append("name", fileName);
        data.append("file", coverImage);
        UserData.coverPicture = fileName;
        try {
          dispatch(uploadImage(data));
        } catch (err) {
          console.log(err);
        }
      }
      dispatch(updateUser(param.id, UserData));
      setModalOpened(false);
    };
    
    return(
        <Modal 
        overlayColor={
            theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
        opened = {modalOpened}
        onClose={() => setModalOpened(false)}
        >
            <form className="infoForm">
                <h3>Tu información</h3>

                <div>
                    <input 
                    type="text" 
                    className="infoInput"
                    name="firstName"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value = {formData.firstName}
                    />

                    <input 
                    type="text" 
                    className="infoInput"
                    name="lastName"
                    placeholder="Apellido"
                    onChange={handleChange}
                    value = {formData.lastName}
                    />
                </div>

                <div>
                <input 
                    type="text" 
                    className="infoInput"
                    name="WorksAt"
                    placeholder="Trabaja en"
                    onChange={handleChange}
                    value = {formData.worksAt}
                    />
                </div>

                <div>
                <input 
                    type="text" 
                    className="infoInput"
                    name="livesin"
                    placeholder="Vive en"
                    onChange={handleChange}
                    value = {formData.livesin}
                    />

                <input 
                    type="text" 
                    className="infoInput"
                    name="country"
                    placeholder="País"
                    onChange={handleChange}
                    value = {formData.country}
                    />
                </div>

                <div>
                    <input 
                    type="text" 
                    className="infoInput"
                    placeholder="Estado/Relación"
                    name="relationship"
                    onChange={handleChange}
                    value = {formData.relationship}
                    />
                </div>


                <div>
                    Imagen de perfil
                    <input type="file" name="profileImage" onChange={onImageChange} />
                    Imagen de portada
                    <input type="file" name="coverImage" onChange={onImageChange}/>
                </div>

                <button className="button infoButton" onClick={handleSubmit}>Actualizar</button>
            </form>
        </Modal>
    );
}

export default ProfileModal








//COPIADO DE LA PÁGINA DE MANTINE//
// import { useDisclosure } from '@mantine/hooks';
// import { Modal, useMantineTheme } from '@mantine/core';

// function Demo() {
//   const [opened, { open, close }] = useDisclosure(false);
//   const theme = useMantineTheme();

//   return (
//     <>
//       <Modal
//         opened={opened}
//         onClose={close}
//         title="Authentication"
//         overlayProps={{
//           color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
//           opacity: 0.55,
//           blur: 3,
//         }}
//       >
//         {/* Modal content */}
//       </Modal>

//       <Group position="center">
//         <Button onClick={open}>Open modal</Button>
//       </Group>
//     </>
//   );
// }