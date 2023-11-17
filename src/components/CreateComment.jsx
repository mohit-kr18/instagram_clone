import { Modal, Button, Textarea, FileButton } from '@mantine/core';

const CreateComment = () => {
 
    
    return (
        <Modal opened={opened} onClose={close} >
            <Textarea placeholder='write comment here' cols="10" rows="2"></Textarea>
            <Button>Comment</Button>
        </Modal>
    )
}

export default CreateComment;