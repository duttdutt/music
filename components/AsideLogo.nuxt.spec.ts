import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime"
import AsideLogo from "./AsideLogo.vue";

describe('AsideLogo', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(AsideLogo);

    expect(wrapper.find('a').exists()).toBe(true);

    expect(wrapper.text()).toContain('Reimagined')
    expect(wrapper.text()).toContain('Yandex')
    expect(wrapper.text()).toContain('Music')

    expect(wrapper.find('a').attributes('href')).toBe('/')
  })
})
