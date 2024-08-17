# MemoMate
MemoMate is a full-stack web application that empowers users to upload their notes, data, and documents and interact with them using AI-driven chat functionality. With MemoMate, you can easily query, explore, and gain insights from your personal documents, making information retrieval seamless and intuitive.

## Core Features
- Upload and Organize Documents:
  - Easily upload your notes, data, and documents. Organize them into categories for quick access.
- Interactive Querying:
  - Extract specific information from your documents using natural language queries.
- Real-Time Insights:
  - Receive real-time responses and insights from your notes, making research and information retrieval fast and efficient.
- Simply put MemoMate is here to assist you in "memo"-rizing your information!

## Techstack
I chose each piece of the stack based on the following criteria:
1. Security
2. Scalability
3. Maintainability

Moreover, the project is primarily powered and scaffolded by the [T3-Project](https://create.t3.gg/), which streamlines the setup of typesafe Next.js apps WITHOUT compromising modularity.

### Why [Next.js](https://nextjs.org/)?
Next.js is a React framework that enhances performance and developer experience through features like server actions for secure server-side operations, partial pre-rendering for optimizing load times, and advanced routing capabilities like parallel and intercepted routes.

Overall, Next.js simplifies complex web development tasks, making it easier to create high-performance applications.


### Why [Vercel](https://vercel.com/)?
- Vercel Deployment
- Vercel PostgreSQL

### Why [Drizzle](https://orm.drizzle.team/)?
Drizzle is a modern TypeScript ORM that provides a great development experience, ensuring that queries are type-safe and errors are caught early in the development process. Moreover, it offers a fantastic UI interface for making changes to the database, which is incredibly helpful in the development process!

### Why [PostgreSQL](https://vercel.com/docs/storage/vercel-postgres)?
I chose PostgreSQL for its simplicity, strong community support, and proven reliability. While newer options like CockroachDB and PlanetScale offer benefits in distributed systems and scalability. Most importantly, though, PostgreSQL's free access (locally and on the Vercel platform) and my prior experience with it made it the ideal choice for my project.

### Why [Clerk](https://clerk.com/)? 
Authentication can be hard and daunting, which I experienced first-hand in my go-auth project. Clerk is a practical choice since it provides pre-built, customizable authentication components that save time and effort. It integrates easily with popular frontend frameworks and handles security best practices out of the box, reducing the risk of vulnerabilities. Clerk's scalability ensures it can grow with your project, while its straightforward API and good documentation enhance the developer experience. NextAuth is also a great choice, but I've had better developer experience with Clerk; in fact, with Clerk, I can have full user authentication done in MINUTES.

### Why [PostHog](https://posthog.com/)?
While PostHog is primarily a product analytics tool focused on tracking user behaviour and interactions, it also offers features relevant to logging that align with my needs.

My choice of PostHog over a more specialized solution like Axiom was based on its comprehensive nature. PostHog not only caters to analytics but also provides basic logging features, making it a one-stop solution for all my needs.

In the future, investing in more robust logging, such as Axiom, may be worthwhile.

### Why [Sentry](https://sentry.io/welcome/)?
Seems to be the industry standard tool for error management and real-time monitoring.

Bonus: They also have a office in my hometown of Toronto!

### Why [Upstash](https://upstash.com/)?
Upstash’s managed Redis handles the scaling and availability automatically-MemoMate uses Redis for rate-limiting.

### Styles and Component Library 
TailwindCSS and Shadcn/ui



## Difficulties Encountered

## List of Supported Features
### To-do:
- User authentication
- Upload and delete Markdown files
- Displaying Markdown files w/ LaTeX support and syntax highlighting support
- Rate-limiting
- Logging
- Error management and real-time monitoring

## WIP Features
- Everything LLM related