import { Card, CardDetailWrapper } from '../styles/'
import tw from 'twin.macro'
export default function CardBack({ inputFields }) {
    const cvv = inputFields.find(
        (inputField) => inputField.id === 'card-cvv'
    ).value

    return (
        <>
            <Card type="back">
                <CardDetailWrapper
                    css={tw`w-[15%] mx-0 text-sm md:text-lg top-[41%] left-[78%] md:top-[39%] md:left-[76%] lg:top-[42%] lg:left-[78%]`}
                >
                    {cvv || '000'}
                </CardDetailWrapper>
            </Card>
        </>
    )
}
