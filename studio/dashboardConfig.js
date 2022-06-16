export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62aa832c9d56b50dff336145',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n9dx1umo',
                  apiId: '58d0cd88-cefc-4c7b-8e99-c37c5bfd920e'
                },
                {
                  buildHookId: '62aa832c9a44470dbdc4f202',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1s4888kb',
                  apiId: '92bf8130-689d-4168-a241-36edcab6bbfe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alishakrany/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1s4888kb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
