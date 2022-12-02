import { Card, CardDetailWrapper } from '../styles/'
import cardLogo from '../assets/card-logo.svg'
import tw from 'twin.macro'

export default function CardFront({ inputFields }) {
    const findValueById = (id) =>
        inputFields.find((inputField) => inputField.id === id).value

    return (
        <>
            <Card type="front">
                <CardDetailWrapper css={tw`top-[8%]`}>
                    <img
                        src={cardLogo}
                        className="h-6 w-12 md:h-7 md:w-14 lg:h-10 lg:w-20"
                    />
                </CardDetailWrapper>

                <CardDetailWrapper
                    css={tw`ml-1 w-[98%] top-[34%] md:top-[36%] lg:top-[38%]`}
                >
                    <div className="mx-auto w-[90%] text-xl md:w-[96%] md:text-2xl lg:w-[90%] lg:text-3xl">
                        {findValueById('card-number') || '0000 0000 0000 0000'}
                    </div>
                </CardDetailWrapper>
                <CardDetailWrapper
                    css={tw`top-[34%] md:top-[40%] lg:top-[46%] w-[88%]`}
                >
                    <div className="flex w-full justify-between text-xs lg:text-sm">
                        <div>
                            {findValueById('card-holder-name') ||
                                'Jane Appleseed'}
                        </div>
                        <div>
                            {findValueById('card-exp-mm') || 'MM'}/
                            {findValueById('card-exp-yy') || 'YY'}
                        </div>
                    </div>
                </CardDetailWrapper>
            </Card>
        </>
    )
}
