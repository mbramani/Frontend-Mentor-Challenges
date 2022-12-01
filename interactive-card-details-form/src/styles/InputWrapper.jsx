import styled from 'styled-components/macro'
import tw from 'twin.macro'

const InputWrapper = styled.div`
    ${tw`h-11 w-[90%] rounded-lg mb-6 p-0.5`}
    ${({ focus, error }) =>
        error
            ? tw`bg-red-error mb-7`
            : focus
            ? tw`bg-gradient-to-r from-[hsl(249,_99%,_64%)] to-[hsl(278,_94%,_30%)]`
            : tw`bg-light-grayish-violet`}
`
export default InputWrapper
