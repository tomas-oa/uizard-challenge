# ⛰ **Quest: Hacker New Reader**

## Overall Context:

You're building a simple Hacker News (https://news.ycombinator.com) clone. The app will fetch data from a public JSON API endpoint and display it in a simple viewer.


The viewer should have two panels; a left pane showing the top 10 stories; and a right panel displaying a preview of the selected story using an iframe. When a user clicks a story in the left panel, the right panel should switch to the selected story.


Please refer to this simple interactive mockup made in Uizard to illustrate this:

https://app.uizard.io/p/de328bd3

## API:

You are given two endpoints to fetch data from. One foe top stories and one for individual stories.
The latter takes a story ID as argument which can be found in the top stories response. Notice that the top-stories endpoint returns 500 stories. It's your job to make sure the viewer only displays the latest 10.

- Top stories: https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
- Individual story: https://hacker-news.firebaseio.com/v0/item/{STORY_ID}.json?print=pretty

## Important Technical Note:

To display the story preview in the right panel, you'll want to use an <iframe /> element. Because of browser security policies, not all websites will show the iframe - this is okay! A solution to this requires creating server proxies and is far beyond the scope of the challenge, so please do not attempt to solve it.
