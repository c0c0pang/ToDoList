import React, { useState } from 'react'
import {
    ModalDiv,
    CenterDiv,
    ConfirmButton,
    CancelButton,
    ButtonDiv,
    SelectButton,
    TitleText
} from './styled_modal'
import {
    SelectText
} from './styled_setting'
import { BOARD_API } from './../api/ApiStorage';
function ModalSetting({ isModal, setIsModal, isId }: any) {
    const [selecttype, SetselectType] = useState<string>("")
    const onSelect = (type: string) => {
        SetselectType(type)
    }
    const onConfirm = () => {
        setIsModal(true)
    }
    const onCancel = () => {
        setIsModal(false)
    }
    const onDelete = () => {
        BOARD_API.DELETE_BOARD(isId)
        window.location.replace("/growth_board");
    }
    return (
        <CenterDiv>
            <ModalDiv isModal={isModal}>
                {selecttype === '' ? (
                    <>
                        <SelectText onClick={(() => onSelect('Modify'))}>게시글을 수정</SelectText>
                        <SelectText onClick={() => onSelect('Delete')}>게시글 삭제</SelectText>
                        <SelectButton onClick={onCancel} isModal={isModal}>돌아가기</SelectButton>
                    </>
                ) : (null)}

                {selecttype === 'Modify' ? (
                    <>
                        <TitleText>게시글을 수정</TitleText>
                        <ButtonDiv>
                            <ConfirmButton to='./create_board' onClick={onConfirm} isModal={isModal}>확인</ConfirmButton>
                            <CancelButton onClick={() => SetselectType("")} isModal={isModal}>취소</CancelButton>
                        </ButtonDiv>
                    </>
                ) : (null)}

                {selecttype === 'Delete' ? (
                    <>
                        <TitleText>게시글 삭제</TitleText>
                        <ButtonDiv>
                            <ConfirmButton to='/' onClick={() => { onConfirm(); onDelete(); }} isModal={isModal}>확인</ConfirmButton>
                            <CancelButton onClick={() => SetselectType("")} isModal={isModal}>취소</CancelButton>
                        </ButtonDiv>
                    </>
                ) : (null)}

            </ModalDiv>
        </CenterDiv>
    )
}

export default ModalSetting