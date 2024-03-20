import BaseButton from "@components/BaseButton/BaseButton";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import BaseBottomSheetContent from "@components/BaseBottomSheetContent/BaseBottomSheetContent";
import RecordBottomSheetContent from "@components/RecordBottomSheetContent/RecordBottomSheetContent";
import { useState } from "react";

const WriteDiary = () => {
  const [isBaseBottomSheetVisible, setIsBaseBottomSheetVisible] = useState(false);
  const [isRecordBottomSheetVisible, setIsRecordBottomSheetVisible] = useState(false);

  return (
    <div>
      <BaseButton buttonType="abled" onClick={() => setIsBaseBottomSheetVisible(true)}>
        Open BaseBottomSheet
      </BaseButton>
      <BaseButton buttonType="abled" onClick={() => setIsRecordBottomSheetVisible(true)}>
        Open RecordBottomSheet
      </BaseButton>
      <BottomSheet isVisible={isBaseBottomSheetVisible} setIsVisible={setIsBaseBottomSheetVisible}>
        <BaseBottomSheetContent />
      </BottomSheet>
      <BottomSheet
        isVisible={isRecordBottomSheetVisible}
        setIsVisible={setIsRecordBottomSheetVisible}
      >
        <RecordBottomSheetContent setIsVisible={setIsRecordBottomSheetVisible} />
      </BottomSheet>
    </div>
  );
};

export default WriteDiary;
