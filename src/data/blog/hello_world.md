---
banner_alt: A photo of a forest overlooking the bright white sky in the background
banner: https://images.unsplash.com/photo-1675186883824-a14b5c5d8da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
title_prefix: Introducing
title: 👋🏻 Hello World
description: This site has been long overdue a re-design & fresh lick of paint, so here's how I did it.
date: '2023-01-01'
---

## :face_with_raised_eyebrow: What is this?

---

This is my new Website! Built from the ground up with a whole new tech stack that I selected based on what I have learn't & been using over the past few months / years.

So, with the amount of work that went into re-building my current website but with a whole new look & a whole bunch of new features & options, I thought now this would be a good change to show some of them off.

## :question: Why

---

In short, it was long overdue. I usually try to update my personal portfolio website every year or so. I use it as an opportunity to experiment, try new tech, new ideas, etc. However, due to complications I kept delaying it, putting it off & just never doing it. However as of late I had a burst of motivation to get it done & launched. My previous portfolio site I deployed back in the beginning of 2019 & does look alright even today. However, it was built thick & fast using VuePress & mean't if I wanted to expand it & add new blog posts it was perfectly doable, but anything else would have taken a lot more work.

So, having been a few years since my last portfolio website launch I decided to work with a blank slate & see what I could make from scratch.

## :hammer: Tech Stack

---

The [project](#) built using the following tools & frameworks:

-   :atom_symbol: [React](https://reactjs.org/) / [Preact](https://preactjs.com/) (For Production)
-   :muscle: [Next.js](https://nextjs.org/)
    -   :mag: [next-seo](https://github.com/garmeeh/next-seo)
    -   :crescent_moon: [next-themes](https://github.com/pacocoursey/next-themes)
-   :female-singer: [EmotionCSS](https://emotion.sh)
-   :lipstick: [Twin.macro](https://github.com/ben-rogerson/twin.macro) (For [Tailwind CSS](https://tailwindcss.com/))
-   :tokyo_tower: [Tailwind UI](https://tailwindui.com/)
-   :feather: [Feather Icons](https://feathericons.com/)
-   :file_cabinet: [Hookstate](https://hookstate.js.org/)
-   :+1: [react-use](https://github.com/streamich/react-use)

In summary, my Next.js project is configured to replace [React](https://reactjs.org/) with Preact in production builds.

```js:next.config.js
webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
            'react': 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
        });
    }

    return config;
},
```

### :book: Blog

---

As you can tell by the fact you're currently reading this, I now have a blog! :tada:

This means that I finally have a place to create lengthy articles that can go more in-depth on topics I care deeply about. Eveyrthing from technical write-ups on new technology I am experimenting with, to other personal posts on hobbies enjoy, such as mechanical keyboards.

<XButton href="/blog" icon="feather:external-link" label="Vist my Blog" />

### :clipboard: Projects

---

<XButton href="/projects" icon="feather:external-link" label="Go to Projects" />

### :clock1: Timeline

---

When planning out my re-design I explored hundreds of portfolio websites. Some from big well known developers, to smaller less known devs. To very successfull designers, to students who have some really amazing looking sites so early on.

To quickly name a few that helped me a lot:

-   [prakashnayak.com.np](https://prakashnayak.com.np)

That last one in particular I wanted to thank for this feature as I found it as a really nice way to track & record big events without having to do a blog post every time.
With a bit of technical planning & building I was able to put together a simple JSON structure that would allow me to simply add a new object with simple data about the event to add it to my timeline page. Most of the heavy lifting of which is done by [Next.js's static site generation (SSG)](https://nextjs.org/blog/next-9-3#next-gen-static-site-generation-ssg-support).

<XButton href="/timeline" icon="feather:external-link" label="Go to Timeline" />

### :speaker: Sound

---

A fair few of the portfolio websites I looked at always had a nice touch of flair & one such touch I always found that I really liked was sound. Nothing crazy like playing music in background the whole time, but instead just subtle sound effects like button clicks, etc.

It's a small addition, built using [`use-sound`](https://github.com/joshwcomeau/use-sound), that adds some depth & makes the site feel much more interactive.

Currently the click sound is the only sound effect... For now. In the future I would like to experiment adding more sound effects to the site to continue expanding the feature. One such sound effect I have in mind I plan on looking into in the future is a envelope opening sound for when opening a blog post, or something similar? Not too sure yet but a nice idea I feel.

### :wheelchair: Accessibility

---

The final fea... Well, kind of a feature but more of a much needed improvement has been accessibility.

My previous website iteration met a lot of the minimum requirements for basic accessibility, however it could have been a lot better. Since the launch of that site I have learn't a LOT about the importance of accibility when designing & building websites / applications. As such I wanted to do my very best when building this one to improve it & make it as accessible as possible.

Here are some of the notable accessibility features/improvements:

#### Alt tags

---

Something small but very noticible is adding alt tags or `aria-label`'s where possible. This includes any & all images and buttons. This way screen readers are able to actually understand what the element is & read it back to the user.

#### Focus Highlights

---

Primarily brought to my attention by the work of Discord via there [`focus-rings`](https://github.com/discord/focus-rings) package & [TailwindCSS](https://tailwindcss.com/) offering a new `ring` style system aimed at helping with focus visiblity & accessibility.

![Focus ring](/blog/hello_world/focus.png 'Focus ring')

#### Keyboard navigation

---

While not complete coverage, I aimed to offer complete or near complete keyboard navigation as it can aid with accesibility systems by ensuring that all items both can be navigated to at all, but also in the order you need.

![Focus ring switching between buttons](/blog/hello_world/keyboard_nav.gif 'Focus ring switching between buttons')

#### Reduced Motion

---

When implementing my very pretty & fancy looking particles background, I started to consider the performance & accessibility implications of offering such animations. As such I began researching into motion & animation accesbility in the web.

From there I found out about the [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) CSS media query. By defualt when my site first loads, the initial state of the `animations` setting will default to whatever this query provides. If for whatever reason though this fails you are still always able to toggle off animations manually via the settings icon in the top right at all times.

With this setting I am toggle not only the background aniamtion graphic off, but also toggle off the transitions that are wrapping several components on several pages.

### Settings toggles

---

Following from the reduced motion toggle mention above, the settings dropdown, which is always located in the top right of the screen, also contains toggle buttons (Both displaying an icon to represent the icon as well as a checked icon to represent its current state) for toggling between light & dark theme, as well as to toggle sound effects.

### Caveats

---

While I have tried to put in a good amount of time trying to add accessibility options & be as accomadating as possible, it is still not perfect.

Here are some ways I still want to eventually improve the accessibilty even further:

-   Reduced motion event listener updates settings `animations` state
-   Improve animated background performance by using `GPGPU` from [`ogl`](https://oframe.github.io/ogl/examples/)
-   Set theme back to using system theme instead of user override
-   Many more to come

I will always try to improve accessibility where possible. If you feel I am missing a key feature of accessibility, please reach out, let me know & educate me on its importance so I can try enforce its use in future & in other projects.

## The Result

---

And with all of that, we have the final result of what you are looking at right now!

<!-- ![A screenshot of nuro.dev](/blog/hello_world/screenshot.png 'A screenshot of nuro.dev') -->
