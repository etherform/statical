// ----------------------------------------------------------------------

import { domReady } from './dom'
import { useLoadingAnimation } from './animation'

// WIP: some fancy loading animation
const { startLoadingAnimation, finishLoadingAnimation } = useLoadingAnimation()

domReady().then(startLoadingAnimation)
setTimeout(finishLoadingAnimation, 15000)
