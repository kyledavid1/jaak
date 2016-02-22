# jaak

##Team Members

[Angela Perez](https://github.com/anfperez)

[Andrew Holz](https://github.com/HolzAndrew)

[Jason Chan](https://github.com/Chimerus)

[Kyle Stengline](https://github.com/kyledavid1)


## Developing a basic Chatroom app using Action Cable and Rails 5!

![Chatroom](https://media.giphy.com/media/xTiTnG4MC1jJ2vwzJu/giphy.gif)

### Creating the App and Generating your files

#### Installing Rails 5
* First you'll need to install Rails 5 in order for this to work. 
* We do this by first installing gpg found here: [GPG Download](https://gpgtools.org/) and click **Download GPG Suite**.
* Then we go to our CLI and run these commands. 

``` gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 ```

``` \curl -O https://raw.githubusercontent.com/rvm/rvm/master/binscripts/rvm-installer ```

``` \curl -O https://raw.githubusercontent.com/rvm/rvm/master/binscripts/rvm-installer.asc ```

``` gpg --verify rvm-installer.asc && bash rvm-installer stable ```

``` reload ```

``` gem install nokogiri ```

``` gem update --system ```

``` rvm install ruby-2.3.0 ```

``` rvm use ruby-2.3.0@rails5.0 --create ```

``` gem install rails --pre ```

*You may or may not have to run the below*
``` bundle install ```

``` rvm use ruby-2.3.0@rails5.0 ```


#### Creating the App
1. First we'll create our app by using 
``` rails new <projectname> ```

2. Now, you'll want to generate your controller with a single action called show.
```rails g controller <controllername> show```
3. We then need to go into our ```routes.rb``` file and make the root page our show file. 
We do this because we want to go right to the page where our messages are going to be displayed.
```root to: `rooms#show` ```
![Routes](http://i.imgur.com/7Ql5I4r.png)

4. Now we can run your localhost to check if thats working correctly.

5. We'll now go to our CLI and generate a new model for our messages with a single attribute with the type text. This will set us up with a table called messages.
```rails g model message content:text```

6. Migrate!!!! With Rails 5, we don't have to do ```rake db:migrate```, but instead...
```rails db:migrate```

7. Stupendous! Let hook this model up to the controller. Head to the Controller and gather all our messages to be shown.
![Message.html.erb](http://i.imgur.com/AsKoHKK.png)

8. Don't forget to go to your ```show.html.erb``` within views and change your H1 to say something cool.
![Show File](http://i.imgur.com/eL0RWEb.png)

9. Ok, great! Now we'll go to ```views``` and add a new folder called messages. Within that folder, we create a file called ```_messages.html.erb```
![New Folder and File](http://i.imgur.com/FXG6VZ5.png)

10. This is where we want to render the content of our messages.
![Message Render](http://i.imgur.com/I0VFZO8.png)

11. We can now add some dummy data into our database to check that this is all working. ```rails c``` then ```Message.create! content: 'Dummy Data'```
![Create Message](http://i.imgur.com/v70P3Wg.png)

12. Time to generate a channel! Yes, a channel. We generated a room channel with a single action called speak. 
```rails g channel room speak```
This generater generates two sides of Action Cable. The client side(speak)where our javascript will be and The Server Side where we can call our methods and store/create our data.
![Two Sides to Controller](http://i.imgur.com/NVBhfb9.png)


13. Lets look at the rooms channel on the server side
![rooms channel](http://i.imgur.com/bjX42bA.png)
You will see it has 2 specific callbacks - subscribed and unsubscribed. These are created by default when a channel instance is created by action cable.
You will also see our specified action method- “speak”

14. on the client side in room.coffee
![client side](http://i.imgur.com/JQnl6t2.png)
we have a callback that is connected to server, and server acknowledges the connection. Received is anything you get back from the server.
Speak is our user specified action

15. before we move forward we need to turn on a few things that are commented out. There are two things:
-in router, the mount ActionCable
before:

![ActionCable off](http://i.imgur.com/AOo3dtB.png)
after:

![ActionCable on](http://i.imgur.com/D0gmN6i.png)

on client side - turn on that we want to create a consumer of this cable. Uncomment the last 2 lines in cable.coffee

![@app off](http://i.imgur.com/27wkZ6S.png)

![@app on](http://i.imgur.com/AYDbIeG.png)

You may have noticed this is the same App.cable from the room subscription in room.coffee 

![app.room in room.coffee](http://i.imgur.com/43UFIwY.png)

16. Now lets look at this in the browser (make sure to restart your server)
Open the inspector to see the meta tags are now in the head.
![image](http://i.imgur.com/FJmIi8h.png)

In the console type "App.cable" to see the connection we have setup

![image](http://i.imgur.com/rrvO0zE.png)

Now type App.room.speak. We added this speak command and want to confirm it is being called.

![image](http://i.imgur.com/Nt56lG0.png)

17. Now lets make App.room.speak actually do something.
Go back in room.coffee. Speak must take a parameter, lets do (message), and we need to pass that on to the server side. 

![image](http://i.imgur.com/w37JiE8.png)

Perform calls an action on the server side channel and passes it a hash (message). The hash is automatically serialized with json

18. (eighteen) This hash has been passed to the room_channel.rb on the server side, so we must set up the speak action method.
The speak action must accept data - add a (data) parameter
to test if this is working. We will first set up an echo with something called a broadcast. The broadcast has a built in mechanism that sends the data to the specified channel - we will call our channel ‘room_channel’

![Imgur](http://i.imgur.com/5DmcycG.png)

We will make it that everyone who connects to the channel is able to see the data - in this case the chat.

![Imgur](http://i.imgur.com/sEC0ZdX.png)

This is all very circular. we have the client side calling speak on the server side and the server side. server side takes that and shoots the message right back into the room_channel where it pops up as a new message. this message shows up to all “subscribers, which calls the received in room.coffee.



Angela Part: 11 -16:30

10:30 Make sure that your room_channel.rb file looks like this before continuing:
![image_1](http://i.imgur.com/3vNPbXM.png?1)

Go to room.coffee. Under the received: (data) function, type the following:
![image_2](http://i.imgur.com/vIrSJvR.png?1)

Reload the Rails server. Open your Javascript console and type "App.room.speak("Hello World"). You should receive a Javascript alert saying "Hello World". This will tell you that your speak command is functioning properly.

Go into app > views > rooms > show.html.erb. Now we are going to add a form to the page so that we can get some input from the user.
![image_3](http://i.imgur.com/av8vHS0.png?1)

Go back to room.coffee and input the following code. This code will ensure that users can press Enter/Return to input their messages.
![image_4](http://i.imgur.com/MLsCcEA.png)

Go back to room_channel.rb and change the code so that speak now creates new messages.
![image_5](http://i.imgur.com/udaau0p.png)

Now we are going to create a function known as a job. Go to models > message.rb and enter in the following code.
![image_6](http://i.imgur.com/tC2M5e0.png)

