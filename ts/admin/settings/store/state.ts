import { EnogweState } from '@types/global'
import StateJson from './state.json'

export const State: EnogweState.Settings = {
  ...(StateJson as unknown as EnogweState.Settings),
  assets: {
    logo: undefined,
    favicon: undefined,
    picture: undefined
  }
}
