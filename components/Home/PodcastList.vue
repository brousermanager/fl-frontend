<template>
  <v-card title="I nostri ultimi podcast" elevation="8">
    <v-list class="podcast-list">
      <v-list-item
        v-for="(podcast, i) in podcasts"
        :key="i"
      >
        <v-card variant="outlined">
          <v-img
            class="align-end text-white"
            height="200"
            :src="podcast.image"
            cover
          >
            <v-card-title>{{ podcast.title }}</v-card-title>
          </v-img>

          <v-card-text>
            <div>{{ podcast.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              variant="tonal"
              @click="navigateTo(podcast.url)"
              v-if="podcast.url"
              text="Ascolta"
            />
            <v-expansion-panels v-if="podcast.episodes">
              <v-expansion-panel title="Ascolta">
                <v-expansion-panel-text>
                  <v-list :lines="false">
                   <v-list-item
                      v-for="(episode, n) in podcast.episodes"
                      :key="n"
                    >
                      <v-list-item-title>
                        <div style="float: left;">
                          {{ n + 1 }} - {{ episode.name }}
                        </div>
                        <div style="float: right;">
                          <v-btn
                            variant="tonal"
                            @click="navigateTo(podcast.url)"
                            text="Vai"
                          />
                        </div>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>                
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-actions>
        </v-card>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
  const { podcasts } = defineProps(["podcasts"]);
</script>

<style scoped>
  .podcast-list {
    overflow-y: auto;
    height: 650px;
  }
</style>
