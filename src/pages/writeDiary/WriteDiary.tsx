import BaseButton from "@components/BaseButton/BaseButton";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import BaseBottomSheetContent from "@components/BaseBottomSheetContent/BaseBottomSheetContent";
import { useState } from "react";

const WriteDiary = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <BaseButton buttonType="abled" onClick={() => setIsVisible(true)}>
        Open BottomSheet
      </BaseButton>
      <BottomSheet isVisible={isVisible} setIsVisible={setIsVisible}>
        <BaseBottomSheetContent />
      </BottomSheet>
    </div>
  );
};

export default WriteDiary;
