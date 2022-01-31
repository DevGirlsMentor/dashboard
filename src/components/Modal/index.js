import { BackgroundModal, ContainerModal } from "./styles";

const Modal = ({ children }) => {
  return (
    <BackgroundModal>
      <ContainerModal>{children}</ContainerModal>
    </BackgroundModal>
  );
};

export default Modal;
