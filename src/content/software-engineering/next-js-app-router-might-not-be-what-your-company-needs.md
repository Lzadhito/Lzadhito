---
title: Next JS’ App Router Might Not Be What Your Company Needs
---

## The Rush for Next JS App Router

The advent of React Server Component and Next JS App Router has instigated a sense of urgency in the tech community. There seems to be a rush to incorporate the Next JS App Router into every project, regardless of whether the application requires Server Side Rendering (SSR) or fullstack capabilities. The allure of the Next JS App Router is indeed tempting, but it's essential to remember that not every application requires the latest tech stack.

## An Unpopular Opinion: The Trap of App Router

Here's my unpopular opinion: Don't fall into the trap of the Next JS App Router. It's easy to get carried away with the buzz surrounding this new release. However, it's important to critically evaluate whether your application genuinely needs these features. In many cases, you might find that the Next JS App Router is not necessary for your project.

## The Drawbacks of App Router

Next JS App Router is undoubtedly a significant advancement for the Next JS ecosystem. Its module foldering system, where your code sits right next to your page, is a feature that I find particularly useful. However, the way things work in the background might not be suitable for everyone. The functionality and nuances of Next JS App Router make it a powerful tool but also a complex one that requires a solid understanding and careful implementation.

## The Cost of Frontend Infrastructure

HTML Hydration and a server-first mentality are other aspects to consider. These might not be for you if you're not interested in incurring additional costs for your frontend infrastructure. While these costs might appear insignificant initially, they can add up over time. Not everyone uses Vercel, Netlify, or any AWS CDN edge-wrapped layer infrastructure to optimize frontend code, and these costs can become a significant part of your budget.

## The Hidden Costs

In fact, you might notice your frontend server bill increasing after opting for Next JS App router. This increase can be noticeable even when compared to a page router due to the component hydration on the Next JS App router. It's crucial to be aware of these hidden costs when deciding on your tech stack.

## The Simplicity of CSR Frontend

In many cases, a simple Client-Side Rendering (CSR) frontend is all it takes to get the job done. Build it, store the build, serve it - it's a straightforward process that often meets the needs of many projects. Sometimes, simpler is indeed better.

## If You Want the SSR Dev Experience

If you desire the SSR development experience, consider using page router on Next JS or any simple framework/configurations that only calls API on the server. These options can give you the SSR experience without the complications and costs associated with more complex solutions like the Next JS App Router.

## Final Thoughts: Even Though I Love App Router, but My Wallet Said The Opposite

To clarify, I'm not saying that I don't like Next JS App Router. In fact, I absolutely love Next JS App Router and the idea behind it. However, I often don't have the extra budget to host it optimally outside Vercel. Therefore, it's important to consider all aspects - from the benefits and drawbacks to the costs and your project's specific requirements - before deciding to use Next JS App Router.
