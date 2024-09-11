import { useState, useCallback } from "react";

const useWidget = (): [boolean, () => void] => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openWidget = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return [isModalOpen, openWidget];
};

export default useWidget;
