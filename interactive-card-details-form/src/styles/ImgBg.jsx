import styled from 'styled-components/macro'
import tw from 'twin.macro'

const ImgBg = styled.div`
    ${tw`relative h-1/3 w-screen bg-cover bg-no-repeat md:h-screen md:w-1/3 md:bg-[url('src/assets/bg-main-desktop.png')]`}
`
export default ImgBg
