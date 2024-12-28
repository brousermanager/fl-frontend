import { mountSuspended } from "@nuxt/test-utils/runtime";
import { it, expect, describe } from "vitest";
import Player from "@/components/Podcast/Player.vue";
import vuetify from './setupTests';

describe("Podcast tests", () => {

  it("Should check that vuetify audio player is rendered", async () => {
    const component = await mountSuspended(Player, {
      global: {
        plugins: [vuetify],
      },
    });
    await component.vm.$nextTick(); // Ensure the component is fully rendered
    const player = component.findComponent({ ref: 'vuetifyAudio' });
    console.log(player.exists());
    expect(player.exists()).toBeTruthy();
  });
});