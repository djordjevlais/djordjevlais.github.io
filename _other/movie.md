---
layout: newcase
title: Helping cinephiles make a movie night
hero-bg: rgba(252, 251, 248, 100)
hero-img: portfolio-movie-hero.png
thumbnail: portfolio-identifi-thumb.png
tagline: 
role: UX, UI, Branding, Prototyping
---

# Problem
I'm really into movies and I often have movie nights with different groups of friends. One thing I've noticed is that we'd often spend hours (or even days!) trying to decide what we're going to watch. Everyone's got their own watchlist, preferences, moods, and it's hard to find something that everyone wants to watch.

After talking to some cinephile friends about their movie-watching experiences, I started thinking about a tool that would help us solve this.

# Initial idea
My initial idea was a simple app with a tinder-like interface, that lets you add movies to your watchlist and see if there are cross-overs between your and your friend's watchlists so you could watch them together. But this meant it could take a while of doing input (adding movies to your watchlist) before you get the value (there is a movie both you and your friends want to watch).

{% include img.html img_1x="movie-tinder.png" img_2x="movie-tinder.png" alt="Movie tinder" %}

Then something interesting happened. Movie social network Letterboxd started getting more and more popular. I realized two things:
- Letterboxd had a watchlist feature, but no way for those lists to interact with each other
- If you're interested in movies, you probably have a Letterboxd account

That meant my app could take people's Letterboxd watchlists and then combine them to give them a movie the entire group wants to see. There would be no need for signups or adding a bunch of movies to the list, and my MVP would be a lot simpler.

There were a couple of apps that do this, but they were really usually really rough MVPs built by lone devs and you needed to read a manual in order to use them. I wanted to make something that you could just open and start using immediately.

# Designing the app
For the look and feel, my first idea was to take inspiration from old VHS cassettes, but that turned out too gimmicky and hard to scan. Then I remembered reading about the revival of vintage self-help and psychology books and diagrams, and that seemed to fit the whole theme of guiding you towards having a fun movie night.

I've designed a simple MVP that lets you:
- Enter your and your friends' Letterboxd usernames
- Choose if you want to get a movie that you all want to see, or at least one person in the group
- Get a movie recommendation, along with useful links for finding the movie online

{% include img.html img_1x="movie-app-1.png" img_2x="movie-app-1.png" alt="Movie app 1" class="wide" %}
{% include img.html img_1x="movie-app-2.png" img_2x="movie-app-2.png" alt="Movie app 2" class="wide" %}

# Prototype
You can [check out a simple static prototype](https://djordje.work/film/onboarding.html). There's not much you can other than clicking the "Pick a movie for me" button, and I've coded quickly as a proof of concept, so it needs more work when it comes to accessibility and responsiveness.

{% include video.html video_src="movie-app-preview.mp4" %}

# The next steps I'm planning
1. Build a simple React prototype so it would be easier to play with dynamic mock data
2. Get in touch with Letterboxd's team and try to get beta API access, otherwise scrape the data manually ☹️