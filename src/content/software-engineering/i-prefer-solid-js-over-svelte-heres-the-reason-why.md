---
title: I Prefer Solid JS Over Svelte, Here’s The Reason Why
---

## I am Rich Harris big fan

I was a big fan of Svelte since SvelteKit Beta, and been more hyped after Rich hired by Vercel, and things getting fire after the release of SvelteKit 1.0! Since the Beta I always looking to the github’s v1.0 milestone every week waiting for my prince getting released. The dynamic was pretty high since it’s still Beta, even some said Rich always thinking about new things and Kit will not ever be release. Regardless, he is a really really really really awesome guy and I can’t stand to say that until now he’s always been my role model (and the other frontends too), I always mention his name when I teaching switch career-ers due to his background of a journalist.

But my hype getting declined after some projects, here’s why:

## As the start I feel like writing plain Javascript, but as it scale I’m learning new framework

Svelte getting my attraction since I saw the syntax used on the framework, it just like taking me back into the old HTML, CSS, Vanilla JS era (ofc with battery). But as the project getting more complicated you need to learn more about Svelte. For example how [reactive primitive & objects treated differently, lifecycles, etc](https://dev.to/isaachagoel/svelte-reactivity-gotchas-solutions-if-you-re-using-svelte-in-production-you-should-read-this-3oj3). The full article on the linke explains good amount about what I don’t like in Svelte, and you know what? the reactivity point also [documented pretty well](https://svelte.dev/repl/744eedf16f8d4783a9c183314eb366c3?version=3.42.4). TLDR; its about Svelte’s “magics” being too much for me.

I wouldn’t explain it a lot since there’s more writing to do below, make sure you peek the article attached above

## The bigger the components the bigger the bundle size

It’s obsolete after Svelte 5, but before it (since I write this post 5 is not release yet) the [bundle size will getting bigger the more size of your components](https://github.com/sveltejs/svelte/issues/2546). It’s a bug that getting attention after more frontends using Svelte in production.

## Svelte is getting more “Reacty” I prefer React itself, but I prefer Solid JS over React

This is about Svelte 5’s upcoming rune. As Svelte want to implement signals by using rune, the impact is enforcing developer to differentiate reactive and non-reactive variable using $state() and also another reactive function such $effect. This direction just made me lost my intention to use Svelte at the first place which is to go away from React. If that the case, then I just going back to React or even better Solid JS

## I like JSX idea

After using template for a while, re-thinking the idea to render HTML using Javascript is actually not a bad idea, even I think it’s a comfort zone for me, and I would second the template method. When I knew that I’m going to write a lot of Javascript, then I’m just going to dug in to Javascript itself, using JSX. Svelte Component is not a native web components, it’s Javascript. It's like using artificial sweetener; if the taste is my concern, I'd rather use real sugar. (My mom have diabetes, I feel wrong writing this 😂)

## Solid JS is React for beginner

You will encounter numerous problem when your React codebase grow such as rerendering issue, useEffect hell, Context & Providers, hooks and state that can be only called in JSX (this is the most annoying: it is when I need to pass hooks/state value for me to use it in a separate JS helper file). But in SolidJS that’s not the case, it’s just Javascript and it behave like Javascript (like Svelte used to make me think of it the first time, please don’t dissapoint me Ryan 🙏)

## Solid JS feels like React library instead of a new framework

Well, Solid JS cannot be used inside React but that’s not what I meant. Solid JS has nearly identical syntax with React since both use JSX, and using function and components that only available in Solid feels like you just import it from a library and use it inside React.

```tsx
import { useNavigate, useParams } from "@solidjs/router";

export default function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();

  return (
      <div class="space-y-8 text-sm" onClick={() => navigate("/about"}>
        <div>
	        {params.id}
        </div>
      </div>
      );
}
```

look at that! you would think that’s Next JS right if you don't see the imports, but no it is Solid JS. Sure that’s some gotcha about how reactivity works, but in reality you will learn about the signals nature, awesome right!

## Solid JS is just Javascript without magic

While Svelte gotchas occur due to the nature of Svelte compiler that process Disney castle sized magic, Solid JS reactivity is just Javascript functions. It use functions, proxy, and everything that I still don't get it out to craft fine grained reactivity. Sure Solid JS has compiler, it's mainly used for JSX. Beside JSX your code will look like plain Javascript, even if you want to use old gold JQuery and DOM Manipulation you can just use it straightaway using Solid.

## Here’s the deal, similarity to React means you might interest React Developer

Why compare Solid to React? I’m here for Svelte! For company scale, it simply just means you might get more resource by hiring or simply ask React Developer to do the job! For personal, it means you get a very little learning curve to learn Solid JS, and you might learn more about Javascript if you were a React born developer like me. Like Svelte it can use vanilla JS libraries, web components, DOM manipulation heavy library such as maps without the need of any wrapper to work on Virtual DOM.

Solid JS just works like Svelte behind the scene, it use compiler but the code look like React. With that said, Solid JS make React Developer (even React codes) easy to migrate and beginner friendly for newcomer to jump in since it only need to learn about Javascript itself.

## Conclusion

My experience with Svelte started with its nostalgic HTML-centric syntax and modern JavaScript capabilities, which really caught my attention from its early stages through to the release of SvelteKit 1.0. However, as my projects grew, I faced challenges like managing complex reactivity, concerns over bundle sizes, and noticed a shift towards a more React-like approach with Svelte 5. These changes made me rethink my initial excitement about Svelte's departure from React's style.

In response, I discovered Solid JS, which appealed to me as it offers a React-like experience with simple JavaScript integration and a low learning curve. It's more like a React library rather than a completely new framework, which suits me as I try to balance efficiency with familiarity in my frontend development journey. Solid JS has become my preferred choice over Svelte, especially given its compatibility with React and its just plain Javascript no magic behind it. As I weigh these options, Solid JS continues to shape how I approach and build my projects.
