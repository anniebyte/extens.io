# F.A.Q.

## What's your position with the Sails team?

Some of us have worked several months with the Sails team on the original Sails framework. We really enjoyed it. This is a very good team, with interesting people. We honestly miss working with them.

As you may know, Sails is one of the most popular frameworks in the open-source world and probably the best Node.js framework. We decided to fork Sails and write extens.io on our own architecture for several reasons.

We are confident to say Sails is a very good Node.js back-end framework. But the issue is not about the back-end, it's about the front-end. They tried to take care of the front-end workflow with some default Grunt tasks, pipeline and template engines. This is great if you focus on it but this is not the case here. In our opinion, they shouldn't take care of the front-end at all. Every front-end developer has their own preferences and they will never be happy with a default workflow.

As a framework, Sails needs to be flexible for everybody. This is true. We don't like custom user hooks because it lets developers do some crazy deep stuff we can't manage from the admin panel. There is a hook for everything and we are not ashamed to not like this philosophy. This is a cool feature for a framework but it simply doesn't fit our needs.

The first time we tried Sails we loved the blueprints. We really thought it was a great feature until we discovered it was not production-ready and it has many issues. Don't use blueprints if you want to build a production-ready application and if you want to manage your code on the fly. It's good for prototyping; that's all. This is not what we wanted for our project: we wanted to build production-ready applications, even if we needed to remove this buggy hook.

In conclusion, we decided to fork the original Sails framework because the framework was too permissive for our product and didn't fit our needs.

Some of you asked us why we didn't fork the `waterline` ORM and third-party modules like `skipper`, `captains-log`. Well, we are not ashamed to affirm we don't have the human resources and technical knowledge to do such a thing. Our top first priority is to have a good, stable and trusted framework. Then, if the community really wants us to fork the Waterline project, we'll do, only if some maintainers can work in collaboration with our TC.


## Why do you think API first?

Data is everywhere, important, valuable, and reusable.

As you know, APIs are the best way to deliver any content you want to distribute. Thinking API first means whatever or wherever your data is, it's always deadly easy to access it.

Trying to support any devices like browsers, smartphones, objects, etc. is not our goal. What we want is to simplify the back-end development, just write everything as an API. The support is up to the user, feel free to code on any support you want.


## Why don't you support CoffeeScript?

We decided to not support CoffeeScript and other languages that compile into JavaScript mainly because:

- The whole ecosystem is written in JavaScript as your generated applications. We disabled it aiming to keep everything clean and consistent.
- If one day we decide to support Coffee technologies, every developer will ask for Coffee generators and it's a lot of work we don't want to undertake (for now).
