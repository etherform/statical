import { isRxDatabase } from 'rxdb'
import { domReady } from './animation/dom'
import { useLoadingAnimation } from './animation'
import { db } from './db'

if (isRxDatabase(db))
  console.log('seems like db is created')

// WIP: some fancy loading animation
const { startLoadingAnimation, finishLoadingAnimation } = useLoadingAnimation()

domReady().then(startLoadingAnimation)
setTimeout(finishLoadingAnimation, 15000)
