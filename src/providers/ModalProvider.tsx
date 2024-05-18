import { useEffect, useState } from "react";

import DeleteModal from "../components/DeleteModal";
import UpdateModal from "../components/UpdateModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DeleteModal />
      <UpdateModal />
    </>
  );
};

export default ModalProvider;
