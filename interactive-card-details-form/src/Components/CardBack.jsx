import { Card, CardDetailWrapper } from '../styles/'
import tw from 'twin.macro'
export default function CardBack({}) {
    return (
        <>
            <Card type="back">
                <CardDetailWrapper
                    css={tw`text-sm md:text-lg top-[40%] left-[72%] md:top-[40%] md:left-[72%] lg:top-[43%] lg:left-[74%]`}
                >
                    000
                </CardDetailWrapper>
            </Card>
        </>
    )
}
