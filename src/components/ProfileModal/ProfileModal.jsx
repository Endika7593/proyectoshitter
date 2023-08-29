import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
    const theme = useMantineTheme();
    
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
                    name="FirstName"
                    placeholder="Nombre"
                    />

                    <input 
                    type="text" 
                    className="infoInput"
                    name="LastName"
                    placeholder="Apellido"
                    />
                </div>

                <div>
                <input 
                    type="text" 
                    className="infoInput"
                    name="WorksAT"
                    placeholder="Trabaja en"
                    />
                </div>

                <div>
                <input 
                    type="text" 
                    className="infoInput"
                    name="livesIN"
                    placeholder="Vive en"
                    />

                <input 
                    type="text" 
                    className="infoInput"
                    name="country"
                    placeholder="País"
                    />
                </div>

                <div>
                    <input type="text" className="infoInput"
                    placeholder="Estado/Relación"
                    />
                </div>


                <div>
                    Imagen de perfil
                    <input type="file" name="profileImg" />
                    Imagen de portada
                    <input type="file" name="coverImg" />
                </div>

                <button className="button infoButton">Actualizar</button>
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