# cookiecutter-react-redux

I'm currently in the process or learning how to use Redux for React. As I'll
probably be creating multiple projects in the future based on this stack I
thought it would be nice to have a base-template for these projects.

** Disclaimer:** This will reflect a stack of tools and a project structure that
works for me without implying that what I'm doing here adheres to any community
best-practices 😉

Right now this template uses React 0.13 and pre-1.0 react-router, which I'll
change as soon as possible to React 0.14 and react-router 1.x (as they become
available).


## How to use

To generate a project based on this template execute the following commands:

```
pip install cookiecutter
cookiecutter https://github.com/zerok/cookiecutter-react-redux.git
```

In order to work with the generated projected simply run `npm install && npm
start`. You will have a server running on port 8080.
