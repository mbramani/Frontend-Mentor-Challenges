import styled from 'styled-components/macro'
import tw from 'twin.macro'
const Card = styled.div`
    ${tw`absolute h-36 z-10 w-64 bg-contain bg-no-repeat drop-shadow-xl md:h-40 md:w-72 lg:h-52 lg:w-96`}
    ${({ type }) =>
        type === 'front'
            ? tw`top-[50%] left-[5%] bg-[url('src/assets/bg-card-front.png')] md:top-[20%] md:left-[25%] lg:top-[15%] lg:left-[40%]`
            : tw`top-[12%] right-[5%] bg-[url('src/assets/bg-card-back.png')] md:top-[46%] md:left-[40%] lg:top-[50%] lg:left-[60%]`}
`
export default Card
