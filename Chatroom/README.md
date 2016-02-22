# jaak

## Developing a basic Chatroom app using Action Cable and Rails 5!

Jason: 16:30 - end


In message.rb, if you use just the  “after_create” hook then job runs before commit so it will error! instead use “after_create_commit”:
![after_create_commit](http://i.imgur.com/5vaGDYC.png)
This will send the MessageBroadcastJob to ActionCable.server.broadcast.

Go to message_broadcast_job.rb. Perform will render the message in a room. What is really interesting is that render is OUTSIDE the controller in the class method itself! So can render partials without being in scope of controller!
![render](http://i.imgur.com/ApmbVkF.png)

Flow: User types into "say something", server calls speak. Channel sends new message to database, which calls MessageBroadcastJob. Then after job done render the partial on the html and broadcast sends it back down the wire.
![flow](http://i.imgur.com/a31oBS0.png)

If we use alert, we can see that what is returned by message is the whole partial, not a string.
![alert](http://i.imgur.com/4nhMs5v.png)

To add the text typed in "say something" we append the data of message (which is not a string, but an element) to HTML element with id of message.
![append](http://i.imgur.com/P1s6jm2.png)

So in this server, can have a chat room that talks back and forth across multiple people!
![multiple](http://i.imgur.com/BEKgLeF.png)

We can also add cacheing to the partial, which works on both ends. 
![cache](http://i.imgur.com/b8wRIP8.png)

One major benefit of Action Cable is that we CAN REUSE TEMPLATES AND MODEL CLASSES both serverside and client side, since it is an integrated system!
