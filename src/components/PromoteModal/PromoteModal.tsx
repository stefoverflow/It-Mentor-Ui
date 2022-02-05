import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';

type PromoteModalProps = {
    open: boolean;
    onSubmit: any;
    onCancel: () => void;
    isMentor: boolean;
};

const PromoteModal: React.FC<PromoteModalProps> = ({ open, onSubmit, onCancel, isMentor }) => {

    return <Modal onClose={onCancel} open={open}>
        <Modal.Header>
            Promote {isMentor ? 'mentor' : 'client'}
        </Modal.Header>
        {isMentor && 
            <Modal.Content>
                Select price rate for mentor:
            </Modal.Content>
        }
        <Modal.Actions>
            <Button color="black" onClick={onCancel}>
                Cancel
            </Button>
            {isMentor ? (
                <>
                    <Button onClick={() => onSubmit(1)} color="green">
                        <Icon name="dollar" />
                    </Button>
                    <Button onClick={() => onSubmit(2)} color="green">
                        <Icon name="dollar" />
                        <Icon name="dollar" />
                    </Button>
                    <Button onClick={() => onSubmit(3)} color="green">
                        <Icon name="dollar" />
                        <Icon name="dollar" />
                        <Icon name="dollar" />
                    </Button>
                </>
            ) : (<Button onClick={() => onSubmit()} color="green">
                    <Icon name="angle double up" />
                    Promote to client
                </Button>)}
        </Modal.Actions>
    </Modal>
}

export default PromoteModal;