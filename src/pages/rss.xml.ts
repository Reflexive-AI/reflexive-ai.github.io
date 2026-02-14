import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const allArticles = (await getCollection('research'))
        .filter(a => !a.slug.startsWith('es/') && !a.slug.startsWith('ca/'))
        .filter(a => !a.data.draft);

    const sortedArticles = allArticles
        .map(a => ({
            ...a,
            num: parseInt(a.slug.split('-')[0], 10) || 0
        }))
        .sort((a, b) => b.num - a.num);

    return rss({
        title: 'Reflexive AI Initiative',
        description: 'An open research initiative exploring how AI systems can contribute to the analysis, interpretation, and formulation of governance constraints concerning their own behavior.',
        site: context.site!.toString(),
        items: sortedArticles.map(article => ({
            title: article.data.title,
            description: article.data.excerpt,
            pubDate: article.data.date,
            link: `/research/${article.slug}/`,
            categories: [...(article.data.categories || []), ...(article.data.tags || [])],
        })),
        customData: `
      <language>en-us</language>
      <managingEditor>contact@reflexive-ai.github.io (Reflexive AI Initiative)</managingEditor>
      <webMaster>contact@reflexive-ai.github.io (Reflexive AI Initiative)</webMaster>
      <copyright>CC BY 4.0 - Reflexive AI Initiative</copyright>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <image>
        <url>https://reflexive-ai.github.io/logo.png</url>
        <title>Reflexive AI Initiative</title>
        <link>https://reflexive-ai.github.io</link>
      </image>
    `,
    });
}
