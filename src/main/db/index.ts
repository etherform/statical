import { addRxPlugin, createRxDatabase } from 'rxdb'
import { addPouchPlugin, getRxStoragePouch } from 'rxdb/plugins/pouchdb'
import leveldown from 'leveldown'

export async function createDb() {
  if (process.env.NODE_ENV !== 'production') {
    await import('rxdb/plugins/dev-mode')
      .then((module) => addRxPlugin(module.RxDBDevModePlugin))
  }
  await import('pouchdb-adapter-leveldb')
    .then((module) => addPouchPlugin(module)) // (import('pouchdb-adapter-leveldb') as any))

  return createRxDatabase({
    name: 'staticaldb',
    storage: getRxStoragePouch(leveldown),
  })
}

export const db = createDb()
