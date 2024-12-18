import { mountSuspended,  } from '@nuxt/test-utils/runtime'
import { it, expect, describe } from 'vitest'
import Player from '../../components/Podcast/Player.vue'
import { REFUSED } from 'dns'
import vuetify from '~/plugins/vuetify'

describe('Podcast tests', () => {
  it('Control VuetifyPlayer renderer ', async () => {
    const component = await mountSuspended(Player)
    const player = component.find('VuetifyAudio')
    expect(player.exists()).toBeFalsy()
  })
  it('Control VuetifyPlayer has file', async () => {
    const file = ref('')
    const component = await mountSuspended(Player, { props: { file } })
    const player = component.find('VuetifyAudio')
    expect(player.exists()).toBeFalsy()
  })
  it('Control VuetifyPlayer if start audio', async () => {
    const file = ref('')
    const component = await mountSuspended(Player, { props: { file } })
    const player = component.find('VuetifyAudio')
    const vuetifyAudio = player.
    expect(vuetifyAudio.value == false).toBeTruthy()
  })
})