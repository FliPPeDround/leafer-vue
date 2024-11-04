<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { ref } from 'vue'

interface Sponsor {
  name: string
  img: string
  url: string
}

interface Props {
  message?: string
}

const { message = 'Leafer Vue是一个免费的开源软件，社区的赞助使其成为可能。' } = defineProps<Props>()

const SponsorsData = ref<Record<string, Sponsor[]>>({
  special: [],
  sponsors: [],
})

async function getSponsorData() {
  const data = await fetch(
    'https://raw.githubusercontent.com/FliPPeDround/sponsors/refs/heads/main/sponsorkit/sponsors.json',
  ).then(res => res.json()) as {
    raw: {
      all_sum_amount: string
    }
    sponsor: {
      avatarUrl: string
      name: string
      linkUrl: string
    }
  }[]

  data.forEach((item) => {
    const amount = Number.parseFloat(item.raw.all_sum_amount.replace(/,/g, ''))
    if (amount >= 100) {
      SponsorsData.value.special.push({
        name: item.sponsor.name,
        img: item.sponsor.avatarUrl,
        url: item.sponsor.linkUrl,
      })
    }
    else {
      SponsorsData.value.sponsors.push({
        name: item.sponsor.name,
        img: item.sponsor.avatarUrl,
        url: item.sponsor.linkUrl,
      })
    }
  })
}
getSponsorData()

const sponsors = [
  {
    tier: 'Special Sponsors',
    size: 'medium',
    items: SponsorsData.value.special,
  },
  {
    tier: 'Sponsors',
    size: 'small',
    items: SponsorsData.value.sponsors,
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
