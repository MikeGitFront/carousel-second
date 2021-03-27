<h1>Carousel component</h1>
<br>
<h2>Following the link you can find first carousel component I made with different approach. <a href="https://github.com/MikeGitFront/carousel">Recommended to see 😄</a></h2>

<h2>Here you can find short <a href="https://imgur.com/a/HIG1fyr">Demo</a></h2> 

<h2><i>Carousel characteristics:</i></h2>
 <ul>
  <li>Works for mobile and desktop devices</li>
  <li>Supports swipes</li>
  <li>Works for any HTML content</li>
  <li>Animated</li>
  <li><b>Supports multiple slides on the screen</b></li>
  <li><b>Supports scrolling to a selected slide</b></li>
</ul>

<h3><i>Installing:</i></h3>
Write it in your terminal: 

```terminal
//Make sure you don't have folder named 'carousel' in the directory

git clone https://github.com/MikeGitFront/carousel-second.git
```

```terminal
//Installing all dependencies

git init
```

```terminal
// Launching local server

npm run dev
```

<h3><i>Usage:</i></h3>

<h4>Multiple slides:</h4>

```javascript
//If you want carousel to display more than 1 slide in a view box, then you can use 'toShow' attribute with the amount of slides you want to display
//If you want to scroll more than 1 slide at once, then you can use 'toScroll' attribute with the amount of slides you want to scroll

<Carousel
         toShow={2}
         toScroll={2}
         >
         //...Some content
</Carousel>
```
<h4>Slide options:</h4>
<h2>Your content must be wrapped in 'div' block</h2>

```javascript
//If you want to display an image you should pass external link or imported image inside 'src' attribute

import picture from './images/picture'

<Carousel>
            <div src={picture} ></div>
            <div src="https://your.image" ></div>
</Carousel>
```


<h4>Dependencies:</h4>
<ul>
 <li><a href="https://styled-components.com/">Styled components</a></li>
 <li><a href="https://react-icons.github.io/react-icons/" >React-icons</a></li>
</ul>

<h3>Don't hesitate to become a stargazer ⭐:</h3>

