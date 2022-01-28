import { createStitches } from '@stitches/react'

export const {
    styled,
} = createStitches({
    theme: {
        colors: {
            gray400: 'gainsboro',
            gray500: 'lightgray',
        },
    },
    media: {
        bp1: '(min-width: 480px)',
        bp2: '(min-width: 800px)',
        bp3: '(min-width: 1200px)',
    },

})