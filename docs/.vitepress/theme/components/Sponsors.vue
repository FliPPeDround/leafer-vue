<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'

interface Sponsor {
  name: string
  img: string
  url: string
}

interface Props {
  message?: string
}

const { message = 'Leafer Vue是一个免费的开源软件，社区的赞助使其成为可能。' } = defineProps<Props>()

const SponsorsData = {
  special: [
    {
      name: 'ModyQyW',
      url: 'https://github.com/ModyQyW/sponsors',
      img: 'https://avatars.githubusercontent.com/u/31850793?v=4',
    },
  ],
  platinum: [
  ],
} satisfies Record<string, Sponsor[]>

const sponsors = [
  {
    size: 'small',
    items: SponsorsData.special,
  },
]
</script>

<template>
  <VPHomeSponsors
    :message
    :data="sponsors"
  />
  <div class="action">
    <a
      class="sponsor"
      href="https://afdian.com/a/flippedround"
      target="_blank"
      rel="noreferrer"
    >
      赞助此项目
    </a>
  </div>
</template>

<style scoped>
.action {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.sponsor {
  /* .VPButton */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  /* .VPButton.medium */
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  /* .VPButton.sponsor */
  border-color: var(--vp-button-sponsor-border);
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
}

.sponsor:hover {
  /* .VPButton.sponsor:hover */
  border-color: var(--vp-button-sponsor-hover-border);
  color: var(--vp-button-sponsor-hover-text);
  background-color: var(--vp-button-sponsor-hover-bg);
}
</style>
