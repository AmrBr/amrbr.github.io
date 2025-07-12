import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const experience = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/experience"
    }),
    schema: z.object({
        title: z.string(),
        logo: z.string(),
        description: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        current: z.boolean().optional().default(false),
        techs: z.array(z.string()).optional(),
        location: z.string().optional(),
        workType: z.enum(["onsite", "hybrid", "remote"]).optional(),
    })
});

const education = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/education"
    }),
    schema: z.object({
        title: z.string(),
        logo: z.string(),
        description: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        current: z.boolean().optional().default(false),
    })
});

const certifications = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/certifications"
    }),
    schema: z.object({
        title: z.string(),
        logo: z.string(),
        description: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        current: z.boolean().optional().default(false),
        url: z.string().url().optional(),
    })
});

const projects = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/projects"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(),
        featured: z.boolean().optional().default(false),
        techs: z.array(z.string()).optional(),
    })
});

const site = defineCollection({
    loader: file("./src/content/site/config.json"),
    schema: z.object({
        name: z.string(),
        title: z.string(),
        introduction: z.string(),
        sections: z.object({
            writing: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            projects: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            experience: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            education: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            certifications: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
        }),
        socialLinks: z.array(z.object({
            platform: z.string(),
            url: z.string().url(),
        })).optional(),
    })
});

const writing = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/writing"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        category: z.string(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional().default(false),
    })
});

const bookmarks = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/bookmarks"
    }),
    schema: z.object({
        title: z.string(),
        type: z.enum(["article", "book", "video"]),
        author: z.string(),
        url: z.string().url(),
        publishedAt: z.coerce.date(),
        createdAt: z.coerce.date(),
        description: z.string().optional(),
    })
});

export const collections = {
    experience,
    education,
    certifications,
    projects,
    site,
    writing,
    bookmarks,
}; 