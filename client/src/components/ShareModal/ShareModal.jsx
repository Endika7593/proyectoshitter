import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

function ShareModal({modalOpened, setModalOpened}) {
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
        <PostShare/>  
        </Modal>
    );
}

export default ShareModal






























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