# F.A.Q.

## What is extens.io and what are the differences with Sails?

extens.io is an open-source governance Node.js ecosystem to make a new kind of realtime web applications built on top of the Sails framework.

Sails is the framework. Built on top of the Sails framework using the extens.io ecosystem means your application requires Sails and you trust extens.io to give you more features, hooks, updates, etc.


## Why did you fork Sails?

We forked Sails for several reasons.

For a long time we required Sails as a dependency. But it was too heavy because we override every generators and a lot of hooks. Then, we use some built-in hooks Sails doesn't.

We removed the `blueprints` hook because it's not good for production. Indeed, one of our philosophy is "production-ready".

We removed the ability to use custom hooks because we want to keep our ecosystem lean and focus. We don't want some conflicts between user hooks, built-in hooks, modules, etc. Don't forget: extens.io is not a framework, it's an ecosystem.

By forking Sails to perfectly fit our needs, we improved the collaboration workflow, the capabilities of your generated application, the open-source governance model.


## What are the pros of using extens.io instead of the original Sails project?

The initial Sails project is great. But as a framework, the main goal is to do whatever users want to. And you can make some crazy deep stuff. Which is cool but you need to really be careful of what you are doing.

The extens.io ecosystem gives you control on your application as much as a framework can provide but with some limitations to keep your project clean, fast, efficient, usable, distribuable and production-ready.

We also provide a powerful admin dashboard to manage your data through modules and a powerful data explorer. You can manage all of your settings, users, APIs, etc. In other words, the admin panel allows you to completely manage your application with an UI.


## Why do you think API first?

Data is everywhere. Data is important. Data is valuable. Data is reusable.

As you know, APIs are the best way to deliver any content you want to distribute. Thinking API first means whatever or wherever your data is, it's always deadly easy to access it.


## Why don't you support CoffeeScript, LiteScript, etc.?

We decided to not support CoffeeScript, LitCoffee and other Coffee technologies mainly because:

- The whole ecosystem is written in JavaScript as your generated applications. We disabled it aiming to keep everything clean and consistant.
- If one day we decide to support Coffee technologies, every developers will ask for Coffee generators and it's a lot of work we don't want to take care of (for now).
