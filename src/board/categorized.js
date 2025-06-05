import { rawPosts } from './data';

const categorizedPosts = rawPosts.reduce((acc, post) => {
    const map = {
        GYM: 'gym',
        TIP: 'tips',
        TEAM: 'sports',
        DIET: 'diet',
        HT: 'ht',
    };

    const key = map[post.type] || 'etc';
        acc.all.push(post);
        acc[key] = acc[key] || [];
        acc[key].push(post);

        return acc;
    }, {
        all: [],
        gym: [],
        tips: [],
        sports: [],
        diet: [],
        ht: [],
        etc: [],
    });

export { categorizedPosts };
