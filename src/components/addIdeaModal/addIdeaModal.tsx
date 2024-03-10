import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useCreateIdea } from "../../hooks/idea";

const AddIdeaModal = ({
  label,
  okAction,
}: {
  label: string;
  okAction: (onOpen: () => void) => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newIdea, setNewIdea] = useState<null | {
    name?: string | null | undefined;
    description?: string | null | undefined;
  }>();

  const { mutateAsync } = useCreateIdea();
  // add idea if valid
  const addIdea = useCallback(async () => {
    if (newIdea?.name && newIdea?.description) {
      await mutateAsync({
        input: {
          description: newIdea.description,
          name: newIdea.name,
          owner: "string",
        },
      });
      onClose();
    }
  }, [newIdea, onClose]);

  return (
    <>
      <Button onClick={() => okAction(onOpen)}>{label}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Idea Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter idea name"
                required
                value={newIdea?.name || ""}
                onChange={(e) =>
                  setNewIdea((prev) => {
                    return {
                      ...prev,
                      name: e.target.value,
                    };
                  })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Idea Description</FormLabel>
              <Textarea
                placeholder="Enter idea description"
                value={newIdea?.description || ""}
                required
                onChange={(e) =>
                  setNewIdea((prev) => {
                    return {
                      ...prev,
                      description: e.target.value,
                    };
                  })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button
              onClick={addIdea}
              isDisabled={!(newIdea && newIdea.description && newIdea.name)}
            >
              Add Idea
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddIdeaModal;
