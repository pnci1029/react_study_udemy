export default function Tabs({children, buttons, ButtonContainer}) {
    // const ButtonValue = buttonContainer

    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {children}
        </>
    )
};