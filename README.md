# MemoMate

MemoMate is a full-stack web application that empowers users to upload their notes, data, and documents and interact with them using AI-driven chat functionality. With MemoMate, you can easily query, explore, and gain insights from your personal documents, making information retrieval seamless and intuitive.

Currently, it only supports object storage features. However, significant time and effort were dedicated to the observability and error management of these features.

As part of my research at UWaterloo, I will have hands-on experience developing Multi-Agent AI systems, so until I gain more practical experience, the AI-driven features will not be developed.

Currently, the idea is to use a Multi-Agent approach with different AI agents for differing specialties such as summarizing information, generating examples/practice problems, and solving queried problems.

## Core Features

- Upload and Organize Documents:
  - Easily upload your notes, data, and documents. Organize them into categories for quick access.
- Interactive Querying:
  - Extract specific information from your documents using natural language queries.
- Real-Time Insights:
  - Receive real-time responses and insights from your notes, making research and information retrieval fast and efficient.
- Simply put MemoMate is here to assist you in "memo"-rizing your information!

# Filestructure

Key Folders:
app/: The App Router, which consists of layouts, templates, and file-based routing logic.
components/: Consists of UI components.
server/: Consists of db query, ratelimiting, and analytics logic.

## Techstack

I chose each piece of the stack based on the following criteria:

1. Security
2. Scalability
3. Maintainability

Moreover, the project is primarily powered and scaffolded by the [T3-Project](https://create.t3.gg/).

### Why [Next.js](https://nextjs.org/)?

Next.js has great features like server actions for secure server-side operations, partial pre-rendering for optimizing load times, and advanced routing capabilities like parallel and intercepted routes.

In the project, I leveraged Next.js parallel routes to create pop-up modals with distinct UI states for onClick and refresh actions. Specifically, when users browse their document library and click on a document, they can preview it through a modal, with the URL updating to /dashboard/document/[id] without triggering a full page refresh. If the URL is shared, other users who visit the link will see a ‘full-document-view’ instead of a preview, maintaining a consistent experience for all users based on the same URL.

Overall, Next.js simplifies complex web development tasks, making it easier to create high-performance applications.

### Why [Vercel](https://vercel.com/)?

Vercel uses AWS infrastructure, so it’s built on a solid and reliable foundation. However, it offers a much better user experience than AWS and is free for my needs.

It also makes deployment easy with zero configuration, scales automatically includes a global CDN, and has a cloud-based PostgreSQL service, which I used for my project.

### Why [Drizzle](https://orm.drizzle.team/)?

Drizzle is a TypeScript ORM that provides a great development experience, ensuring that queries are type-safe and errors are caught early in the development process. I previously used PrismaORM and had no complaints, but I wanted to try something new, and have heard great things about Drizzle.

Drizzle is a TypeScript ORM that enhances the development experience by ensuring type-safe queries and catching errors early, it also has a nice dashboard for viewing tables.

I previously used PrismaORM, but I wanted to try something new and have heard excellent things about Drizzle.

### Why [PostgreSQL](https://vercel.com/docs/storage/vercel-postgres)?

I chose PostgreSQL for its simplicity. While newer options like CockroachDB and PlanetScale offer benefits in distributed systems and scalability, I don't expect this project to have many or any users besides myself and some friends.

Vercel does support horizontal scaling for its PostgreSQL services, but it's paid. (So I avoided it)

### Why [Clerk](https://clerk.com/)?

Authentication can be hard and daunting, which I experienced first-hand in my go-auth project, where I created an auth system using SHA256.

Clerk was an easy and practical choice for this project since it provides pre-built, customizable authentication components that save time and effort.

There were some bugs with it though, but a simple refresh on the Vercel platform fixed it.

### Why [PostHog](https://posthog.com/)?

While PostHog is primarily a product analytics tool focused on tracking user behaviour and interactions, it also offers features relevant to logging that align with my needs.

I chose not to use more specialized logging and analytics solutions like Axiom and Datadog since they were completely overkill for my project.

### Why [Sentry](https://sentry.io/welcome/)?

I used Sentry since it seemed to be the industry standard tool for error management and real-time monitoring.

### Why [Upstash](https://upstash.com/)?

I used Upstash’s managed Redis for rate-limiting (particularly for uploading files).

### Why [TurboPack](https://turbo.build/)?

The project uses TurboPack for really quick builds!

### Misc.

- [Zod](https://zod.dev/): TypeScript-first schema validation
- Styling: [TailwindCSS](https://tailwindcss.com/) - Tailwind prose also provides the Markdown with automatic styling
- Component Library: [shadcn](https://ui.shadcn.com/)
- [MDX](https://mdxjs.com/docs/using-mdx/): Lets you use JSX in your markdown content
- [NextMDXRemote](https://github.com/hashicorp/next-mdx-remote): MDX support for RSC

### Considerations

- [Bright](https://bright.codehike.org/) for code blocks and syntax highlighting
- [Velite](https://velite.js.org/) is a tool for building a type-safe data layer, in our case, it turns Markdown/MDX into the app's data layer with Zod schema.
- [tRPC](https://trpc.io/): As of now RSC seems to be the right tool for the job for the most part. Maybe with the LLM-related features, tRPC may be a better choice.
- [https://github.com/steven-tey/novel](Novel): Markdown text editor (Need to work on adding)

## Difficulties Encountered

- Creating a Breadcrumb component that seamlessly integrated with the parallel routes in the project proved to be challenging, leading to the decision to use buttons instead. However, I plan to revisit this later, as a well-implemented breadcrumb component would offer a more intuitive UI, particularly for dashboard navigation.

- I faced some issues with Clerk regarding user tokens being duplicated, not working, invalid, etc. Clearing cookies and redeploying the application from scratch fixed these issues completely.

- Nested 'a' tag issues due to user-uploaded markdown files having Links, fixed by rearranging the Link structure.

- Markdown with invalid references to 'local' files crashing the preview, fixed by splitting the compile step and view step.

## List of Supported Features

### To-do:

- Displaying Markdown files w/ LaTeX support and syntax highlighting support
- Support user-uploaded images
- Everything LLM related
- Document categories

## Learnings

1. React Server Component
   - Incredible explanation: https://www.joshwcomeau.com/react/server-components/
   - and https://vercel.com/blog/understanding-react-server-components
2. New models for rendering
   - Client vs Server component
3. Different Approaches to parsing and rendering MDX files
4. React taint and how it promotes more secure development practices: https://nextjs.org/blog/security-nextjs-server-components-actions
