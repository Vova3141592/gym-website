
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lastUpdated: true,
  lang: "ru-RU",
  title: "Научная качалка",
  description: "Ускоряем рост мышц, используя исследования",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      {
        text: 'Накачаться',
        items: [
          { text: 'Парням', link: '/boys/introduction/how-to-gain-muscle' },
          { text: 'Девушкам', link: '/girls/introduction/how-to-gain-muscle' },
        ]
      },
      {
        text: 'О проекте',
        items: [
          { text: 'FAQ', link: '/about/faq' },
          { text: 'Научный подход', link: '/about/why-science-based' },
          { text: 'Написать статью', link: '/about/participate' },
        ]
      },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // используйте ключ `root`, если хотите перевести локаль по умолчанию
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'Выбрать',
                  selectKeyAriaLabel: 'Выбрать',
                  navigateText: 'Перейти',
                  navigateUpKeyAriaLabel: 'Стрелка вверх',
                  navigateDownKeyAriaLabel: 'Стрелка вниз',
                  closeText: 'Закрыть',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'vk', link: 'https://vk.com/vova3141592' },
      { icon: 'telegram', link: 'https://t.me/vova3141592' },
    ],

    //Перевод надписей на русский

    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        dateStyle: 'long'
      }
    },

    editLink: {
      pattern: 'https://github.com/Vova3141592/gym-website/edit/main/scientific-gym/:path',
      text: 'Редактировать эту страницу на GitHub'
    },

    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',

    docFooter: {
      prev: 'Назад',
      next: 'Дальше'
    },

    footer: {
      message: 'Научная качалка',
      copyright: '© 2024 — настоящее время'
    },

    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    
    // Боковая панель

    sidebar: {
      '/boys/': [
        {
          text: 'Введение',
          items: [
            { text: 'Как накачаться?', link: '/boys/introduction/how-to-gain-muscle' },
          ]
        },
        {
          text: 'Условия роста мышц',
          items: [
            { text: 'Объём тренировок', link: '/boys/muscle-growth-factors/training-volume' },
            { text: 'Мышечный отказ', link: '/boys/muscle-growth-factors/close-to-failure' },
            { text: 'Диапазон повторений', link: '/boys/muscle-growth-factors/repetition-range' },
            { text: 'Увеличение нагрузки', link: '/boys/muscle-growth-factors/progressive-overload' },
            { text: 'Восстановление', link: '/boys/muscle-growth-factors/recovery' },
            { text: '«Растяжение» мышц', link: '/boys/muscle-growth-factors/stretch-mediated-hypertrophy' },
            { text: 'Комбинирование упражнений на мышечную группу', link: '/boys/muscle-growth-factors/combining-exercises' },
            { text: 'Отдых между подходами', link: '/boys/muscle-growth-factors/rest-between-sets' },
            { text: 'Изменение фазы в упражнении', link: '/boys/muscle-growth-factors/change-the-phase-of-exercise' },
            { text: '«Бесполезные» приёмы', link: '/boys/muscle-growth-factors/useless-techniques' },
          ]
        },
        {
          text: 'Упражнения',
          items: [
            { text: 'Мышечные группы', link: '/boys/exercises/muscle-groups' },
            { text: 'Признаки эффективных упражнений', link: '/boys/exercises/signs-of-effective-exercise' },
            { text: 'Трапеция', link: '/boys/exercises/trapezius' },
            { text: 'Плечи', link: '/boys/exercises/delts' },
            { text: 'Бицепс', link: '/boys/exercises/biceps' },
            { text: 'Трицепс', link: '/boys/exercises/triceps' },
            { text: 'Грудь', link: '/boys/exercises/chest' },
            { text: 'Широчайшие', link: '/boys/exercises/broad-muscles' },
            { text: 'Ягодицы', link: '/boys/exercises/glutes' },
            { text: 'Квадрицепс', link: '/boys/exercises/quadriceps' },
            { text: 'Задняя поверхность бедра', link: '/boys/exercises/back-of-thigh' },
            { text: 'Приводящие бедра', link: '/boys/exercises/hip-adductors' },
            { text: 'Голени', link: '/boys/exercises/shins' },
          ]
        },
        {
          text: 'Питание',
          items: [
            { text: 'Массонабор', link: '/boys/nutrition/bulking' },
            { text: 'Рекомпозиция', link: '/boys/nutrition/recomposition' },
            { text: 'Поддержание', link: '/boys/nutrition/maintenance' },
          ]
        },
        {
          text: 'Добавки',
          items: [
            { text: 'Креатин', link: '/boys/supplements/creatine' },
            { text: 'Протеин', link: '/boys/supplements/protein' },
            { text: 'Кофеин', link: '/boys/supplements/caffeine' },
            { text: 'Другие добавки', link: '/boys/supplements/other-supplements' },
          ]
        },
        {
          text: 'Защита от травм',
          items: [
            { text: 'Разминка', link: '/boys/injury-prevention/warm-up' },
            { text: 'Правила выполнения упражнений', link: '/boys/injury-prevention/exercise-rules' },
          ]
        },
        {
          text: 'Как выглядеть круче',
          items: [
            { text: 'Одежда', link: '/boys/how-to-look-cooler/clothes' },
            { text: 'Как сфотографироваться', link: '/boys/how-to-look-cooler/photo' },
          ]
        },
        {
          text: 'Фармакология',
          items: [
            {
              text: 'Внутриклеточный метаболизм',
              items: [
                { text: 'Андрогенные рецепторы', link: '/boys/pharmacology/intracellular-metabolism/androgen-receptors' },
                { text: 'Анаболический индекс', link: '/boys/pharmacology/intracellular-metabolism/anabolic-index' },
                { text: 'Ферменты', link: '/boys/pharmacology/intracellular-metabolism/enzymes' },
              ]
            },
            { text: 'Анализы', link: '/boys/pharmacology/tests' },
            {
              text: 'Вещества для набора мышц',
              items: [
                { text: 'Анаболические стероиды', link: '/boys/pharmacology/anabolics/anabolic-steroids' },
                { text: 'SARMs', link: '/boys/pharmacology/anabolics/sarms' },
                { text: 'Пептидные гормоны', link: '/boys/pharmacology/anabolics/peptide-hormones' },
              ]
            },
            { text: 'Минимизируем побочные эффекты', link: '/boys/pharmacology/minimising-side-effects' },
            { text: 'Составляем курс', link: '/boys/pharmacology/charting-a-course' },
          ]
        },
      ],
      '/girls/': [
        {
          text: 'Введение',
          items: [
            { text: 'Как накачаться?', link: '/girls/introduction/how-to-gain-muscle' },
          ]
        },
        {
          text: 'Условия роста мышц',
          items: [
            { text: 'Объём тренировок', link: '/girls/muscle-growth-factors/training-volume' },
            { text: 'Мышечный отказ', link: '/girls/muscle-growth-factors/close-to-failure' },
            { text: 'Диапазон повторений', link: '/girls/muscle-growth-factors/repetition-range' },
            { text: 'Увеличение нагрузки', link: '/girls/muscle-growth-factors/progressive-overload' },
            { text: 'Восстановление', link: '/girls/muscle-growth-factors/recovery' },
            { text: '«Растяжение» мышц', link: '/girls/muscle-growth-factors/stretch-mediated-hypertrophy' },
            { text: 'Комбинирование упражнений на мышечную группу', link: '/girls/muscle-growth-factors/combining-exercises' },
            { text: 'Отдых между подходами', link: '/girls/muscle-growth-factors/rest-between-sets' },
            { text: 'Изменение фазы в упражнении', link: '/girls/muscle-growth-factors/change-the-phase-of-exercise' },
            { text: '«Бесполезные» приёмы', link: '/girls/muscle-growth-factors/useless-techniques' },
          ]
        },
        {
          text: 'Упражнения',
          items: [
            { text: 'Мышечные группы', link: '/girls/exercises/muscle-groups' },
            { text: 'Признаки эффективных упражнений', link: '/girls/exercises/signs-of-effective-exercise' },
            { text: 'Плечи', link: '/girls/exercises/delts' },
            { text: 'Бицепс', link: '/girls/exercises/biceps' },
            { text: 'Трицепс', link: '/girls/exercises/triceps' },
            { text: 'Грудь', link: '/girls/exercises/chest' },
            { text: 'Широчайшие', link: '/girls/exercises/broad-muscles' },
            { text: 'Ягодицы', link: '/girls/exercises/glutes' },
            { text: 'Квадрицепс', link: '/girls/exercises/quadriceps' },
            { text: 'Задняя поверхность бедра', link: '/girls/exercises/back-of-thigh' },
            { text: 'Приводящие бедра', link: '/girls/exercises/hip-adductors' },
            { text: 'Голени', link: '/girls/exercises/shins' },
          ]
        },
        {
          text: 'Питание',
          items: [
            { text: 'Массонабор', link: '/girls/nutrition/bulking' },
            { text: 'Рекомпозиция', link: '/girls/nutrition/recomposition' },
            { text: 'Поддержание', link: '/girls/nutrition/maintenance' },
          ]
        },
        {
          text: 'Добавки',
          items: [
            { text: 'Креатин', link: '/girls/supplements/creatine' },
            { text: 'Протеин', link: '/girls/supplements/protein' },
            { text: 'Кофеин', link: '/girls/supplements/caffeine' },
            { text: 'Другие добавки', link: '/girls/supplements/other-supplements' },
          ]
        },
        {
          text: 'Защита от травм',
          items: [
            { text: 'Разминка', link: '/girls/injury-prevention/warm-up' },
            { text: 'Правила выполнения упражнений', link: '/girls/injury-prevention/exercise-rules' },
          ]
        },
        {
          text: 'Как выглядеть круче',
          items: [
            { text: 'Одежда', link: '/girls/how-to-look-cooler/clothes' },
            { text: 'Как сфотографироваться', link: '/girls/how-to-look-cooler/photo' },
          ]
        },
        {
          text: 'Фармакология',
          items: [
            {
              text: 'Внутриклеточный метаболизм',
              items: [
                { text: 'Андрогенные рецепторы', link: '/girls/pharmacology/intracellular-metabolism/androgen-receptors' },
                { text: 'Анаболический индекс', link: '/girls/pharmacology/intracellular-metabolism/anabolic-index' },
                { text: 'Ферменты', link: '/girls/pharmacology/intracellular-metabolism/enzymes' },
              ]
            },
            { text: 'Анализы', link: '/girls/pharmacology/tests' },
            {
              text: 'Вещества для набора мышц',
              items: [
                { text: 'Анаболические стероиды', link: '/girls/pharmacology/anabolics/anabolic-steroids' },
                { text: 'SARMs', link: '/girls/pharmacology/anabolics/sarms' },
                { text: 'Пептидные гормоны', link: '/girls/pharmacology/anabolics/peptide-hormones' },
              ]
            },
            { text: 'Минимизируем побочные эффекты', link: '/girls/pharmacology/minimising-side-effects' },
            { text: 'Составляем курс', link: '/girls/pharmacology/charting-a-course' },
          ]
        },
      ],
    },

  }
})
