---
layout: page
---

<script setup>
  import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers,
    VPTeamPageSection,
  } from 'vitepress/theme'

  const creators = [
    {
      avatar: '/vova.png',
      name: 'Вова Воложанинов',
      title: 'ML-исследователь',
      org: 'OpenAI Inc.',
      orgLink: 'https://vk.com/vova3141592',
      desc: 'Создатель сайта, напишет ещё пару статей здесь.',
      sponsor: 'https://vk.com/vova3141592',
      actionText: 'Нравится',
      links: [
        { icon: 'vk', link: 'https://vk.com/vova3141592' },
        { icon: 'telegram', link: 'https://t.me/vova3141592' }
      ]
    },
        {
      avatar: '/vlad.jpg',
      name: 'Влад Воложанинов',
      title: 'DevOps-инженер',
      org: 'Apple Inc.',
      orgLink: 'https://vk.com/id580894789',
      desc: 'Будет писать статьи и везде прикреплять исследования.',
      sponsor: 'https://vk.com/id580894789',
      actionText: 'Нравится',
      links: [
        { icon: 'vk', link: 'https://vk.com/id580894789' },
        { icon: 'telegram', link: 'https://t.me/varpex1' }
      ]
    },
  ]

const members = [
    {
      avatar: '/vova.png',
      name: 'Вова Воложанинов',
      title: 'ML-исследователь',
      org: 'OpenAI Inc.',
      orgLink: 'https://vk.com/vova3141592',
      desc: 'Создатель сайта, напишет ещё пару статей здесь.',
      sponsor: 'https://vk.com/vova3141592',
      actionText: 'Нравится',
      links: [
        { icon: 'vk', link: 'https://vk.com/vova3141592' },
        { icon: 'telegram', link: 'https://t.me/vova3141592' }
      ]
    },
        {
      avatar: '/vlad.jpg',
      name: 'Влад Воложанинов',
      title: 'DevOps-инженер',
      org: 'Apple Inc.',
      orgLink: 'https://vk.com/id580894789',
      desc: 'Будет писать статьи и везде прикреплять исследования.',
      sponsor: 'https://vk.com/id580894789',
      actionText: 'Нравится',
      links: [
        { icon: 'vk', link: 'https://vk.com/id580894789' },
        { icon: 'telegram', link: 'https://t.me/varpex1' }
      ]
    },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Создатели</template>
    <template #lead>Самые умные просто</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="creators" />
  <VPTeamPageSection>
    <template #title>Исследователи</template>
    <template #lead>Помощники всякие</template>
    <template #members>
      <VPTeamMembers size="small" :members="members" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>