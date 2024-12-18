import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe } from 'vitest'
import MainSlider from '../components/Home/MainSlider.vue'

describe('MainSlider tests', () => {
  it('Renders v-carousel component', async () => {
    const component = await mountSuspended(MainSlider)
    const carousel = component.find('v-carousel')
    expect(carousel.exists()).toBeTruthy()
  })
  it('renders v-carousel-item component', async () => {
    const component = await mountSuspended(MainSlider)
    const carouselItem = component.find('v-carousel-item')
    expect(carouselItem.exists()).toBeTruthy()
  })
  it('Exists images data', async () => {
    const component = await mountSuspended(MainSlider)
    const images = component.vm.$data
    expect(images).toBeDefined()
  })
  it('renders v-img with correct src inside v-carousel-item', async () => {
    const component = await mountSuspended(MainSlider)
    const carouselItems = component.findAll('v-carousel-item')
    carouselItems.forEach((item, index) => {
      const img = item.find('v-img')
      expect(img.attributes('src')).toBe((component.vm as any).images[index].src)
    })
  })
  it('v-carousel has cycle attribute', async () => {
    const component = await mountSuspended(MainSlider)
    const carousel = component.find('v-carousel')
    expect(carousel.attributes('cycle')).toBeTruthy()
  })

})