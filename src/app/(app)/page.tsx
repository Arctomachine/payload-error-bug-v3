import { getPayload, NotFound, Forbidden } from 'payload'
import configPromise from '@payload-config'

export const dynamic = 'force-dynamic'

async function Page () {
  const payload = await getPayload({
    config: configPromise,
  })

  let data = undefined
  try {
    data = await payload.findByID({
      collection: 'media',
      id: 'TotallyNotRealID',
      // will throw not found error
      // uncomment for forbidden error instead
      // overrideAccess: false,
      // user: null,
    })
  } catch (error) {
    console.error(error)
    console.log('Constructor name:', error.constructor.name)
    console.log(`Instance of ${Forbidden.name}`, error instanceof Forbidden)
    console.log(`Instance of ${NotFound.name}`, error instanceof NotFound)
  }

  return (
    <div>
      <h1>Error here</h1>
      <p>Check console</p>
    </div>
  )
}

export default Page
